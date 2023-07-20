import { useEffect, useState } from "react";
import { postComment } from "../utils";
import { getUsers } from "../utils";

export function CommentForm({
  newComment,
  currentAuthor,
  article_id,
  setNewComment,
  setCurrentAuthor,
  setCurrentComments,
}) {
  const [isPosted, setIsPosted] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response);
      })
      .catch((err) => {
        setErrorState(true);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(newComment, currentAuthor, article_id)
      .then((addedComment) => {
        setCurrentComments((currentComments) => {
          return [addedComment, ...currentComments];
        });
        setIsPosted(true);
      })
      .catch((err) => {
        setErrorState(true);
      });
    setNewComment("");
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
            setNewComment(e.target.value);
          }}
        ></textarea>
        <br />
        <label htmlFor="current-author">Enter your username</label>
        <select
          onChange={(e) => {
            setSelectedUser(e.target.value);
          }}
          name="selected-user"
          id="selected-user"
        >
          <option value="none"></option>
          {users.map((user) => {
            return (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          className="current-author"
          id="current-author"
          cols="40"
          value={currentAuthor}
          onChange={(e) => {
            setCurrentAuthor(e.target.value);
          }}
        />
        <br />
        <br />
        <button className="new-comment-btn btn" disabled={!newComment.length}>
          Post comment
        </button>
      </form>
      {errorState ? (
        <div className="error">Your comment was not added</div>
      ) : null}
      {isPosted ? <div className="success">You posted a comment</div> : null}
    </div>
  );
}
