import { ModalBaseStyled } from "./styles";
import closeIcon from "../../../assets/imgs/close-icon.svg";

interface iModalBaseProps {
  modalTitle: string;
  hideModal: () => void;
  ModalBody: () => JSX.Element;
}

export const ModalBase = ({
  modalTitle,
  hideModal,
  ModalBody,
}: iModalBaseProps) => {
  return (
    <ModalBaseStyled>
      <article>
        <header>
          <h2>{modalTitle}</h2>
          <button aria-label="fechar modal" onClick={() => hideModal()}>
            <img src={closeIcon} alt="ícone branco com um 'x' no meio" />
          </button>
        </header>
        <main>
          <ModalBody />
        </main>
      </article>
    </ModalBaseStyled>
  );
};
