import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// const auth = getAuth();

export default function () {
  async function logIn(email: string, pass: string) {
    const auth = getAuth();
    const user = await signInWithEmailAndPassword(auth, email, pass).then(
      (err) => err
    );
    return user;
  }
  async function logOut() {
    const auth = getAuth();
    console.log(auth.currentUser?.email);
    const result= await signOut(auth);
  }
  async function createUser(email: string, pass: string) {
    const auth = getAuth();
    const user = await createUserWithEmailAndPassword(auth, email, pass).then(
      (err) => err
    );
    return user;
  }
  const initUser = async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      }
    });
  };
  return { logIn, logOut, createUser, initUser };
}
