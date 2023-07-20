import { useState } from "react";
import { postComment } from "../utils";

export function CommentForm({
  newComment,
  currentAuthor,
  article_id,
  setNewComment,
  setCurrentAuthor,
  setCurrentComments,
}) {
  const [isPosted, setIsPosted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(newComment, currentAuthor, article_id).then((addedComment) => {
      console.log(addedComment);
      setCurrentComments((currentComments) => {
        return [addedComment, ...currentComments];
      });
      setIsPosted(true);
    });
  };

  return (
    <div>
      <form className="comments-form" onSubmit={handleSubmit}>
        <br />
        <label htmlFor="new-comment">Share a comment: </label>
        <br />
        <textarea
          name="new-comment"
          id="new-comment"
          cols="70"
          rows="7"
          value={newComment}
          onChange={(e) => {
            console.log(setNewComment);
            setNewComment(e.target.value);
          }}
        ></textarea>
        <br />
        <label htmlFor="current-author">Enter your username</label>
        <input
          type="text"
          className="current-author"
          id="current-author"
          cols="40"
          value={currentAuthor}
          onChange={(e) => {
            setCurrentAuthor(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button className="new-comment-btn btn">Post comment</button>
      </form>
      {isPosted ? <div className="success">You posted a comment</div> : null}
    </div>
  );
}
