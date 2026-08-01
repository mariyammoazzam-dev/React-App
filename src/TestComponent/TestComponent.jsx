


const WelcomeMessage = ({ name , age, address}) => {

  return <h4> my name  {name}! and age = {age} and address = {address}</h4>;
};


const DisplayJobPostingFunctionComponent = ({city}) =>{
    return <p> new job is open in {city}</p>

}
const TestComponent =( data ) =>{
  return (
    <>
    <DisplayJobPostingFunctionComponent
        city= "Swat"
    />


     <WelcomeMessage 
        name= "Shebaz "
        age ="70"
        address= "MOdel town, lahore"
        />


       



    </>
   
  );
}

export default TestComponent;


