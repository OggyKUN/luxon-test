import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Logo } from "../Logo/Logo";
import { Title, Subtitle } from "../Typography/Typography";
import { ButtonText } from "../Typography/Typography";
import download from "../../assets/images/download.svg";
import { useTranslation } from "react-i18next";
import { media } from "../../styles/media";

const GradientBorderBox = styled.div`
  position: relative;
  width: 390px;
  height: 294px;
  display: inline-block;
  border-radius: 16px;
  padding: 2px;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    border: 2px dashed #ffba47;
    pointer-events: none;
  }
  @media ${media.mobileS} {
    width: 320px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  text-align: center;
`;

const InstallButton = styled(Button)`
  && {
    width: 250px;
    height: 56px;
    background: ${(props) => props.theme.colors.primary};
    color: white;
    font-weight: bold;
    padding: 8px 24px;
    border-radius: 8px;
    text-transform: none;
    margin-top: 18px;
  }
`;

const IconImage = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

const MarginTitle = styled(Title)`
  margin-top: 24px;
  margin-bottom: 6px;
  @media ${media.mobileS} {
    white-space: nowrap;
  }
`;

export const DownloadCasino: React.FC = () => {
  const { t } = useTranslation();
  const handleInstall = () => {
    alert("Installing app...");
  };

  return (
    <GradientBorderBox>
      <Container>
        <Logo width={175} />
        <MarginTitle>{t("downloadCasino.title")}</MarginTitle>
        <Subtitle>{t("downloadCasino.subtitle")}</Subtitle>
        <InstallButton variant="contained" onClick={handleInstall}>
          <IconImage src={download} alt="download" />
          <ButtonText>{t("downloadCasino.button")}</ButtonText>
        </InstallButton>
      </Container>
    </GradientBorderBox>
  );
};
