/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id={"close"} />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Fotter>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Fotter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(96, 100, 108, 0.8);
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 70px;
  background: ${COLORS.white};
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Nav = styled.nav`
  position: absolute;
  left: 32px;
  top: 288px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Fotter = styled.footer`
  position: absolute;
  left: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.medium};
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default MobileMenu;
