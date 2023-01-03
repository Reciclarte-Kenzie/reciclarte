import styled from "styled-components";

export const StyledLoginPage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4vh;

  position: absolute;
  top: 60%;
  left: 53%;
  transform: translate(-50%, -50%);
  margin: -50px 0 0 -50px;
  padding-bottom: 2%;

  width: fit-content;

  @media (min-width: 700px) {
    left: 50%;
  }

  section:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-35%, 0%);
  }

  h2 {
    font-weight: 600;
    font-size: var(--font-size-40);
    color: var(--color-green-100);
  }

  .referRegister {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 50%;
    left: 56%;
    transform: translate(-35%, 0%);
  }

  a {
    font-weight: 400;
    font-size: var(--font-size-24);
    color: var(--color-white);
    text-align: center;
    background-color: var(--color-orange-80);
    border: 1px solid var(--color-orange-80);
    border-radius: calc(3 * var(--radius-1));
    padding: 0.5rem 1.5rem;
    width: clamp(281px, 100%, 300px);

    :hover {
      border: 1px solid var(--color-green-100);
      background-color: var(--color-green-100);
    }
  }
`;
