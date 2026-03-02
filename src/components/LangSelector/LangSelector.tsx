import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/images/chevron-down.svg";
import TurkishFlag from "../../assets/images/turkish_flag.svg";
import SpainFlag from "../../assets/images/spain_flag.png";
import EnglishFlag from "../../assets/images/united_kingdom_flag.png";
import { OrdinariText } from "../Typography/Typography";
import { media } from "../../styles/media";
import { Language } from "../../i18n";

type Props = {
  value: Language;
  options: Language[];
  onChange: (lang: Language) => void;
};

const flags: Record<Language, string> = {
  Turkish: TurkishFlag,
  English: EnglishFlag,
  Spanish: SpainFlag,
};

const Wrapper = styled.div`
  position: relative;
  width: 290px;
`;

const Selector = styled.div<{ isOpen: boolean }>`
  height: 56px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  border-radius: 8px;
  border: 1px solid
    ${({ isOpen }) =>
      isOpen ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"};

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  cursor: pointer;
  transition: all 0.2s ease;
  @media ${media.desktop} {
    margin-top: 0;
  }
`;

const Arrow = styled.img<{ isOpen: boolean }>`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 290px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  overflow: hidden;
  z-index: 20;
  @media ${media.desktop} {
    top: 60px;
  }
`;

const Option = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

const IconImage = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 4px;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LangSelector: React.FC<Props> = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (lang: Language) => {
    onChange(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Wrapper ref={ref}>
      <Selector isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <LeftSide>
          <IconImage src={flags[value]} alt={value} />
          <OrdinariText>{value}</OrdinariText>
        </LeftSide>

        <Arrow src={ArrowIcon} isOpen={isOpen} />
      </Selector>

      {isOpen && (
        <Dropdown>
          {options
            .filter((lang) => lang !== value)
            .map((lang) => (
              <Option key={lang} onClick={() => handleSelect(lang)}>
                <LeftSide>
                  <IconImage src={flags[lang]} alt={lang} />
                  <OrdinariText>{lang}</OrdinariText>
                </LeftSide>
              </Option>
            ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};
