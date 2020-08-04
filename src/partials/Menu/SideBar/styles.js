import styled from "styled-components";

export const LabelMenu = styled.a``

export const PageMenu = styled.li`
    .nav.child_menu {
        overflow: hidden;
        transition: all .7s ease-out;
        max-height: 0;
    }
    .nav.child_menu.active-enter-active {
        max-height: 100px;
        transition: all .7s ease-in;
    }

    .nav.child_menu.active-enter-done {
        max-height: 200px;
        display: block;
    }
`