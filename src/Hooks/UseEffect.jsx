import { useEffect, useState } from "react";



const UseEffectComponent =() =>{

    const [age, setAge] = useState(6);

    const [name , setName] = useState("Manahil")

    useEffect( ()=>  {
        console.log("COMPONENT is render")

    }, [ age] )

    
const ageHandler = ()=>{

        setAge(7);
 };

    return(
        <>
            USE EFFECT
             {age}

              <button onClick={ageHandler}> Click Age</button>
        </>
    )

}

export default UseEffectComponent;