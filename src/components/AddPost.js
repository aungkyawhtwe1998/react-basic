import React, {Component} from "react";
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';
class AddPost extends Component{
    state ={
        title:"",
        desc:"",
    }
    addUser = (e)=>{
        e.preventDefault();
        this.props.addPost({id:uuid(), ...this.state});
        this.setState({
            title:"",
            desc:"",
        });
        this.props.navigate("/");
        //console.log("new user", this.state)
    }
    render() {
        const{navigate}= this.props;
        return (
            <div className="card bg-dark px-5 mt-2">
                <h3 className="text-white text-center mt-3">Add new Post</h3>
                <form onSubmit={this.addUser}>
                    <label htmlFor="" className="form-label text-white">Post Title</label>
                    <input type="text" className="form-control rounded-0" id="title" onChange={e=> this.setState({title:e.target.value})} value={this.state.title}/>

                    <label htmlFor="" className="form-label text-white">Post Description</label>
                    <input type="text" className="form-control rounded-0" id="desc" onChange={e=> this.setState({desc:e.target.value})} value={this.state.desc}/>

                    <div id="emailHelp" className="form-next"></div>
                    <button type="submit" className="btn btn-primary mt-2 float-end">Add</button>
                </form>
            </div>
        );
    }
}
//export default AddPost;
export default (props) => {
    const navigator = useNavigate();
    return <AddPost {...props} navigate={navigator}/>
}