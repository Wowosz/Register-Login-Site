import React from "react";

export default function PrintPersons(props) {
    return(
        <div>
            <ul>
                {createPersonsList(props.persons)}
            </ul>
        </div>
    );

    function createPersonsList(persons){
        let list = [];
        persons.forEach((person, index) => {
            list.push(<li key={index}>
                <p>Name: {person.name}</p>
                <p>Surname: {person.surname}</p>
            </li>);
        });
        return list;
    }
}