import React from "react";

function MainNav(props) {
  return (
    <nav className="navigationMain">
      <div className="navBox">
        <div className="instagramIcon">
          <i className="fab fa-instagram"></i>
          <h1 className="instagramFont">Westagram</h1>
        </div>
        <div id="search-box">
          <input type="text" name="seach" id="search" />
          <span className="search-placeholder">
            <i className="fas fa-search"></i> 검색
          </span>
        </div>
        <div className="nav-icons">
          <a href="#">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="compass"
              className="nav-imgs"
            />
          </a>
          <a href="#">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
              className="nav-imgs"
            />
          </a>
          <a href="#">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="my-page"
              className="nav-imgs"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
