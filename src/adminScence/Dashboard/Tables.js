import React from "react";
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
  Textarea,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { app } from "../../config/firebase/firebaseConfig";
import { v4 } from "uuid";
import { getDocument, updateDocument } from "../../config/firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import CreateModal from "../CreateModal/CreateModal";

function Tables({ type }) {
  const [colection, setColection] = React.useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenCreate, setIsOpenCreate] = React.useState(false);
  const [displayImage, setDisplayImage] = React.useState("");
  const [edit, setEdit] = React.useState({
    id: "",
    name: "",
    image: "",
    email: "",
  });
  const [product, setProduct] = React.useState({
    id: "",
    name: "",
    used: "",
    discription: "",
    image: "",
  });

  React.useEffect(() => {
    getDocument(type)
      .then((result) => {
        return setColection(result)
      })
  }, [type]);

  function editItem(params) {
    if (type === "info") setEdit(params);
    else setProduct(params);
    onOpen();
  }

  // React.useEffect(() => {
  //   console.log(colection);
  // }, [type])

  function handleChange(e, type, kind) {
    if (type === "text") {
      if (kind === 'info') return setEdit({ ...edit, [e.target.name]: e.target.value });
      return setProduct({ ...product, [e.target.name]: e.target.value });
    }
    if (type === "image") {
      if (kind === 'info') setEdit({ ...edit, [e.target.name]: e.target.files[0] });
      else setProduct({ ...product, [e.target.name]: e.target.files[0] });
      return setDisplayImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleCloseModal() {
    setDisplayImage("");
    onClose();
  }

  async function handleSubmit(type) {
    const file = type === "info" ? edit.image : product.image;

    // console.log(file);

    if (file.name !== undefined) {
      console.log(type);
      const storage = getStorage(app);

      const storageRef = ref(storage, `images/${file.name + v4()}`);
      console.log(storageRef);

      // 'file' comes from the Blob or File API
      await uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {

          let object =
            type === "info"
              ? {
                id: edit.id,
                name: edit.name,
                image: url,
                email: edit.email,
              }
              : {
                id: product.id,
                name: product.name,
                used: product.used,
                discription: product.discription,
                image: url,
              };

          return updateDocument(type, object).then((result) => {
            if (result) console.log(result)
            else alert("lỗi !!!")
          })
        });
      });
    } else {
      let object =
        type === "info"
          ? {
            id: edit.id,
            name: edit.name,
            image: edit.image,
            email: edit.email,
          }
          : {
            id: product.id,
            name: product.name,
            used: product.used,
            discription: product.discription,
            image: product.image,
          };

      return updateDocument(type, object).then((result) => {
        if (result) console.log(result)
        else alert("lỗi !!!")
      })
    }
  }

  async function handleDelete(params) {
    console.log(params);
    await axios
      .post("https://porfolio-api-six.vercel.app/demo/delete", params)
      .then((res) => {
        if (res.data.message === "Xóa thành công") {
          return colection.filter((i) => {
            return i.id !== params.id;
          });
        }
      });
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
              {type === "info" && <Th>email</Th>}
              <Th>edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {type === "info" && colection !== undefined && (
              <Tr key={colection.id}>
                <Td>{colection.id}</Td>
                <Td>{colection.name}</Td>
                <Td>{colection.image}</Td>
                <Td>{colection.email}</Td>
                <Td>
                  <Text
                    display="inline-block"
                    _hover={{
                      cursor: "pointer",
                    }}
                    onClick={() => editItem(colection)}
                  >
                    <FontAwesomeIcon icon={faPen} color="black" />
                  </Text>

                  <Text display="inline-block" marginLeft={4}>
                    <FontAwesomeIcon icon={faTrash} color="black" />
                  </Text>
                </Td>
              </Tr>
            )}

            {type === "demos" &&
              colection.length !== undefined &&
              colection.map((i) => {
                return (
                  <Tr key={i.id}>
                    <Td>{i.id}</Td>
                    <Td>{i.name}</Td>
                    <Td>{i.image}</Td>
                    <Td>{i.email}</Td>
                    <Td>
                      <Text
                        display="inline-block"
                        _hover={{
                          cursor: "pointer",
                        }}
                        onClick={() => editItem(i)}
                      >
                        <FontAwesomeIcon icon={faPen} color="black" />
                      </Text>

                      <Text
                        display="inline-block"
                        _hover={{ cursor: "pointer" }}
                        marginLeft={4}
                        onClick={() => handleDelete(i)}
                      >
                        <FontAwesomeIcon icon={faTrash} color="black" />
                      </Text>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>multiply by</Th>
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
              {type === "demos" ? (
                <>
                  <FormLabel>Tên</FormLabel>
                  <Input
                    name="name"
                    defaultValue={product.name}
                    onChange={(e) => handleChange(e, 'text', 'demos')}
                  />

                  <FormLabel>Công nghệ sử dụng</FormLabel>
                  <Input
                    name="used"
                    defaultValue={product.used}
                    onChange={(e) => handleChange(e, 'text', 'demos')}
                  />

                  <FormLabel>Mô tả</FormLabel>
                  <Textarea
                    name="discription"
                    defaultValue={product.discription}
                    onChange={(e) => handleChange(e, 'text', 'demos')}

                  ></Textarea>

                  <FormLabel>Hình ảnh</FormLabel>
                  <Image
                    src={displayImage !== "" ? displayImage : product.image}
                    alt="avatar"
                  />
                  <Input 
                    name="image"
                    type="file"
                    // defaultValue={product.image} 
                  />
                </>
              ) : (
                <>
                  <FormLabel>Tên</FormLabel>
                  <Input
                    name="name"
                    defaultValue={edit.name}
                    onChange={(e) => handleChange(e, "text", 'info')}
                  />
                  <FormLabel>Hình ảnh</FormLabel>

                  <Image
                    src={displayImage !== "" ? displayImage : edit.image}
                    alt="avatar"
                  />

                  <Input
                    name="image"
                    type="file"
                    // defaultValue={edit.image}
                    onChange={(e) => handleChange(e, "image", 'info')}
                  />

                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    defaultValue={edit.email}
                    onChange={(e) => handleChange(e, "text", 'info')}
                  />
                </>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleCloseModal()}
            >
              Đóng
            </Button>
            <Button onClick={() => handleSubmit(type)} variant="ghost">
              Chỉnh sửa
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {type === "demos" && (
        <Button onClick={() => setIsOpenCreate(true)}>Thêm sản phẩm</Button>
      )}

      <CreateModal active={isOpenCreate} close={setIsOpenCreate} />
    </>
  );
}

export default Tables;
