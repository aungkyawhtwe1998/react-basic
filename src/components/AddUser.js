import React from 'react';

function User({ user, remove }) { // props = {image:"asdfasdf",phone:"09600600600", cell:"09700700700"}
    const handleRemove = () => {
        remove(user.uuid);
    }
    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-2">
                    <img src={user.image} width="50px" height="50px" />
                </div>
                <div className="col-5">
                    <strong>Ph: {user.phone}</strong><br />
                    <strong>Cell : {user.cell}</strong>
                </div>
                <div className="col-3">
                    <h5 className="mt-2">{user.name}</h5>
                </div>
                <div className="col-1">
                    <button className="btn btn-danger btn-sm mt-2" onClick={handleRemove}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default User;