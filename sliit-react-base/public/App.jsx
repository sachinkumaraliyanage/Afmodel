import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Addcourse from './Addcourse'
import MyCourses from './MyCourses'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        fetch('/api/messages', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({message: jsonRes.message});
            })
            .catch(err => {
                this.setState({message: 'An error occurred'});
            });
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <Router>
                    <div className="row">

                        <Link to="/addco" ><div className="col-sm btn btn btn-danger">
                            Add Course
                        </div></Link>
                        &nbsp;
                        <Link to="/show"><div className="col-sm btn btn-warning">
                            show Course
                        </div></Link>
                    </div>

                <Route path="/addco" render={props=>{
                    return <Addcourse/>;
                }} />

                <Route path="/show" render={props=>{
                    return <MyCourses/>;
                }} />
                </Router>


            </div>
        );
    }
}
