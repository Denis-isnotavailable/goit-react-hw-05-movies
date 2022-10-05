import { Link } from "react-router-dom";
import styled from "styled-components";


export const MovieDetailsStyled = styled.div`
    padding: 40px;

    h1, h2, h3 {
        margin: 0;        
    }
`;

export const BackLinkStyled = styled(Link)`
    display: inline-block;
    padding: 3px 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc8c8;
    border-radius: 10px;
    color: #000000;
    text-decoration: none;

    :hover, :focus {
        color: #ffffff;
        background-color: #a8a8ee;
    }
`;

export const AdditionalInfo = styled.ul`   
    padding-bottom: 12px;
    border-bottom: 2px solid #ccc8c8;
    
    a {
        display: block;
        margin-bottom: 10px;
    }
`;