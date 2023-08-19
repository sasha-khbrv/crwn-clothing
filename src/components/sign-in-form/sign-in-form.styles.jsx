import { styled } from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const SignInButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & *:first-child {
    margin-right: 12px;
  }
`;
