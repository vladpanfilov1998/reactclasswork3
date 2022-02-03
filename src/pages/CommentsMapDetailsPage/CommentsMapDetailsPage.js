const CommentsMapDetailsPage = ({ comment: { id, postId, name, email, body } }) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>PostID: {postId}</div>
            <div>Name: {name}</div>
            <div>email: {email}</div>
            <div>Body: {body}</div>
            <br />
        </div>
    );
};

export default CommentsMapDetailsPage