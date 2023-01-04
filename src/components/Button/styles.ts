import styled, { css } from "styled-components";

interface iStyledButton {
  buttonType?: string;
  width?: string;
  padding?: string;
}

export const StyledButton = styled.button<iStyledButton>`
  border-radius: var(--radius-1);
  font-weight: 400;
  font-size: var(--font-size-18);
  padding: ${(props) => (props.padding ? props.padding : "1vh 0")};
  width: ${(props) =>
    props.width ? props.width : "clamp(250px, 100%, 300px)"};
  transition: 300ms;

  :hover,
  :focus {
    border: 2px solid var(--color-orange-70);
    background-color: var(--color-orange-70);
  }

  :disabled {
    background-color: var(--color-grey-40);
    border: 2px solid var(--color-grey-100);
    color: var(--color-grey-100);
  }

  ${({ buttonType }) => {
    switch (buttonType) {
      case "invert":
        return css`
          background-color: var(--color-white);
          border: 2px solid var(--color-white);
          color: var(--color-orange-80);
        `;
      case "whiteBorder":
        return css`
          background-color: var(--color-orange-80);
          border: 2px solid var(--color-white);
          color: var(--color-white);
        `;
      default:
        return css`
          background-color: var(--color-orange-80);
          border: 2px solid var(--color-orange-80);
          color: var(--color-white);
        `;
    }
  }}
`;
