import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/imgs/logoHeader.png";
import {
  Header as Container,
  Content,
  MainContent,
  Actions,
  LoginButton,
  RegisterButton,
} from "./styles";

import plusIcon from "../../assets/imgs/plus-solid.svg";
import openMenuIcon from "../../assets/imgs/menu.svg";
import closeMenuIcon from "../../assets/imgs/xmark-solid.svg";
import homeIcon from "../../assets/imgs/home.svg";
import logoutIcon from "../../assets/imgs/logout.svg";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const [showActions, setShowActions] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const detectMobile = () => {
    setIsMobile(window.innerWidth < 968);
  };

  useEffect(() => {
    window.addEventListener("resize", detectMobile);

    return () => {
      window.removeEventListener("resize", detectMobile);
    };
  }, []);

  return (
    <Container>
      <Content>
        <MainContent>
          <img src={logo} alt="" />
          <div>
            {user ? (
              <button type="button" title="Adicionar Ideia">
                <img src={plusIcon} alt="" />
              </button>
            ) : (
              <></>
            )}
            <button
              type="button"
              title="Abrir Menu"
              onClick={() => setShowActions(!showActions)}
            >
              <img src={showActions ? closeMenuIcon : openMenuIcon} alt="" />
            </button>
          </div>
        </MainContent>
        <Actions toggle={isMobile ? showActions : true}>
          {user ? (
            <>
              <button
                type="button"
                title="Pagina inicial"
                onClick={() => navigate("/")}
              >
                <img src={homeIcon} alt="" />
              </button>
              <button type="button" title="Deslogar" onClick={logout}>
                <img src={logoutIcon} alt="" />
              </button>
            </>
          ) : (
            <>
              <LoginButton type="button" onClick={() => navigate("/login")}>
                Login
              </LoginButton>
              <RegisterButton
                type="button"
                onClick={() => navigate("/register")}
              >
                Register
              </RegisterButton>
            </>
          )}
        </Actions>
      </Content>
    </Container>
  );
};

export default Header;