import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";
function App() {

    const END_POINT = "http://localhost:3001/posts";
    // const DB_NAME = "PostDB";
    let [posts, setPosts] = useState([]);

    const addNewPost =async (post)=>{
        console.log(post)
        await fetch(END_POINT, {
            method:"POST",
            body:JSON.stringify({
                id:post.id,
                title:post.title,
                desc:post.desc
            }),
            headers:{
                "content-type":"application/json"
            }
        });
        setPosts([post, ...posts]);
    }
    useEffect(async ()=>{
        /*let data = localStorage.getItem(DB_NAME);
        console.log("Data is", data);
        if(data) setPosts((JSON.parse(data)));*/

        //get posts from server
        let posts =await(await fetch(END_POINT)).json();
        setPosts(posts);
        //console.log(data)
    },[]);

    /*useEffect(()=>{
        localStorage.setItem(DB_NAME, JSON.stringify(posts));
    },[posts]);*/
    const postDeleteHandler = async (id)=>{
        await fetch(END_POINT+"/"+id,{
            method:"DELETE"
        })
        console.log("User id is", id);
        setPosts(posts.filter(post=>post.id!= id));
    }

    const updatePostHandler = async (updatePost) =>{
        console.log("update post is",updatePost);
        await fetch(END_POINT+"/"+updatePost.id,{
            method:"PATCH",
            body:JSON.stringify(updatePost),
            headers:{
                "content-type":"application/json"
            }
        });
        setPosts(posts.map(po =>po.id === updatePost.id ? updatePost : po));
    }

    return (
        <div className="container mb-5">
            <div>
                <h1 className="text-primary my-3">Posts</h1>

            </div>
            <Router>
                <Routes>
                    <Route path="/" element={<Post posts={posts} removePost={postDeleteHandler} />}/>
                    <Route path="/add" element={<AddPost addPost={addNewPost}/>}/>
                    <Route path="/post/:id" element={<PostDetail/>}/>
                    <Route path="/post/edit/:id" element={<EditPost updatePost={updatePostHandler}/>}/>
                </Routes>
            </Router>

        </div>
    );
}


export default App;