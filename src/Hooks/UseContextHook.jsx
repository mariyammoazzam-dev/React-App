import { useState } from "react";

const UseContextHook = () => {

    const[name,setName]= useState("RUDOLF VIRCHOW");

    const [country, setCountry]= useState("ENGLAND");

    const [course,setCourse]=useState("React.js");

    const [subjects, setSubjects] = useState("MateriaMedica");

    const [professors, setProfessors] = useState("DR.SULTAN AYAZ");

    const [university, setUniverity] = useState("GOVERNMENT UNI FAISALABAD");

    const [department , setDepartment] = useState("BACHELOR OF EASTERN MEDICINE & SURGERY");

    const [city, setCity] = useState("ISLAMABAD");

    const [concealer, setConcealer] = useState("MISS ROSE");

    const [lotion, setLotion]= useState("NIVEA")

    




const nameHandler =() => {
    setName("LOUIS PASTEUR");

    console.log("verify it",name)
    if(name){
        console.log("IF")
        setName("ARISTOTLE")
    }else{
        console.log("ELSE")
        setName("ALBERT EINSTEIN")
    }
};



const countryHandler=()=>{
    setCountry("PAKISTAN")
    console.log("match",country)
    if(country){
        console.log("IF")
        setCountry("DUBAI")
    }else{
        console.log("ELSE")
        setCountry("AMERICA")
    }
};

const courseHandler =()=>{
    setCourse("javascript")
};

const subjectsHandler =()=>{
    setSubjects("clinical Diagnostics")
};

const professorsHandler= () =>{
    setProfessors("DR.WAFA ABBAS")
};

const universityHandler= () => {
    setUniverity("AGRICULTURE UNI FAISALABAD")
};

const departmentHandler = () =>{
    setDepartment("DOCTOR OF PHARMACY")
};

const cityHandler = () => {
    setCity("LAHORE");
};

const concealerHandler = () =>{
    setConcealer("EMELLIE");
};

const lotionHandler= () =>{
    setLotion("LADY BLUE");
};

console.log("country",country);

console.log("course", course);
console.log("name",name);
console.log("subjects", subjects);
console.log("professors", professors);
console.log("university", university);
console.log("department", department);
console.log("city", city);
console.log("concealer", concealer);
console.log("lotion", lotion);

return(
    <>
    <p>name={name}</p>
    <p>country={country}</p>
    <p>course={course}</p>
    <p>subjects={subjects}</p>
    <p>professors={professors}</p>
    <p>university = {university}</p>
    <p>department= {department}</p>
    <p>city={city}</p>
    <p>concealer= {concealer}</p>
    <p>lotion= {lotion}</p>
    

    {
        name ? (
            <>
        
          <h4> "Aristotle here"</h4> 
           </>
        )
        :(
            <h5> "Welcome Rudolf virchow"</h5>
        )
    }

    {
        country? (
            <>
            <h6>"I went to America" </h6>
            </>
        )
        :(
            <h3>"America is the largest country"</h3>
        )
}

   <button onClick= {nameHandler}>Click Name</button>
   <button onClick={countryHandler}>Click Country</button>
   <button onClick={courseHandler}>Click Course</button>
   <button onClick= {subjectsHandler}> Change Subjects</button>
   <button onClick= {professorsHandler}>Click Professors</button>
   <button onClick= {universityHandler}>Click University</button>
   <button onClick= {departmentHandler}>Click Department</button>
   <button onClick= {cityHandler}>Click City</button>
   <button onClick = {concealerHandler}>Click Concealer</button>
   <button onClick = {lotionHandler}>Click Lotion</button>
        </>
      );
};

export default UseContextHook;




