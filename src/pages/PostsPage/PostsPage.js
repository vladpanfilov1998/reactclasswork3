import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import {Outlet} from "react-router-dom";
import css from "../../App.module.css";
import {PostDetailsPage} from "../PostDetailsPage/PostDetailsPage";



const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(value => setPosts([...value]));
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            {posts.map(post => <PostDetailsPage key={post.id} post={post}/>)}
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

    );
};

export {PostsPage};