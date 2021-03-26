import styled from "styled-components";

export const GalleryMain = styled.section`
    border: 1px solid #cecece;
`;

export const Holder   = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
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
    border-bottom: 1px solid #cecece;
    
    &::-webkit-scrollbar{
        display:none
    }

    div{
        min-width: calc(${props => props.length} * ${props => props.width}px);
        right: ${props => props.flow}px;
        position: relative;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;

        img{
            width: ${props => props.width}px
        }
    }
`;

export const GridPos = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
    position: absolute;
    bottom: 10px;
    padding: 0;
    align-self: center;
`;

export const GridPosItem = styled.li `
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${props => props.active ? "#FFF" : "#2A3F54"};
    border: 1px solid #2A3F54;
    margin: 0 5px;
    -webkit-transition: background 0.5s ease;
    -moz-transition: background 0.5s ease;
    -o-transition: background 0.5s ease;
    -ms-transition: background 0.5s ease;
    transition: background 0.5s ease;
`;

export const ArrowField = styled.div`
    width: 5%;
    /*background-color: rgba(42, 63, 84, 0.6);*/
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
        border: 15px solid #eaeaea;
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

    .list-controller & {
        border-right-color: #2A3F54;
        border-left: 0px;
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

    .list-controller & {
        border-left-color: #2A3F54;
        border-right: 0px;
    }
`;

export const MenuGallery = styled.section`
    position: relative;
    background-color: #eaeaea;
`;

export const MenuLIstGallery = styled.div`
    overflow: scroll;
    scroll-behavior: smooth;
    position: relative;
    margin: 0 35px;

    &::-webkit-scrollbar{
        display:none
    }
`;

export const PhotoList = styled.ul`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    padding: 0;
    min-width: calc(${props => props.length} * 187px);
    position: relative;
    right: ${props => props.flow}px;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
`;

export const PhotoGallery = styled.li`
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