import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Logo } from "../Logo/Logo";
import slotImg from "../../assets/images/slots.png";
import backgroundImg from "../../assets/images/background.png";
import { ButtonText } from "../Typography/Typography";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { EXTERNAL_URLS } from "../../config/urls";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 944px;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`;

const SlotImage = styled.img`
  width: 326px;
  height: 200px;
  max-width: 90%;
  margin-bottom: 32px;
  margin-top: 48px;
`;

const OpenGameButton = styled(Button)`
  && {
    width: 22rem;
    height: 56px;
    background: ${(props) => props.theme.colors.primary};
    color: white;
    font-weight: bold;
    padding: 20px 24px;
    border-radius: 12px;
  }
`;

const GameOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const GameContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  max-width: 1200px;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
`;

const GameIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
`;

const HeroComponent = () => {
  const { t } = useTranslation();
  const [isGameOpen, setIsGameOpen] = useState(false);

  const handleOpenGame = () => {
    setIsGameOpen(true);
  };

  const handleCloseGame = () => {
    toast(t("toast.closedGame"));
    setIsGameOpen(false);
  };

  return (
    <>
      <HeroSection>
        <Logo width={265} />
        <SlotImage src={slotImg} alt="Slot" />

        <OpenGameButton variant="contained" onClick={handleOpenGame}>
          <ButtonText>{t("hero.title")}</ButtonText>
        </OpenGameButton>
      </HeroSection>

      {isGameOpen && (
        <GameOverlay>
          <GameContainer>
            <CloseButton onClick={handleCloseGame}>✕</CloseButton>
            <GameIframe src={EXTERNAL_URLS.GAME_LAUNCH} allowFullScreen />
          </GameContainer>
        </GameOverlay>
      )}
    </>
  );
};
export const Hero = HeroComponent;
