import React, { useState } from "react";
import styled from "styled-components";
import footerGuyImg from "../../assets/images/footer_guy.png";
import { DownloadCasino } from "../DownloadCasino/DownloadCasino";
import icon18 from "../../assets/images/icon18.svg";
import footer_logo from "../../assets/images/footer_logo.png";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { OrdinariText } from "../Typography/Typography";
import { LangSelector } from "../LangSelector/LangSelector";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { media } from "../../styles/media";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(to left, #06225d, #02011f 60%);
  color: white;
  flex-wrap: wrap;
  gap: 64px;
  @media ${media.desktopL} {
    gap: 40px;
  }
  @media ${media.desktop} {
    flex-direction: column;
    justify-content: center;
    gap: 52px;
  }
`;

const IconImage = styled.img`
  display: inline-block;
  width: 58px;
  height: 58px;
  margin-right: 12px;
  @media ${media.desktop} {
    margin-right: 0px;
  }
`;

const GuyImage = styled.img`
  width: 288px;
  height: auto;
  @media ${media.desktopL} {
    width: 240px;
  }
  @media ${media.desktop} {
    display: none;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media ${media.desktop} {
    flex-direction: row;
    order: 2;
    gap: 24px;
    width: 60%;
  }
  @media ${media.mobileL} {
    flex-direction: column;
  }
`;

const RightColumn = styled(Column)`
  margin-left: auto;
  justify-content: space-between;
  height: 352px;
  @media ${media.desktop} {
    order: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    height: auto;
    width: 280px
    gap: 60px;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  @media ${media.desktop} {
    flex-direction: column;
    flex: 1;
    gap: 12px;
  }
`;

const CertifiedText = styled(OrdinariText)`
  @media ${media.desktop} {
    text-align: center;
  }
`;
export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState("Turkish");
  const handleChange = (newLang: string) => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <FooterWrapper>
      <GuyImage src={footerGuyImg} alt="Footer Guy" />
      <DownloadCasino />
      <Column>
        <ListItem>
          <IconImage src={icon18} alt="18+" />
          <OrdinariText>{t("footer.only18")}</OrdinariText>
        </ListItem>
        <ListItem>
          <IconImage src={footer_logo} alt="Certified" />
          <CertifiedText
            dangerouslySetInnerHTML={{ __html: t("footer.certified") }}
          />
        </ListItem>
      </Column>
      <RightColumn>
        <LangSelector
          value={lang}
          options={["Turkish", "English", "Spain"]}
          onChange={handleChange}
        />
        <SocialLinks />
      </RightColumn>
    </FooterWrapper>
  );
};
