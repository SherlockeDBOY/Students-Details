import React, { Component } from 'react';
import './App.css';
import './css/inputbox.style.css'
import {CardContainer} from './components/card-container/card-container.component';

class App extends Component {
    constructor(){
        super();
        this.state = {
            students: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({students: users}));
    }

    render() {
        const { students, searchField } = this.state;
        const filteredStudents = students.filter( student =>
            student.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className='App'>
                <h1 className="heading"> Student Details </h1>
                <input 
                    type="search" 
                    placeholder="Search Students"
                    onChange= {
                        e => {
                            this.setState({searchField: e.target.value})
                        }
                    }
                    id="inputBox"
                />
                <CardContainer students={filteredStudents}/>
            </div>
        )
    }
}

export default App
