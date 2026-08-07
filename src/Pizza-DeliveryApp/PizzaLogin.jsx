import "./PizzaLogin.css";


const PizzaLogin = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-section">
          <span className="pizza-icon">🍕</span>
          <h1>Pizza Delivery</h1>
        </div>

        <p className="subtitle">
          Login to Order Your Favorite Pizza
        </p>

        <form>
          <input
            type="email"
            placeholder="Enter Email"
            className="input-field"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="input-field"
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </div>
  );
};



export default PizzaLogin;