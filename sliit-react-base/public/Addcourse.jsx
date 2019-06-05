import React, {Component} from 'react';
import axios from 'axios';

export default class Addcourse extends Component {

    constructor(props) {
        super(props);
        this.upname=this.upname.bind(this);
        this.upcode=this.upcode.bind(this);
        this.uppassMark=this.uppassMark.bind(this);
        this.uplectureinCharge=this.uplectureinCharge.bind(this);
        this.upsubjects=this.upsubjects.bind(this);
        this.Submit=this.Submit.bind(this);

        this.state = {
            name: '',
            code:'',
            passMark:0,
            lectureinCharge:'',
            subjects:""

        }
    }

    upname(e){
        this.setState({name:e.target.value})
    }
    upcode(e){
        this.setState({code:e.target.value})
    }
    uppassMark(e){
        this.setState({passMark:e.target.value})
    }
    uplectureinCharge(e){
        this.setState({lectureinCharge:e.target.value})
    }
    upsubjects(e){
        this.setState({subjects:e.target.value})
    }

    Submit(e){
        alert("hgfyyfhjyj");
        e.preventDefault();
        alert("hgfyyfhjyj");
        let sub=this.state.subjects.split(',');
        console.log(sub);
        const co={
            name: this.state.name,
            code:this.state.code,
            passMark:this.state.passMark,
            lectureinCharge:this.state.lectureinCharge,
            subjects:sub
        }
        console.log(co);
        axios.post('http://localhost:3000/api/messages/courses/add',co).then(res=>{

                alert(res.data);

        });

        /*this.setState({
            name: '',
            code:'',
            passMark:0,
            lectureinCharge:'',
            subjects:""
        })*/
    }


    render() {
        return(

            <form onSubmit={this.Submit}>
                <br/>
                <br/>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.upname}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="code">code</label>
                        <input type="text" className="form-control" id="code" placeholder="code" value={this.state.code} onChange={this.upcode}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="mark">passMark</label>
                        <input type="number" className="form-control" id="mark" placeholder="passMark" value={this.state.passMark} onChange={this.uppassMark}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lectureinCharge">lectureinCharge</label>
                        <input type="text" className="form-control" id="lectureinCharge" placeholder="lectureinCharge" value={this.state.lectureIncharge} onChange={this.uplectureinCharge}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="subjects">subjects</label>
                    <input type="text" className="form-control" id="subjects" placeholder="subjects1,subjects2,..." value={this.state.subjects} onChange={this.upsubjects}/>
                </div>

                <button  className="btn btn-primary" type="submit">Add Cource</button>
            </form>
        );
    }

}