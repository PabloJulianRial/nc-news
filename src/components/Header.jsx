import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>NC News</h1>
      <Link className="all-articles" to="/">
        All articles
      </Link>
    </div>
  );
};

export default Header;
