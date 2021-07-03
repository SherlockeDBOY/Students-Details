import React, { Component } from 'react';
import './App.css';
import './css/inputbox.style.css'
import {CardContainer} from './components/card-container/card-container.component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
    constructor(){
        super();
        this.state = {
            students: [],
            searchField: ''
        };

        // this.handleChange = this.handleChange.bind(this); (Need not to write this statement for an arrow function just for a normal js function)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({students: users}));
    }

    handleChange = event => {
        this.setState({searchField: event.target.value});
    };

    render() {
        const { students, searchField } = this.state; //Destructing
        const filteredStudents = students.filter( student =>
            student.name.toLowerCase().includes(searchField.toLowerCase())
        ); 
        //.filter() will give a new array
        //.includes() checks whether the string value passed inside the includes is actually in the student

        return (
            <div className='App'>
                <h1 className="heading"> Student Details </h1>
                <SearchBox
                placeholder = 'Search Students'
                handleChange = {this.handleChange}
                />
                <CardContainer students={filteredStudents}/>
            </div>
        )
    }
}

export default App