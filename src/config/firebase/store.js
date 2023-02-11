import { app } from './firebaseConfig';
  import { v4 } from 'uuid'
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImage = async (file) => {
    const storage = getStorage(app)

    const storageRef = ref(storage, `images/${file.name + v4()}`);
    

    // 'file' comes from the Blob or File API
    return await uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            console.log(url)
            return url;
        })
    })
}