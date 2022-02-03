import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import CommentsMapDetailsPage from "../CommentsMapDetailsPage/CommentsMapDetailsPage";

const CommentsMapPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        commentsService.getByPostId(id).then(value => setComments([...value]));
    }, [id])

    return (
        <div>
            {comments.map(comment => <CommentsMapDetailsPage key={comment.id} comment={comment}/>)}
        </div>

    );
};

export default CommentsMapPage;