import React, { useState } from "react";
import BaseSite from "./BaseSite"
import styles from "../styles/RegisterSite.module.scss"
import { Link, useHistory } from "react-router-dom";

export default function LoginSite(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    return(
        <BaseSite site={RegisterForm()}/>
    );

    function RegisterForm() {
        return(
            <form className={styles.registerForm}>    
                <input type="text" name="login" placeholder="Login" autocomplete="off" className={styles.inputSoft} value={login} onChange={e => setLogin(e.target.value)}/>
                <input type="text" name="password" placeholder="Password" autocomplete="off" className={styles.inputSoft} value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="text" name="email" placeholder="Email" autocomplete="off" className={styles.inputSoft} value={email} onChange={e => setEmail(e.target.value)}/>
                <div className={styles.checkboxParent}>
                    <input type="checkbox" name="veryfication"/>
                    <label className={styles.registerText} for="veryfication">Do you accept regulations and terms of use?</label>
                </div>
                <button className={styles.registerButton} onClick={e => {e.preventDefault(); Register();}}>
                    Register
                </button>
                <p className={styles.registerText}>Already registed? <Link to="/">Sign In!</Link></p>
            </form>
        );
    }

    function Register(){
        history.push("/");
    }

}