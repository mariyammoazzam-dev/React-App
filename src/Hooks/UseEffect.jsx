import { useEffect, useState } from "react";



const UseEffectComponent =() =>{

    const [age, setAge] = useState(6);

    const [name , setName] = useState("Manahil")

    const [company, setCompany] = useState("Dubizzle Labs");

    useEffect( ()=>  {
        console.log("COMPONENT is render")

    }, [ age] )

    useEffect( () => {
        console.log("COMPONENT MOUNTED")
    }, [company] )


    
const ageHandler = ()=>{

        setAge(7);
 };

 const companyHandler =() => {
        setCompany("Tkxel");
 };

    return(
        <>
            USE EFFECT
             {age}

             USE EFFECT
             <p> 
             {company}</p>

              <button onClick={ageHandler}> Click Age</button>
              <button onClick={companyHandler}>Click Company</button>
        </>
    )

}

export default UseEffectComponent;