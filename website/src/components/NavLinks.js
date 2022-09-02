import React from 'react';

import {Wrapper, TextLink} from './NavLinks.styles';

const NavLinks = ({handleOpenModal}) => (
  <Wrapper>
    <TextLink href="#" onClick={() => handleOpenModal()}>
      About
    </TextLink>
    <TextLink href="https://xhou.me">Blog</TextLink>
    <TextLink href="https://github.com/imhlq/sdow">GitHub</TextLink>
  </Wrapper>
);

export default NavLinks;
