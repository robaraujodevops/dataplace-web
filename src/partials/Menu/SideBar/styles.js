import styled from "styled-components";

export const LabelMenu = styled.a``

export const PageMenu = styled.li`
    &.pg-menu{
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: baseline;

        > a {
            width: 40px;
        }
    }

    /* &.active{
        > a {
            border-right: 5px solid #1ABB9C;
        }
    } */

    /* .nav.child_menu {
        overflow: hidden;
        transition: all .7s ease-out;
        //max-height: 0;
    }
    .nav.child_menu.active-enter-active {
        max-height: 100px;
        transition: all .7s ease-in;
    }

    .nav.child_menu.active-enter-done {
        max-height: 200px;
        display: block;
    } */

    .nav.child_menu {
        //left: 100%;
        //position: absolute;
        top: 0;
        width: 210px;
        z-index: 4000;
        //background: #3E5367;
        //display: none;
        display: block;

        > li > a {
            color: #73879C;
            font-size: 14px;
        }
    }

    .nav & {
        a {
            text-align: center !important;
            font-weight: 400;
            font-size: 10px;
            padding: 10px 5px
        }

        div > a {
            padding: 0 6px;
        }
    }

`

export const TitleMenu = styled.div`
    display: flex;
    width: 210px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;

    h5 {
        font-weight: ${props => props.active ? "bold" : "normal"};
    }

    .nav & {
        > a {
            display: flex;
            padding: 0;
            width: 100%;
            justify-content: space-between;
            padding: 0;
            align-items: center;
        }
    }

    svg.fa{
        width: 10px;
        float: right;
    }
`

export const MenuSection = styled.div`
    height: 100%;
    position: absolute;
    width: ${props => props.activeMenu ? "250px" : "40px"};
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease;
    overflow: hidden;

    ul{
        width: 250px;
    }

    ul > li > .child_menu {
        position: relative;
    }

    .pg-menu div {
        opacity: ${props => props.activeMenu ? 1 : 1};
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;        
    }
`

export const MenuItens = styled.div`
    .nav & {
        > div {
            > a {
                padding: 0;
            }
        }
    }

`

export const SubItemMenuGrid = styled.ul`
    max-height: ${props => props.active && props.activeMenu ? 500 : 0}px;
    opacity: ${props => props.active && props.activeMenu ? 1 : 0};
    position: relative;
    overflow: hidden;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out; 
`

export const ItemSub = styled.li`
    a{
        font-weight: ${props => props.active ? "bold" : "normal"} !important;
    }
`