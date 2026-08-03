

 
// const age =12
// let address
// var name

import { useState } from "react";



const UseStateHook =() =>{

    const [age, setAge] = useState(6);

    const [name , setName] = useState("Manahil")

    const [ guestArrived, setGuestArrived] = useState( false); // boolean

    const [fee, setFee]= useState("5000");

    const[marks,setMarks]= useState("75");

    const [salary, setSalary]= useState("32000");

    const [rollnumber,setRollnumber]=useState("102");

    const [books,setBooks]= useState("67");

    const [attendance,setAttendance]=useState("54");

    const [classroom,setClassroom]= useState("17");

    const [quizattempts, setQuizAttempts]= useState("4");

    const [courses,setCourses]=useState("8");

    const [kitchenArea,setKitchenArea]= useState("2000");



const ageHandler = ()=>{

        setAge(7);
 };

    const nameHandler = () => {
        setName("Maryam Nawaz")
    }

    const guestHandler = () => {
         setGuestArrived(true);

        console.log("CHECK HERE", guestArrived)
        if(guestArrived){
            console.log("IF")
            setAge(25)
        }else {
            console.log("ELSE")
            setAge(67)
        }
    };
       
     const feeHandler=()=>{
        setFee("10000");
    };

    const marksHandler=()=>{
        setMarks("90");
    };

    const salaryHandler=()=>{
        setSalary("58000");
    };

    const rollnumberHandler=()=>{
        setRollnumber("113");
    };

    const booksHandler=()=>{
        setBooks("books+1");
    };

    const attendanceHandler=()=>{
        setAttendance("78");
    };

    const classroomHandler=()=>{
        setClassroom("20");
        console.log("VERIFY HERE", classroom)
        if(classroom){
            console.log("IF")
            setClassroom("15")
        }else{
            console.log("ELSE")
            setClassroom("19")
        }
    };

    const quizHandler=()=>{
        setQuizAttempts("10")
    };

    const coursesHandler=()=>{
        setCourses("25")
        console.log("CHECK HERE", courses)
        if(courses){
            console.log("IF")
            setCourses("6")
        }else{
            console.log("ELSE")
            setCourses("17")
    };
};

const kitchenAreaHandler=()=>{
    setKitchenArea("3500")
};



    // we will use tenrary operator
    console.log("age enkdshkjvhfdjvbhnbvfmnbvfdmn",age );
    console.log("NAME =====>>>>>>", name);
    console.log("guest", guestArrived)
console.log("MY component is render")

    console.log("fee",fee);

    console.log("marks",marks);

    console.log("salary", salary);

    console.log("rollnumber", rollnumber);

    console.log("books",books);

    console.log("attendance", attendance);

    console.log("classroom", classroom);

    console.log("quizattempts",quizattempts);

    console.log("courses",courses);

    console.log("kitchenArea", kitchenArea);

    

return (
        <>
             <p> Age = {age}</p>
             <p>Name = { name} </p>
             <p> Guest Arrived = {guestArrived}</p>

             <p>fee={fee}</p>

             <p>marks={marks}</p>

             <p>salary={salary}</p>

             <p>rollnumber={rollnumber}</p>

             <p> books={books}</p>

             <p>attendance={attendance}</p>

             <p>classroom={classroom}</p>

             <p>quizattempts={quizattempts}</p>

             <p>courses={courses}</p>

             <p>kitchenArea={kitchenArea}</p>

             { 
              guestArrived  ? (

             <>
              <h5> Welcome to our house </h5>
                <h3> ewhfdjhdfjk</h3>
              </>
             )
              : (
              
              <h6>We are waiting  </h6>
              )
            }
            {
              classroom ?(
                <>
                <h4>"Students entered in classroom"</h4>
                </>
              )
                :(
                    <h5>"Waiting for students"</h5>
                )
            }
         {
           courses ?(
            <>
            <h5>"Students has enrolled in many courses"</h5>
</>
           )
           :(
            <h4>"Students should enroll in more courses"</h4>
           )
}


    

             <button onClick={ageHandler}> Click Age</button>

              <button onClick={nameHandler}> click Name </button>


              <button onClick={guestHandler}> click guest</button>

              <button onClick={feeHandler}>click Fee</button>

              <button onClick={marksHandler}>click Marks</button> 

              <button onClick={salaryHandler}>click Salary</button>

              <button onClick={rollnumberHandler}>click Rollnumber</button>

              <button onClick={booksHandler}>Add books</button>

              <button onClick={attendanceHandler}>Mark attendance</button>

              <button onClick={classroomHandler}> click classroom</button>

              <button onClick={quizHandler}>Attempt Quiz</button>

              <button onClick={coursesHandler}>Select Courses</button>

              <button onClick={kitchenAreaHandler}>click kitchenArea</button>

              </>
    );
};


        

export default UseStateHook;


