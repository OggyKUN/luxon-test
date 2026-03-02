import React from "react";
import styled from "styled-components";
import telegram from "../../assets/images/telegram.svg";
import inbox from "../../assets/images/inbox.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import { OrdinariText } from "../Typography/Typography";
import { useTranslation } from "react-i18next";
import { media } from "../../styles/media";
import { SOCIAL_URLS } from "../../config/urls";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  @media ${media.desktop} {
    align-items: center;
  }
`;

const SocialButton = styled.a<{
  variant: "instagram" | "telegram" | "twitter" | "mail";
}>`
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  /* рамка */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    pointer-events: none;
  }

  ${({ variant }) => {
    switch (variant) {
      case "instagram":
        return `
          background: radial-gradient(
            circle at bottom left,
            #FFDD55 0%,
            #FFDD55 25%,
            #FF543E 50%,
            #C837AB 100%
          );
        `;
      case "telegram":
        return `background: #398FFF;`;
      case "twitter":
        return `background: #000000;`;
      case "mail":
        return `background: #000000;`;
      default:
        return "";
    }
  }}
  img {
    width: 30px;
    height: 30px;
    z-index: 1;
    filter: brightness(0) invert(1);
  }
`;

const SocialMargin = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 12px;
  margin-bottom: 32px;

  @media ${media.desktop} {
    margin-bottom: 0;
  }
`;
interface SocialLinksProps {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Wrapper className={className}>
      <OrdinariText>{t("social.usOnSocialMedia")}</OrdinariText>
      <SocialMargin>
        <SocialButton href={SOCIAL_URLS.instagram} variant="instagram" aria-label="Instagram">
          <img src={instagram} alt="Instagram" />
        </SocialButton>
        <SocialButton href={SOCIAL_URLS.telegram} variant="telegram" aria-label="Telegram">
          <img src={telegram} alt="Telegram" />
        </SocialButton>
        <SocialButton href={SOCIAL_URLS.twitter} variant="twitter" aria-label="Twitter">
          <img src={twitter} alt="Twitter" />
        </SocialButton>
        <SocialButton href={SOCIAL_URLS.mail} variant="mail" aria-label="Inbox">
          <img src={inbox} alt="Inbox" />
        </SocialButton>
      </SocialMargin>
    </Wrapper>
  );
};
