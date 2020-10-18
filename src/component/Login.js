import React from "react";

const Login = () => {
  return (
    <section>
      <div className="login">
        <form>
          <label>Username</label>
          <input type="text" style={{ marginBottom: 20 }} />
          <br />
          <label>Password</label>
          <input type="password" style={{ marginBottom: 20 }} />
          <br />
          <input value="submit" type="submit"></input>
        </form>
      </div>
    </section>
  );
};

export default Login;
