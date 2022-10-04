
import { Outlet } from "react-router-dom"
import { Container, HeaderStyled, LinkStyled } from "./Header.styled"


export const Header = () => {
    return (
        <Container>
            <HeaderStyled>
                <nav>
                    <LinkStyled to="/">Home</LinkStyled>
                    <LinkStyled to="/movies">Movies</LinkStyled>
                </nav>                
            </HeaderStyled>
            <Outlet />
        </Container>
        
    )
}