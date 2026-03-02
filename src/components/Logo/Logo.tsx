import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/images/logo.png";

interface LogoProps {
  alt?: string;
  className?: string;
  width?: string | number;
}

const LogoWrapper = styled.div<{ width: string | number; src: string }>`
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  aspect-ratio: 2;
  background: linear-gradient(45deg, #ff7700, #ffd736);
  -webkit-mask: url(${(props) => props.src}) no-repeat center / contain;
  mask: url(${(props) => props.src}) no-repeat center / contain;
  display: inline-block;
`;

export const Logo: React.FC<LogoProps> = ({
  alt = "Logo",
  className,
  width = 120,
}) => {
  return (
    <LogoWrapper
      src={logoImg}
      width={width}
      className={className}
      title={alt}
    />
  );
};
