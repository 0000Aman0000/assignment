import { signInWithEmailAndPassword, User } from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();

  const user = useState<User | null>("fb_user", () => null);

  const signInUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const userCreds = await signInWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        user.value = userCreds.user;
        console.log(userCreds);
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };

  return {
    user,
    signInUser,
  };
}