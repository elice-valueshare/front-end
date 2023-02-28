import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "slice/UserSlice";

import color from "styles/color";

const Slayout = styled.div`
  width: 150px;
  height: 100px;
  background-color: ${color.white};
  position: absolute;
  top: 120px;
  right: 0;
  z-index: 2;
  border-radius: 10px;
  box-shadow: 6px 8px 10px 0 rgba(0, 0, 0, 0.1);

  ul {
    margin: auto;
    list-style: none;
    padding-top: 20px;
    line-height: 2;

    a {
      color: ${color.gray1};
    }
  }
`;

const Sbtn = styled.button`
  color: ${color.gray1};
  background-color: ${color.white};
  border: none;
`;
function Dropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutUser = useSelector((state) => {
    return state.UserInfoReducer.userInfo;
  });
  console.log(logoutUser);
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    dispatch(setUserInfo(""));
    navigate("/login");
  };
  return (
    <Slayout>
      <ul>
        <Link to="/membermypage">Mypage</Link>
        <li>
          <Sbtn
            type="button"
            onClick={() => {
              handleLogout();
            }}
          >
            logout{" "}
          </Sbtn>
        </li>
      </ul>
    </Slayout>
  );
}

export default Dropdown;
