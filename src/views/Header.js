import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: ${props => props.height}vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255);
`;

const Title = styled.h1`
  color: black;
  text-align: center;
  font-size: medium;
`;

const Header = props => {
  return (
    <Container height={props.height}>
      <Title>Contact us on Slack!</Title>
    </Container>
  );
};

export default Header;
