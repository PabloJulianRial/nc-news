import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils";
import { Comment } from "./Comment";

const CommentsList = () => {
  const { article_id } = useParams();
  const [currentComments, setCurrentComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      <h2>No comments for this article yet Be the first one to comment!</h2>
    );
  } else
    return (
      <div>
        {currentComments.map((comment) => {
          return <Comment comment={comment} />;
        })}
      </div>
    );
};

export default CommentsList;
