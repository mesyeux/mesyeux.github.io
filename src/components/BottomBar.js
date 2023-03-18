import React from "react";
import { Link } from "react-router-dom";
import "./BottomBar.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function BottomBar() {
  return (
    <>
      <div className="bottom-bar">
        <div className="copyright">
          <div className="made-by">
            <AiOutlineCopyrightCircle />
            &nbsp;2023 by Chloe Lau
          </div>
        </div>
        {/* <div className="links">
          <Link to="/">Contact</Link>
        </div> */}
      </div>
    </>
  );
}

export default BottomBar;
