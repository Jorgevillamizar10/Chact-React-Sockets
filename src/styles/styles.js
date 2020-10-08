import styled from 'styled-components';

export const Section = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(0,0,0,0.15);
    width:100%;
    height:500px;
`;

export const Container = styled.div`
    width:300px;
    height:380px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    border-radius:20px;
    border:none;
    background:white;
`;

export const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    background:#3ffbe0;
    width:100%;
    height:70px;
    border-radius: 20px 20px 0 0;
    position:relative;
    top:0;
`;

export const Title = styled.h1`
    color:white;
    font-size:35px;
    font-family: 'Montserrat', sans-serif;
    margin:0;
`;

export const InputContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    background:#3ffbe0;
    width:100%;
    height:60px;
    border-radius: 0 0 20px 20px;
    position:relative;
    bottom:0;
`;

export const Input = styled.input`
    font-family: 'Montserrat', sans-serif;
    border:none;
    border-radius:10px;
    height:35px;
    width:190px;
    background:white;
    color:black;
    padding:0 10px;
    font-size:16px;
    margin:0;
    outline:none;
    &::placeholder{
        color:black;
    }
`;

export const ListaContainer = styled.div`
    display:flex;
    align-items: flex-start;
    justify-content:left;
    flex-direction:column;
    width:97%;
    margin:5px;
    /* background:red; */
    height:230px;
    /* overflow-y: ${ props => props.fullheight ? 'scroll' : 'none'} */
    overflow-y:scroll;
    & > ul{
        margin:5px 0;
        font-size:16px;
        font-family: 'Montserrat', sans-serif;
    }
`;

