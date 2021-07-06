import React, { useState } from "react";
import BaseSite from "./BaseSite"

export default function LoginSite(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    return(
        <BaseSite site={LoginForm()}/>
    );

    function LoginForm() {
        return(
            <form>
                <input name="login" placeholder="Login" value={login} onChange={e => setLogin(e.target.value)}/>
                <input name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={e => {e.preventDefault(); Login();}}>
                    Login
                </button>
            </form>
        );
    }
    
    function Login(){
        console.log("working");
    }
}