'use client'

import { createGlobalStyle } from 'styled-components';
import theme from '@/style/Theme';

const GlobalStyle = createGlobalStyle`
 html{
  font-size: 62.5%; 
  @media (${theme.windowSize['mb-l']}){
      font-size: 58%;
    }
  @media (max-width: 500px){
      font-size: 55.125%;
    }
 }
 *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    color: inherit;     
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  a, img{
    display: block;
  }
  button{
    outline: none;
    appearance: none;
    border: none;
  }
  body{
    font-family: 'Poppins', 'Pretendard', 'sans-serif';
    font-size: ${theme.fontSize.body.sm};
    min-width: 280px;
    
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', 'Pretendard', 'sans-serif';
  }

.fp-overflow{
  overflow-x: hidden;
  scrollbar-width: none;
}
  .fp-warning, .fp-watermark{
  display: none;
}

#fp-nav ul li a span, .fp-slidesNav ul li a span{
  background: ${theme.color.text_4} !important;
}

#fp-nav ul li a.active span{
  background: ${theme.color.point} !important;
  box-shadow: ${theme.color.point80} 0rem 0rem 0.8rem;
}

#fp-nav ul li:last-child{
  display: none;
}

::-webkit-scrollbar{
  display: none;
}

::selection{
  background-color: ${theme.color.text_6};
}

`;

export default GlobalStyle;
