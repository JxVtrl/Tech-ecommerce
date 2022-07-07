import React from "react";
import { Logo, Nav } from '../../components'
import { Container } from './styles'

export const Header = () => {
    return (
        <Container>
            <Logo />
            <Nav />
        </Container>
    );
}