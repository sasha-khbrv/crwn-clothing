import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleResetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      handleResetFormFields();
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        alert("Wrong email or/and password");
      }
      console.log(error);
    }
  };

  const handleChangeField = (event) => {
    const { name, value } = event.target;
    const newFields = { ...formFields, [name]: value };
    setFormFields(newFields);
  };

  const signInWithhGoogle = async () => {
    await signInGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          id={"emailId"}
          type="email"
          required
          value={email}
          name={"email"}
          onChange={handleChangeField}
        />
        <FormInput
          label={"Password"}
          id={"passwordId"}
          type="password"
          required
          value={password}
          name={"password"}
          onChange={handleChangeField}
        />
        <div className="sign-in-btns">
          <Button type="submit">Sign In</Button>
          <Button btnType="google" type="button" onClick={signInWithhGoogle}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
