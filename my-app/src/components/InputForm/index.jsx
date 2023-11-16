
function InputForm(props) {
  const { description, type, name, id, required } = props;
  
  return (
    <div className="input-wrapper">
      <label>
        {description}
        <input
          type={type}
          name={name}
          id={id}
          required={required}
        />
      </label>
    </div>
  );
}

export default InputForm;
