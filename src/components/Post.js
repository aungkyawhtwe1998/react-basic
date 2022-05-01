import React, {Component} from "react";
class Post extends Component{
    render() {
        return(
            <div className="card">
                <div className="row">
                    <div className="col-2">
                        <img src="" alt=""/>
                    </div>
                    <div className="col-5">
                        <h4>Pot Title</h4>
                        <p>Post Content</p>

                    </div>
                    <div className="col-5">
                        <button className="btn btn-sm btn-info">
                            <i className="fa fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post;