import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up-form.styles";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const handleResetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      handleResetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("Email already in use");
      } else {
        console.log("user creation: ", error);
      }
    }
  };

  const handleChangeField = (event) => {
    const { name, value } = event.target;
    const newFields = { ...formFields, [name]: value };
    setFormFields(newFields);
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          id={"nameId"}
          type="text"
          required
          value={displayName}
          name={"displayName"}
          onChange={handleChangeField}
        />
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
        <FormInput
          label={"Confirm Password"}
          id={"confirmId"}
          type="password"
          required
          value={confirmPassword}
          name={"confirmPassword"}
          onChange={handleChangeField}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
};
export default SignUpForm;
