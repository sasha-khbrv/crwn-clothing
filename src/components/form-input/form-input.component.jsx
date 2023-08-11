import "./form-input.styles.scss";

const FormInput = ({ label, id, ...restProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...restProps} />
      {label && (
        <label
          htmlFor={id}
          className={`${
            restProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
