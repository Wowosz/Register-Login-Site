import React, { useState } from "react";
import BaseSite from "./BaseSite"
import styles from "../styles/RegisterSite.module.scss"

export default function LoginSite(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return(
        <BaseSite site={RegisterForm()}/>
    );

    function RegisterForm() {
        return(
            <form>
                <input name="login" placeholder="Login" autocomplete="off" value={login} onChange={e => setLogin(e.target.value)}/>
                <input name="password" placeholder="Password" autocomplete="off" value={password} onChange={e => setPassword(e.target.value)}/>
                <input name="email" placeholder="Email" autocomplete="off" value={email} onChange={e => setEmail(e.target.value)}/>
                <button onClick={e => {e.preventDefault(); Register();}}>
                    Register
                </button>
            </form>
        );
    }

    function Register(){
        console.log("register");
    }
}