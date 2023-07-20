import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, postComment } from "../utils";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";

const CommentsList = () => {
  let counter = 0;
  const { article_id } = useParams();
  const [currentComments, setCurrentComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");

  useEffect(() => {
    getComments(article_id).then((res) => {
      setCurrentComments(res);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p className="loading">Loading...</p>;
  } else if (currentComments.length === 0) {
    return (
      <div>
        <h2>No comments for this article yet Be the first one to comment!</h2>
        <div className="comments-container">
          <CommentForm
            article_id={article_id}
            newComment={newComment}
            currentAuthor={currentAuthor}
            setNewComment={setNewComment}
            setCurrentAuthor={setCurrentAuthor}
            setCurrentComments={setCurrentComments}
          />
          {currentComments.map((comment) => {
            return <Comment key={comment.comment_id} comment={comment} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="comments-container">
        <CommentForm
          article_id={article_id}
          newComment={newComment}
          currentAuthor={currentAuthor}
          setNewComment={setNewComment}
          setCurrentAuthor={setCurrentAuthor}
          setCurrentComments={setCurrentComments}
        />
        {currentComments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment} />;
        })}
      </div>
    );
  }
};

export default CommentsList;
