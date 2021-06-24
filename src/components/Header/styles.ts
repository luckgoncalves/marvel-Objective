import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .user {
    color: #555555;
    text-align: right;
    display: flex;
    align-items: center;
    

    .name {
      font-weight: bold;
      font-size: 14px;
    }

    .description {
      font-size: 14px;
      font-weight: 400;
    }

    .sigla {
      cursor: default;

      width: 32px;
      height: 32px;
      
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 16px;
      background-color: #f5f5f5;
      border-radius: 4px;

      font-weight: bold;
      color: #555555;

      &:hover {
        background-color: #555555;
        color: #f5f5f5;
      }
    }

    @media(max-width: 500px) {
      span {
        display: block;
      }
    }

  }

  @media (max-width: 500px) {
    .logo {
      img {
        width: 80%;
      }
    }
  }
`;
