import { useState } from "react";

const UseEffectHook = ()=> {

const [department, setDepartment]= useState("CARDIOLOGY");

const [patient, setPatient] = useState(true);

const [doctorAvailable, setDoctorAvailable] = useState(false);

const [raining, setRaining] = useState(true);

const [labOpen, setLabOpen] = useState(false);

const [medicineAvailable, setMedicineAvailable] = useState(false);


const departmentHandler = () => {
    setDepartment("NEUROLOGY");


console.log("Check it", department);
 if(department) {
    console.log("if")
    setDepartment("psychology")
 }else{
    console.log("else");
    setDepartment ("Gastrology");
 }

};

const patientHandler = () => {
    setPatient("false")

    console.log("verify it", patient)
    if(patient){
        console.log("if")
        setPatient("stable")
    }else{
        console.log("else")
        setPatient("unstable")
    }
};

const doctorAvailableHandler = () =>{
    setDoctorAvailable(true)
    if(doctorAvailable){
        console.log ("Doctor Available");
    }else{
        console.log("Doctor not available")
    }
};

const rainingHandler= ()=>{
    setRaining(false)
    if(raining) {
        console.log("Take Umbrella");
    }else{
        console.log("Umbrella not needed");
    };
};

const labOpenHandler = ()=> {
    setLabOpen(true)
    if (labOpen) {
        console.log("Lab Opened");
    }else{
        console.log("lab Closed");
    }
};

const medicineAvailableHandler = ()=> {
    setMedicineAvailable (true)
    if(medicineAvailable) {
        console.log("medicine Available");
    }else{
        console.log("Out of stock");
    }
};

return (
    <>
    <p>department= {department} </p>

    {
        department ? (
            <>
            <h4>Heart Department</h4>
            </>
        )
         : (
             <h4>Other Department</h4>
         )
        }


    
        <p>patient= {patient}</p>


        {
            patient ? (
                <>
                <h3>Patient is recovering</h3>
                </>
            )
             :(
                <h3>Patient needs attention</h3>
             )
            }
        <>
        <p> doctorAvailable= {doctorAvailable}</p>

        {
            doctorAvailable ? (
                <>
                <h4>Doctor Available</h4>
                </>
            )
            :(
                <h4>Doctor not Available</h4>
            )
        };

        <p>raining={raining}</p>

        {
            raining ?(
                <>
           <h5>Take Umbrella</h5>
           </>
            )
            :(
                <h4>Umbrella not needed</h4>
            )
        };

        <p>labOpen= {labOpen}</p>

        {
            labOpen ? (
                <>
                <h4>Lab Opened</h4>
                </>
            )
              : (
                <h4>Lab Closed</h4>
              )
            }

            <p>medicineAvailable= {medicineAvailable}</p>

            {
                medicineAvailable ? (
                    <>
                    <h3>medicine Available</h3>
                    </>
                )
                : (
                    <h3>Out of stock</h3>
                )
};

 </>

      <button onClick = {departmentHandler}>Click Department</button>

       <button onClick= {patientHandler}>Click Patient</button>

       <button onClick = {doctorAvailableHandler} >Click Doctor Available</button>

       <button onClick = {rainingHandler}>Click Raining</button>

       <button onClick = {labOpenHandler}>Click Lab Open</button>

       <button onClick = {medicineAvailableHandler}>Click Medicine Available</button>
          </>
        );
    }; 


export default UseEffectHook;


        




