import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';



export default class MyCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: [],

        }


        axios.get('http://localhost:3000/api/messages/courses/') .then(response => {


            console.log(response);
            this.setState(
                {
                    data:response.data
                })
            console.log(this.state.data)

        })
    }



    componentDidMount() {


    }

    render() {

        return <div>

<br/><br/><br/>
            <table className="table table-striped">
                <thead>
                <tr>

                    <th scope="col">Name</th>
                    <th scope="col">Passmark</th>
                    <th scope="col">Lecturer</th>
                </tr>
                </thead>
                <tbody>

                    {
                        this.state.data.map(function(course){
                            return   <tr> <td key={course.id}>{course.name}</td> <td key={course.id}>{course.lectureinCharge}</td> <td key={course.id}>{course.lectureinCharge}</td></tr>;
                        })
                    }



                </tbody>
            </table>
        </div>;
    }
}
