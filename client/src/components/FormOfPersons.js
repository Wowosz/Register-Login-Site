import React, { useState } from 'react';
import "../styles/StyleFormOfPersons.scss"

export default function FormOfPersons(props) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    return(
            <form onSubmit={handleSubmit} className="formBase">
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)}/>
                <button type="submit">ADD PERSON</button>
            </form>
    );

    function handleSubmit(e) {
        e.preventDefault();
        props.addPerson(name, surname);
    }
};
