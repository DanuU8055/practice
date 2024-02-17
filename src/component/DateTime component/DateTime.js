const DateTime = () =>{
    // to get local Date and local time seperate.

  const x=new Date().toLocaleDateString();
  const z=new Date().toLocaleTimeString();
  return (
    <>
    <h1>Danish</h1>
    <p>{x}</p>
    <p>{z}</p>
    </> 
  )
}
export default DateTime;