import styled from "styled-components";

export const Button = styled.a`
    .navbar-nav & {
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        
        @media (min-width: 768px) {
            padding-top: 5px;
            padding-bottom: 5px;
        }

        .fa {
            cursor: pointer;
        }

    }
`

export const NavMenu = styled.li`
    > a > div {
        max-width: 0;
        overflow: hidden;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
        -ms-transition: all 0.2s ease;
        transition: all 0.2s ease;

        span {
            min-width: 190px;
            display: block;
            text-align: center;
        }
    }

    &:hover {
        > a > div {
            max-width: 300px;
            width: auto
        }
    }
`

export const DropDownNav = styled.ul`
    display: ${props => props.active ? "block" : "none"};

`