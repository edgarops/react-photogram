import styled from 'styled-components';

export const Nav = styled.header`
    background-color: #fff;
    height: 52px;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid #e6e6e6;
    transition: all 300ms ease-in-out;

    display: flex;
    align-items: center;
`

export const Container = styled.div`
    max-width: 950px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

export const Img = styled.img`
    height: 56px;
    
`

export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    //margin: 20px;

    padding: 8px 4px 8px 2px;
    font: 400 13.333px Arial;
    background-color: #fafafa;
    border: 1px solid #e6e6e6;
    border-radius: 100px;
    outline: 0px;

    padding-left: 5px;

    @media (max-width: 500px) {
        display: flex;
        align-items: center;
        position: relative;
        margin: 20px;
        padding: 8px 4px 8px 2px;
        font: 400 13.333px Arial;
        background-color: #fafafa;
        border: 1px solid #e6e6e6;
        border-radius: 100px;
        outline: 0px;

        padding-left: 5px;
        
    }
`

export const Input = styled.input`
    outline: 0px;
    border: none;
    margin-left: 5px;
    @media (max-width: 500px) {
        height: 10px;
        width: 100px;
        margin: 0px;
    }
`

export const ContainerOptions = styled.div`
    color: rgba(0,0,0,0.7);
    text-decoration: none;
    font: 400 24px Arial;
    margin-left: 20px;

    @media (max-width: 500px) {
        margin: 1px;
    }

    >svg{
        cursor: pointer;
    }

    a{
        margin-right: 14px;
        @media (max-width: 500px) {
            margin: 11px;
        }
    }
`
