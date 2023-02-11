import React from 'react';
import {
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Tfoot,
    TableContainer,
    TableCaption,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Image,
  } from "@chakra-ui/react";

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

  import axios from "axios";
  import { app } from '../../config/firebase/firebaseConfig';
  import { v4 } from 'uuid'
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
  import CreateModal from '../CreateModal/CreateModal';

function Tables({type}) {

  const [colection, setColection] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenCreate, setIsOpenCreate] = React.useState(false);
  const [displayImage, setDisplayImage] = React.useState('');
  const [edit, setEdit] = React.useState({
    id: '',
    name: '',
    image: '',
    email: '',
  });

  function calApi(params) {
    axios.get(`https://porfolio-api-six.vercel.app/${params}`)
    .then((response) => {
      setColection(response.data)
      return response.data;
    })
  }

  React.useEffect(() => {
    if(type === 'thongtin'){
      return calApi('info');
    }
    if(type === 'sanpham'){
      return calApi('demo');
    }
  }, [type])


  function editItem(params) {
    setEdit(params);
    onOpen();
  }

  // React.useEffect(() => {
  //   console.log(edit);
  // }, [edit])

  function handleChange(e, type) {
    if(type === 'text')
      return setEdit({...edit, [e.target.name]: e.target.value})
    if(type === 'image'){
      setEdit({...edit, [e.target.name]: e.target.files[0]})
      return setDisplayImage(URL.createObjectURL(e.target.files[0]))
    } 
  }

  function handleCloseModal() {
    setDisplayImage('');
    onClose();
  }

  async function handleSubmit(params, type) {
    
    const file = params.image;
    
    console.log(file);

    if(file.name !== undefined){

      const storage = getStorage(app);

      const storageRef = ref(storage, `images/${file.name + v4()}`);
      console.log(storageRef)
  
      // 'file' comes from the Blob or File API
      await uploadBytes(storageRef, file).then((snapshot) => {
        
        getDownloadURL(snapshot.ref).then((url) => {

          let uri = type === 'thongtin' ? 'https://porfolio-api-six.vercel.app/info/update' : 'https://porfolio-api-six.vercel.app/demo/update'

          let object = type === 'thongtin' ? 
            {id: params.id,
            name: params.name,
            image: url,
            email: params.email} : {
              id: params.id,
              name: params.name,
              image: url,
            }

          axios.post(uri, object).then((res) => {

            if(res.data.message !== 'Chỉnh sửa thành công') return alert('Đã xảy ra lỗi');
            return window.location.reload();
          })
        })
      });

    }
    else{

      let uri = type === 'thongtin' ? 'https://porfolio-api-six.vercel.app/info/update' : 'https://porfolio-api-six.vercel.app/demo/update'

          let object = type === 'thongtin' ? 
            {id: params.id,
            name: params.name,
            image: params.image,
            email: params.email} : {
              id: params.id,
              name: params.name,
              image: params.image,
            }

      return await axios.post(uri, object)
      .then((response) => {
        // return response.data;
        console.log(response.data)
      })
    }

  }

  async function handleDelete(params) {
    console.log(params)
    await axios.post('https://porfolio-api-six.vercel.app/demo/delete', params)
      .then((res) => {
        if(res.data.message === 'Xóa thành công'){
          return colection.filter(i => {return i.id !== params.id})
        }
      })
  }


    return (
        <>
        
        <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>name</Th>
              <Th>image</Th>
              {type === 'thongtin'&& <Th>email</Th> }
              <Th>edit</Th>
            </Tr>
          </Thead>
          <Tbody>

            {colection.map((i) => {
              if(type === 'thongtin'){
                return <Tr key={i.id}>
                  <Td>{i.id}</Td>
                  <Td>{i.name}</Td>
                  <Td>{i.image}</Td>
                  <Td>{i.email}</Td>
                  <Td >
                    <Text
                      display='inline-block'
                      _hover={{
                        cursor:'pointer'
                      }}
                      onClick={() => editItem(i)}
                    >

                    <FontAwesomeIcon icon={faPen} color="black" />
                    </Text>

                    <Text display='inline-block' marginLeft={4} >
                      <FontAwesomeIcon icon={faTrash} color="black" />
                    </Text>
                  </Td>
                </Tr>
              }
              if(type === 'sanpham'){
                return <Tr key={i.id}>
                  <Td>{i.id}</Td>
                  <Td>{i.name}</Td>
                  <Td>{i.image}</Td>
                  <Td>{i.email}</Td>
                  <Td >
                    <Text
                      display='inline-block'
                      _hover={{
                        cursor: 'pointer'
                      }}
                      onClick={() => editItem(i)}
                    >
                      <FontAwesomeIcon  icon={faPen} color="black" />
                    </Text>

                    <Text display='inline-block' _hover={{ cursor: 'pointer' }} marginLeft={4} onClick={() => handleDelete(i)} >
                      <FontAwesomeIcon icon={faTrash} color="black" />
                    </Text>
                  </Td>
                </Tr>
              }
            })}

          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th >multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={() => handleCloseModal()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chỉnh sửa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              {type === 'sanpham' ? <>
              <FormLabel>Tên</FormLabel>
              <Input 
                defaultValue={edit.name} 
              />
              <FormLabel>Hình ảnh</FormLabel>
              <Input defaultValue={edit.image}/>
              </>
              : <>
              <FormLabel>Tên</FormLabel>
              <Input 
                name='name'
                defaultValue={edit.name} 
                onChange={(e) => handleChange(e, 'text')}
              />
              <FormLabel>Hình ảnh</FormLabel>
              
                <Image src={displayImage !== '' ? displayImage : edit.image} alt='avatar'/>

                <Input 
                name='image'
                type='file'
                // defaultValue={edit.image}
                onChange={(e) => handleChange(e, 'image')}
              />

              <FormLabel>Email</FormLabel>
              <Input 
                name='email'
                defaultValue={edit.email}
                onChange={(e) => handleChange(e, 'text')}
              />
              </>  
            }
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => handleCloseModal()}>
              Đóng
            </Button>
            <Button onClick={() => handleSubmit(edit,type)} variant='ghost'>Chỉnh sửa</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {type === 'sanpham' && <Button onClick={() => setIsOpenCreate(true)} >Thêm sản phẩm</Button>}

      <CreateModal active={isOpenCreate} close={setIsOpenCreate}/>
      </>
    );
}

export default Tables;