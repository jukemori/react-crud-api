
const Form = (props) => {
  const { handleChange, handleSubmit, value, buttonType } = props
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name：</label>
          <input type="text" name="name" id="name" onChange={(e) => handleChange(e)} value={value.name}/>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input type="text" name="country" id="country" onChange={(e) => handleChange(e)} value={value.country}/>
        </div>
        <input type="submit" value={buttonType} onClick={(e) => handleSubmit(e)}/>
      </form>
    </>
  )
};
export default Form;
