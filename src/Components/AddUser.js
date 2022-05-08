import React, {useState, useEffect} from "react";
export default function AddUser(props){
    const [name,setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        console.log(name);
    },[name])
    const addUser = (e) =>{
        e.preventDefault();
        let user = {
            name,
            password
        };
        console.log(user);
        props.addUser(user)
    }
    return(
        <>
            <form onSubmit={addUser}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"
                           value={name}
                           onChange={(e)=>setName(e.target.value)}
                           aria-describedby="namelHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password"
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}
                           aria-describedby="passwordHelp"/>
                </div>
                <button type="submit" className="btn btn-primary btn-sm float-end">Submit</button>
            </form>
        </>
    )
}