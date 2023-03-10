import styled from "styled-components";

export const FieldsetStyled = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.625rem;

  p {
    font-weight: 400;
    font-size: var(--font-size-12);
    color: var(--color-orange-80);

    @media (min-width: 700px) {
      font-size: var(--font-size-14);
    }
  }
`;
