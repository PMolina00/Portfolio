import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Con experiencia en proyectos como fullStack Developer.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            experiencia en <br/>
            ReactJs, ReduxJs, JavaScript.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            experiencia en <br/>
            NodeJs, ExpressJs, PostgreSQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);
// Para el desarrollo del backend utilizo NodeJs, PostgreSQL, ExpressJs.<br/>
// Para el desarrollo del frontend utilizo JavaScript, ReactJs, ReduxJs.<br/>
// Con conocimientos de JavaScript avanzado y tecnologías ágiles Scrum, Git, GitHub.
// Utilización del sistema operativo linux.

export default Technologies;
