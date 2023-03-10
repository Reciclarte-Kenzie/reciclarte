import styled from "styled-components";

export const SliderStyled = styled.fieldset`
  border: none;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  label {
    color: var(--color-green-100);
  }

  span {
    color: var(--color-grey-100);
  }

  label,
  span {
    font-size: var(--font-size-18);
  }
`;
