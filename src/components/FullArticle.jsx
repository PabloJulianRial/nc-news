import { useEffect, useState } from "react";
import { getArticle } from "../utils";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "./ArticleDetails";

function FullArticle() {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentVotes, setCurrentVotes] = useState("");

  useEffect(() => {
    getArticle(article_id).then((res) => {
      setCurrentArticle(res);
      setCurrentVotes(res.votes);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p className="loading">Loading...</p>;
  } else
    return (
      <div>
        <ArticleDetails
          article={currentArticle}
          votes={currentVotes}
          article_id={article_id}
        />
      </div>
    );
}

export default FullArticle;
