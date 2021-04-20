import React from 'react'
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap'

export default function CustomNavbar() {
    return (
        <div className="custom_navbar">
            <Navbar>
                <NavbarBrand href="/" className="custom_navbar_logo">LOGO</NavbarBrand>
                <NavbarText className="custom_navbar_text">Calculadora de Horas</NavbarText>
            </Navbar>
        </div>
    )
}
