const FormInput = ({
  name,
  type = "text",
  label,
  value,
  onChangeInputValue,
}) => {
  return (
    <div className="form-control">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChangeInputValue}
        className="form-input"
        type={type}
        name={name}
        id={name}
        value={value}
      />
    </div>
  );
};
export default FormInput;
