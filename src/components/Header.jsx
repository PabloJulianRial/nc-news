import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

const Header = ({ allTopics }) => {
  return (
    <div className="header">
      <h1>NC News</h1>
      <div>
        <Link className="comments-link" to="/">
          All articles
        </Link>
        <Navbar allTopics={allTopics} />
      </div>
    </div>
  );
};

export default Header;
