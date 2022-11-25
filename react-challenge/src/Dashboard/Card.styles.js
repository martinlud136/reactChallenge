import styled from "styled-components";

export const CardStyles = styled.div`
  width: 165px;
`;

export const CardImage = styled.div`
  display: flex;
  align-items: flex-end;
  border-radius: 10px !important;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 0px;
  width: 100%;
  height: 219px;
`;

export const TextImg = styled.div`
  color: #fbfbfb;
  display: block;
  margin: 10px;
 
  .card-title p {
    font-size: 20px;
    font-weight: 500;
  }

  p {
    margin: 0px;
    font-size: 14px;
  }
`;
