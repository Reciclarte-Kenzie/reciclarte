import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--color-orange-80);
  width: 100%;
  min-height: 67px;
  max-height: 140px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 13px 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: 968px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;

  & > img {
    height: 38px;
  }

  div {
    display: flex;
    gap: 25px;

    button {
      display: flex;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media screen and (min-width: 968px) {
    width: 100%;
    align-items: center;

    button:last-child {
      display: none;
    }
  }
`;

interface IActionsProps {
  toggle: boolean;
}

export const Actions = styled.div<IActionsProps>`
  display: ${(props) => (props.toggle ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  gap: 25px;

  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 6px;
    padding: 9px;
  }

  img {
    width: 30px;
  }

  @media screen and (min-width: 968px) {
    button {
      border: none;
    }
  }
`;

export const LoginButton = styled.button`
  border: 2px solid var(--color-white);
  background: var(--color-white);
  border-radius: var(--radius-1);
  padding: 9px 25px;
  /* text-2 */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--font-size-16);
  line-height: 20px;
  color: var(--color-orange-80);

  @media screen and (min-width: 968px) {
    border: none;
  }
`;

export const RegisterButton = styled.button`
  border: 2px solid var(--color-white);
  border-radius: var(--radius-1);
  padding: 9px 25px;
  /* text-2 */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--font-size-16);
  line-height: 20px;
  color: var(--color-white);
`;
