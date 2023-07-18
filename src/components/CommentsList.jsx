import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils";
import { Comments } from "./Comments";

const CommentsList = () =>{
    const { article_id } = useParams();
    const [currentComments, setCurrentComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getComments(article_id).then((res) => {
          setCurrentComments(res);
          setIsLoading(false);
        });
      }, []);
      if (isLoading) {
        return <p className="loading">Loading...</p>;
      } else
    return (
        <div>
            <Comments comments={currentComments}/>
        </div>
    )
}

export default CommentsList