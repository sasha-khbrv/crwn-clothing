import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, SignInButtons } from "./sign-in-form.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleResetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
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

  const signInWithhGoogle = () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
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
        <SignInButtons>
          <Button type="submit">Sign In</Button>
          <Button
            btnType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithhGoogle}
          >
            Sign In with Google
          </Button>
        </SignInButtons>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
