import { useEffect, useState } from "react";
import { getArticle } from "../utils";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "./ArticleDetails";

function FullArticle() {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id).then((res) => {
      setCurrentArticle(res);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p className="loading">Loading...</p>;
  } else
    return (
      <div>
        <ArticleDetails article={currentArticle} />
      </div>
    );
}

export default FullArticle;
