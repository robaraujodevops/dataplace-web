import styled from "styled-components";

export const SubMenuWrapper = styled.section`
    width: ${props => props.active ? 180 : 0}px;
    height: 100%;
    background-color: #EDEDED;
    z-index: 10;
    margin-top: 58px;
    border-right: 2px solid #D9DEE4;
    -webkit-transition: width 0.5s ease;
    -moz-transition: width 0.5s ease;
    -o-transition: width 0.5s ease;
    -ms-transition: width 0.5s ease;
    transition: width 0.5s ease;
`