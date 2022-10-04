import styled from "styled-components";
import { NavLink } from "react-router-dom"


export const Container = styled.div`
    margin: 0;
`;

export const HeaderStyled = styled.header`
    padding: 20px 60px;
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.5);

    font-size: 24px;
`;

export const LinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;

  :first-child {
    margin-right: 20px;
  }

  &.active {
    color: #ff0000;
  }
`;