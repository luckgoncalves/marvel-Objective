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
    .name {
      font-weight: bold;
      color: #555555;
      font-size: 14px;
    }

    .description {
      font-size: 14px;
      font-weight: 400;
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
