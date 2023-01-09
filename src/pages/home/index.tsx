import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { IdeasList } from "../../components/IdeasList";
import { StyledContainer } from "./styles";
import { IdeasContext } from "../../providers/IdeasProvider";
import { FilterBox } from "../../components/FIlter";

export const Home = () => {
  const { foundIdeas, searchIdeas } = useContext(IdeasContext);

  useEffect(() => {
    searchIdeas([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <StyledContainer>
        <section>
          {foundIdeas.length > 0 ? (
            <IdeasList ideasList={foundIdeas} />
          ) : (
            <p>Nenhuma ideia encontrada</p>
          )}
        </section>
        <FilterBox />
      </StyledContainer>
    </div>
  );
};
