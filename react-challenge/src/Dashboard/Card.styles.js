import styled from 'styled-components';

export const CardStyles = styled.div`
    min-width: 300px;
`;

export const CardImage = styled.div`
display: flex;
align-items: flex-end;
border-radius: 20px !important;
background-image: url(${props => props.src});
background-size: cover;
margin: 0px;
width: 100%;
height:400px;

`;

export const TextImg =styled.div`
    color : #fbfbfb;
    display:block;
    margin:10px;
    p{
        margin:0px;
    }
`;