import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    FormLabel,
    Button,
    FormControl,
    Image,
  } from '@chakra-ui/react'

  import axios from 'axios';
  import { app } from '../../config/firebase/firebaseConfig';
  import { v4 } from 'uuid'
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function CreateModal({active, close}) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [displayImage, setDisplayImage] = React.useState('');
    const [demo, setDemo] = React.useState({
        name: '',
        image: ''
    });

    React.useEffect(() => {
        if(active) return onOpen();
    }, [active, onOpen])

    function handleClose() {
        close(false)
        onClose();
    }

    function handleChange(e, type) {
        if(type === 'text')
          return setDemo({...demo, [e.target.name]: e.target.value})
        if(type === 'image'){
          setDemo({...demo, [e.target.name]: e.target.files[0]})
          return setDisplayImage(URL.createObjectURL(e.target.files[0]))
        } 
    }

    async function handleSubmit() {
        if(demo.image === '' || demo.name === '') return alert('Vui lòng nhập đầy đủ thông tin');
        if(demo.image.name === undefined) {
            return await axios.post('https://porfolio-api-six.vercel.app/demo/post', demo)
            .then((res) => {
                if(res.data.message !== 'Thêm thành công') return alert('Đã xảy ra lỗi')
                return window.location.reload();
            })
        }
            const storage = getStorage(app);

            const storageRef = ref(storage, `images/${demo.image.name + v4()}`);
            console.log(storageRef)
        
            // 'file' comes from the Blob or File API
            await uploadBytes(storageRef, demo.image).then((snapshot) => {
              
               getDownloadURL(snapshot.ref).then((url) => {
      
                let uri = 'https://porfolio-api-six.vercel.app/demo/post';
      
                 axios.post(uri, {name: demo.name, image: url}).then((res) => {
      
                  if(res.data.message !== 'Thêm thành công') return alert('Đã xảy ra lỗi');
                  return window.location.reload();
                })
              })
            });
    }

    // React.useEffect(() => {
    //     console.log(demo)
    // }, [demo])


    return (
        <Modal isOpen={isOpen} onClose={() => handleClose()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm sản phẩm</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Tên</FormLabel>
              <Input 
                name='name'
                onChange={(e) => handleChange(e, 'text')}
              />
              <FormLabel>Hình ảnh</FormLabel>
             
              {displayImage !== '' &&  <Image src={displayImage} />}
              <Input 
                name='image'
                type='file' 
                onChange={(e) => handleChange(e, 'image')}

                />
              
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} 
              onClick={() => handleClose()}
            >
              Đóng
            </Button>
            <Button  variant='ghost' onClick={() => handleSubmit(demo)}>Thêm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
}

export default CreateModal;