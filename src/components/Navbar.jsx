import { Link } from "react-router-dom";

export function Navbar({ allTopics }) {
  {
    return allTopics.map((topic) => {
      return (
        <Link
          className="topic-link"
          key={topic}
          to={`/articles/topics/${topic}`}
        >
          {topic}
        </Link>
      );
    });
  }
}
