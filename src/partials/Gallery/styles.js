import styled from "styled-components";

export const Holder   = styled.div`
    position: relative;
`;

export const Controls = styled.div`
    position: absolute;    
    top: calc(50% - 1em);
    display: flex;
    width: 100%;
    justify-content: space-between;
    top: 0;
    left: 0;
    bottom: 0;
`;

export const Slider = styled.section`
    overflow: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
        display:none
    }

    div{
        min-width: calc(6 * 1009px);
        right: ${props => props.deslc}px;
        position: relative;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;

        img{
            width: 1009px
        }
    }
`;

export const ArrowField = styled.div`
    width: 5%;
    {/*background-color: rgba(42, 63, 84, 0.6);*/}
    display: flex;
    align-items: center;

    .list-controller & {
        width: 20px;
        margin: 0 8px;
        background: none
    }
`;

export const Arrow = styled.span`
    .slideshow-controller & {
        width: 50px;
        height: 40px;
        position: relative;
        cursor: pointer;
        &:before, &:after{
            content: "";
            border: 4px solid #b7b7b7;
            display: block;
            border-radius: 4px;
            position: absolute;
            width: 100%;
            transition: 0.3s;
        }

        &:hover:before, &:hover:after{
            border: 4px solid #d9d9d9;
        }
    }

    .list-controller & {
        width: 110px;
        height: 0px;
        position: relative;
        cursor: pointer;
        border: 15px solid #fff;
        border-right-color: red;
        border-left: 0px;
    }
`;

export const ArrowPrev = styled(Arrow)`
    .slideshow-controller & {
        &:before {
            -webkit-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }

        &:after {
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            bottom: 0;
        }
    }
`;

export const ArrowNext = styled(Arrow)`
    .slideshow-controller & {
        &:before {
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        &:after {
            -webkit-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
            bottom: 0;
        }
    }
`;

export const MenuGallery = styled.section`
    position: relative;

    &.menu-gallery > div:first-child {
        overflow: scroll;
        scroll-behavior: smooth;
        position: relative;
        margin: 0 35px;

        &::-webkit-scrollbar{
            display:none
        }
    }
`;

export const PhotoList = styled.ul`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    padding: 0;
    min-width: calc(${props => props.length} * 180px);
    display: relative;
`;

export const PhotoGallery = styled.li`
    width: 300px;
    display: inline-block;
    float: left;
    padding: 5px;
    cursor: pointer;
    background-color: ${props => props.active ? "rgba(42,63,84,0.6)" : "none"};
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    z-index: 1;
    
    img{
        max-width: 100%;
    }
`;