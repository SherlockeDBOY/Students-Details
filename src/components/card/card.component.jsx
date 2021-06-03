import React from 'react';
import './card.style.css';

export const Card = props => (
    <div className="card">
        <img 
            alt="Students" 
            src={`https://robohash.org/students/${props.student.id}?size=180x180`}
        />
        <h2> { props.student.name } </h2>
        <p>{props.student.email}</p>
    </div>
);
