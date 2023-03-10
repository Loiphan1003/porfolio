import { firestore } from "./firebaseConfig";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

export const getDocument = async (name) => {

    let result = name === 'info' ? {} : [];

    const querySnapshot = await getDocs(collection(firestore, name));
    querySnapshot.forEach((doc) => {
       
        if(name === 'info') result = {...doc.data(), id: doc.id};
        else result.push({...doc.data(), id: doc.id});
    });
    return result;
}

export const updateDocument = async (nameColection, object) => {
    
    try {

        let{id, name, email, used, member, discription, image, githubLink} = object;

        // console.log(object)
        await setDoc(doc(firestore, nameColection, id),  
         nameColection === 'info' ? {name, email, image} : {name, used, member, discription, image, githubLink}
        )
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

