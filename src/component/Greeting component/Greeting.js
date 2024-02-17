const Greeting=()=>{
    //  According to time result 
var x=new Date().getHours();
let greeting="";
var cssStyle={};
if(x>=1 && x<=11){
  greeting="Good Morning";
  cssStyle.color = "red";
}
else if(x>=12 || x<=19){
  greeting="Good After Noon";
  cssStyle.color = "green";
}
else{
  greeting="Good night";
  cssStyle.color = "blue";
}
  return(
    <>
    <center>
      <h1>Hello sir ,<span style={cssStyle}> {greeting}</span></h1>
    </center>
    </>
  )
  
}
export default Greeting;