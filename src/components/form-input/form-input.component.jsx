import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, id, ...restProps }) => {
  return (
    <Group>
      <Input {...restProps} />
      {label && (
        <FormInputLabel htmlFor={id} shrink={!!restProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
