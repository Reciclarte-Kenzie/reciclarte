import styled from "styled-components";

export const DevCardStyled = styled.li`
  gap: 1.25rem;
  
  &, section {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  h3 {
    color: var(--color-green-100);
  }

  img {
    max-width: 150px;
    border-radius: 100%;
    width: 100%;
  }

  .info {
    gap: 0.2rem;
  }

  .links {
    gap: 0.625rem;
  }

  a {
    color: inherit;
  }

  button, a {
    font-weight: 600;
    width: 100%;
  }
`