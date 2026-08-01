import "./SignUp.css";



const SignUp =( data ) =>{
  return (
    <>
   
    <div className="container">
      <form className="signup-form">
        <h1>Sign Up</h1>

        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <input type="password" placeholder="Confirm Password" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
   
  );
}

export default SignUp;


