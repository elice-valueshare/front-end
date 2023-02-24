import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  padding: 0 1%;
  h3 {
    text-align: center;
    margin-top: 16px;
    font-weight: 600;
    font-size: 20px;
    color: ${color.gray1};
  }
  p {
    font-size: 16px;
    color: ${color.gray3};
    text-align: center;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 30px;
  object-fit: cover;
`;

function Card2() {
  return (
    <SlayOut>
      <CardImg src="/asset/img-lookbook2.png" />
      <h3>Louis Vuitton</h3>
      <p>Coussin MM</p>
    </SlayOut>
  );
}

export default Card2;
