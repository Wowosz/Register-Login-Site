import React, { useState } from "react";
import FormOfPersons from "./FormOfPersons";
import PrintPersons from "./PrintPersons";
import "../styles/StylePersons.scss"

export default function Persons() {
    const [persons, setPersons] = useState([]);

    return(
        <div className="wrapper">
            <FormOfPersons addPerson={addPerson}/>
            <PrintPersons persons={persons} />
        </div>
    );

   
    function addPerson(name, surname){
        setPersons([...persons, {"name": name, "surname": surname}]);
    } 
}