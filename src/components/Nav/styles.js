import styled from '@emotion/styled';

export const Container = styled.nav`
  ul {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-left: 15px;
  }
  ul li{
    cursor: pointer;
    margin: 8px;
    padding: 3px 8px;
    list-style: none;
    transition: all ease 0.3s;
    border-radius: 8px;
  }
  ul li:hover{
    background-color: #888;
  }
  
  .active{
    font-weight: bold;
  }
`;
