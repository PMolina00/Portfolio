import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido a <br />
        mi porfolio
      </SectionTitle>
      <SectionText>
        Poseo experiencia trabajando en proyectos como
        Full Stack Web Developer a nivel académico y cuento
        con muchas ganas de obtener experiencias en el
        mundo real, ademas de poder seguir aprendiendo y
        avanzando con mi carrera profesional.<br/>
        Para mas información 
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/pablo-molina-00/"}>contácteme</Button>
    </LeftSection>
  </Section>
);

export default Hero;