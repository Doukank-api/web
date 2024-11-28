import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();
    const handleRegister=()=>{
        navigate("/register");
    }
  return (
    <>
      <div className="form-group">
        <Header headerText="Login" motto="Giriş Yapın" />
        <label className="col-sm-2 control-label">Login</label>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Log in</button>
        <button onClick={handleRegister}>Sign in</button>

      </div>
    </>
  );
}
