import React, {useRef} from "react"; // using useRef mean uncontrolled component
export default function UserAdd(props){
    const nameRef = useRef();
    const passwordRef = useRef()

    const addUser = (e) =>{

        e.preventDefault();
        console.log(nameRef)
        const user = {
            name:nameRef.current.value,
            password:passwordRef.current.value
        }
        props.addUser(user);
        //useRef should be used only to read data, don't use for data change
        //for write or change -> should use useState
        nameRef.current.value = "";
        passwordRef.current.value = "";
        console.log(user)
    }
    return(
        <>
            <form onSubmit={addUser}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"
                           ref={nameRef}
                           aria-describedby="nameHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password"
                           ref={passwordRef}
                           aria-describedby="passwordHelp"/>
                </div>
                <button type="submit" className="btn btn-primary btn-sm float-end">Submit</button>
            </form>
        </>
    )
}