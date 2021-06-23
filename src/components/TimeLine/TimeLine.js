import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle> sobre mi </SectionTitle>
      <SectionText>
        Hola, Mi nombre es Pablo, luego de recibirme del bachiller en informática,
        me interese un montón por la programación por lo que logre dar con #henry,
        que me permitió profundizar mis conocimientos y adquirir experiencia en proyectos como Full Stack Web Developer a nivel académico.
        Con esto como base espero poder seguir obteniendo mas experiencia y aprendiendo nuevas tecnologías,
        especializándome y logrando tener un mejor futuro.<br />
        Si te interesa mi perfil y quieres conocer mas, puedes contactarme por mi mail de contacto: pmolina9876@gmail.com.<br />
        Gracias por su tiempo.
      </SectionText>
    </Section>
  );
};

export default Timeline;
