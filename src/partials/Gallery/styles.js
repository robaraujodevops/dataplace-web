import styled from "styled-components";

export const Holder   = styled.div`
    position: relative;
`;

export const Controls = styled.div`
    position: absolute;    
    top: calc(50% - 1em);
    display: flex;
    width: 100%;
    flex-flow: column-reverse;
`;

export const Current = styled.section`
    img{
        width: 100%
    }
`;

export const Arrow = styled.a`
    color: #333;
    font-family: Arial sans-serif;
    font-size: 2em;
    text-decoration: none;
    padding: 0.5em 1.5em;
    
    &.left:after, &.right:after {
        bottom: 0.66em;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    &.prev{
        color: #333;
        font-family: Arial sans-serif;
        font-size: 2em;
        text-decoration: none;
        padding: 0.5em 1.5em;

        &:before, &:after{
            content:"";
            background: #333;
            -webkit-border-radius: 0.2em;
            border-radius: 0.2em;
            display: block;
            height: 0.5em;
            position: absolute;
            right: 0;
            width: 1em;
        }

        &:before, &:after {
            left: 0;
        }
        
        &:before {
            top: 1em;
        }
        
        &:after, &:before {
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        &:before, &.left:after {
            top: 0.66em;
        }
    }

    &.next {
        color: #333;
        font-family: Arial sans-serif;
        font-size: 2em;
        text-decoration: none;
        padding: 0.5em 1.5em;

        &:before, &:after{
            content:"";
            background: #333;
            -webkit-border-radius: 0.2em;
            border-radius: 0.2em;
            display: block;
            height: 0.5em;
            position: absolute;
            right: 0;
            width: 1em;
        }

        &:before {
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        &:before {
            top: 0.66em;
        }
    }
`;

export const Next = styled.span`

`;