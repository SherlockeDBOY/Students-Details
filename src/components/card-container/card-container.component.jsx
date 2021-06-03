import React from 'react';
import { Card } from '../card/card.component';
import './card-container.style.css';

export const CardContainer = props =>  (
        <div className="card-container">
            {
                props.students.map(
                    student => (
                        <Card key={student.id} student={student}/>
                    )
                )
            }
        </div>
);
