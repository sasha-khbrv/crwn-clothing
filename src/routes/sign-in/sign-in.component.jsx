import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
