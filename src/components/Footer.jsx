import React, { useEffect } from "react";

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import colors from "../assets/constants/color";
import Hr from "./Hr";

export const Footer = (props) => {
  return (
    <>
      <Hr></Hr>
      <FooterDiv>
        <ContentDiv>
          <ContentTxtDiv>개인정보처리방침</ContentTxtDiv>
          <VerticalLine></VerticalLine>
          <ContentTxtDiv>서비스 이용 문의</ContentTxtDiv>
          <GreyTxtDiv ml="8px">help@email.com</GreyTxtDiv>
        </ContentDiv>
      </FooterDiv>
    </>
  );
};

const FooterDiv = styled.div`
  font-family: NotoSansCJKkr;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: 122px;
  height: 20px;
  margin-right: 8px;
`;

const ContentDiv = styled.div`
  display: flex;
  width: 1080px;
  height: 64px;
  align-items: center;
`;
const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const GreyTxtDiv = styled.div`
  margin-top: 5px;
  font-weight: 300;
  color: ${colors.grey500};
  ${(props) =>
    ` margin-right: ${props.mr || "0px"};
      margin-left: ${props.ml || "0px"};
    `};
`;

const ContentTxtDiv = styled.div`
  margin-top: 5px;
  font-weight: 500;
  color: ${colors.grey500};
`;

const VerticalLine = styled.div`
  margin-top: 5px;
  margin-left: 12px;
  margin-right: 12px;
  border-left: 1px solid #e1e1e1;
  height: 18px;
`;

const EmailDiv = styled.div`
  margin-top: 5px;
  font-weight: 300;
  color: ${colors.grey500};
  margin-left: 8px;
`;
