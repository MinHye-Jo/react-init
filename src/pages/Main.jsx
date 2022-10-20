import React from "react";

import { Link } from "react-router-dom";

export const Main = (props) => {
  return (
    <>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <Link to="/sub">
        <h1>서브 페이지 이동</h1>
      </Link>
    </>
  );
};
