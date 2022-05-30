import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const auth = useSelector((state) => state.token);
  return (
    <div className="authlinkcomplete">
      <div className="linkleft">
        <h3
          style={{
            padding: 0,
            margin: 0,
            color: "#ccd98f",
            fontFamily: "Nunito",
            fontFamily: "sans-serif",
          }}
        >
          F2F JOURNEY
        </h3>
      </div>

      <div className="linkright">
        {auth ? (
          <>
            <Link to="/" className="linkstyle">
              Home
            </Link>
            <Link to="/bookmarks" className="linkstyle">
              Bookmark
            </Link>

            {/* <Link to="/score" className="linkstyle">
              Score
            </Link> */}

            <Link to="/feedback" className="linkstyle">
              Feedback
            </Link>
            <Link to="/logout" className="linkstyle">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="linkstyle">
              Home
            </Link>
            <Link to="/signup" className="linkstyle">
              Signup
            </Link>
            <Link to="/login" className="linkstyle">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
