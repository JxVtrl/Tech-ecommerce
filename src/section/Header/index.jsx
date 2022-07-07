import React from "react";
import { Logo, Nav, Search, Profile, Cart as Kart } from '../../components'
import { Container } from './styles'

export const Header = () => {
    return (
        <Container>
            <div>
                <Logo />
                <Nav />
            </div>
            <div>
                <Search />
                <Profile />
                <Kart />
            </div>
        </Container>
    );
}