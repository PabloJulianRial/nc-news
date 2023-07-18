import { useEffect, useState } from "react";
import { getArticle } from "../utils";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "./ArticleDetails";

function FullArticle() {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState("");

  useEffect(() => {
    getArticle(article_id).then((res) => {
      setCurrentArticle(res);
    });
  }, []);

  return (
    <div>
      <ArticleDetails article={currentArticle} />
    </div>
  );
}

export default FullArticle;
