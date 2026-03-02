import styled, { css } from "styled-components";

const textBase = css`
  font-family: "SF Pro", sans-serif;
  margin: 0;
  letter-spacing: 0;
`;

const textInline = css`
  vertical-align: middle;
`;

export const Title = styled.h1`
  ${textBase}
  font-weight: 860;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
`;

export const Subtitle = styled.h2`
  ${textBase}
  ${textInline}
  font-weight: 590;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #bababa;
`;

export const OrdinariText = styled.p`
  ${textBase}
  ${textInline}
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  color: #fbfbfbb2;
  opacity: 0.7;
`;

export const ButtonText = styled(Subtitle)`
  line-height: 1;
  color: #ffffff;
`;
