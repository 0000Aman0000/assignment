import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";
const auth = getAuth();
export  default async function (email:string, pass:string){
    try{const user = await createUserWithEmailAndPassword(auth ,email,pass)
    console.log(user);
    return user;}
    catch(err){
        return err;
    }
}