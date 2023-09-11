import React from "react";

const UserFavoriteAnimals = (props) => {
    console.log(props);
    return (
        <>
            <ul>
            <h2>Mapping through an array</h2>
            {props.info.map((animal) => <li>{animal}</li>)}
            </ul>
        </>
    );
};

export default UserFavoriteAnimals;
