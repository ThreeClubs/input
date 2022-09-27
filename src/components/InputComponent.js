export default function InputComponent({handleChange}) {
  return (
    <div className="form">
      <h4>Input Text</h4>
      <form>
        <input type="text" onChange={handleChange}></input>
      </form>
    </div>
  );
};


