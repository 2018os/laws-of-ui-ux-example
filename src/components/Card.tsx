import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  description: string;
};

const CardWrapper = styled.div<{ description: string }>`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 12px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    opacity: 0.5;
    & > .hover-message {
      visibility: visible;
    }
  }
`;

const Message = styled.div.attrs({
  className: "hover-message",
})`
  word-break: keep-all;
  visibility: hidden;
`;

const Card: FC<Props> = ({ title, description }) => {
  return (
    <CardWrapper description={description}>
      <h2>{title}</h2>
      <Message>{description}</Message>
    </CardWrapper>
  );
};

export default Card;
