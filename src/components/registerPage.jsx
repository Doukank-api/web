import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const handleLogin=()=>{
        navigate("/login");
    }
  return (
    <>
      <div className="form-group">
        <Header headerText="Sign in" motto="Kayıt Olun" />
        <label className="col-sm-2 control-label">Sign in</label>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign in</button>
        <button onClick={handleLogin}>Log in</button>

      </div>
    </>
  );
}
