import React, { useState } from "react";
import BaseSite from "./BaseSite"
import styles from "../styles/LoginSite.module.scss"
import { Link } from "react-router-dom";

export default function LoginSite(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    return(
        <BaseSite site={LoginForm()}/>
    );

    function LoginForm() {
        return(
            <form className={styles.loginForm} >
                <input type="text" name="login" placeholder="Login" autocomplete="off" className={styles.inputSoft} value={login} onChange={e => setLogin(e.target.value)}/>
                <input type="text" name="password" placeholder="Password" autocomplete="off" className={styles.inputSoft} value={password} onChange={e => setPassword(e.target.value)}/>
                <button className={styles.loginButton} onClick={e => {e.preventDefault(); Login();}}>
                    Login
                </button>
                <p className={styles.loginText}>Not Registred? <Link to="/register">Sing up!</Link></p>
            </form>
        );
    }
    
    function Login(){
        console.log("working");
    }
}