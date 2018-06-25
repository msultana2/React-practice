import React from 'react';

const Person = (props) => (
    <p>My name is {props.name}, {props.children}</p>
);

export default Person;