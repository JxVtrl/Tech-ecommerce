import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #CCC;
  padding: 0 20px;

  > div:first-child {
    display: flex;
    align-items: center;


  }

  > div:last-child {
    display: flex;
    gap: 25px;

    i {
      font-size: 25px;
    }
  }
`;
