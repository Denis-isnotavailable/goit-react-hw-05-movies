import { Suspense } from "react";
import { Outlet } from "react-router-dom"
import { Container, HeaderStyled, LinkStyled } from "./Header.styled"


export const Header = () => {
    return (
        <Container>
            <HeaderStyled>
                <nav>
                    <LinkStyled to="/" end>Home</LinkStyled>
                    <LinkStyled to="movies">Movies</LinkStyled>
                </nav>                
            </HeaderStyled>
            <Suspense fallback={<div>Loading page...</div>} >
                <Outlet />
            </Suspense>
        </Container>
        
    )
}