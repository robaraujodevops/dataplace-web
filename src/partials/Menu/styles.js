import styled from "styled-components";

export const Navbar = styled.div`
    border: 0
`

export const Button = styled.a`
`

export const HomeGrid = styled.div`
    height: 35px;
    display: block;
`

export const BackGroundOpenMenu = styled.div`
    height: 100%;
    width: ${props => props.activeMenu ? "250px" : "40px"};
    background-color: #EDEDED;
    position: relative;
    z-index: 1;
    border-right: 1px solid #D9DEE4;
    -webkit-transition: width 0.2s ease;
    -moz-transition: width 0.2s ease;
    -o-transition: width 0.2s ease;
    -ms-transition: width 0.2s ease;
    transition: width 0.2s ease;
`

export const MenuGrid = styled.div`
    width: 40px;
    z-index: 3;
    position: relative;
`