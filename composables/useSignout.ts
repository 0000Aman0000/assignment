import { getAuth, signOut } from "firebase/auth";

export const useSignout = async () => {
    const auth = getAuth();
    const result = await signOut(auth);
    return result;
};