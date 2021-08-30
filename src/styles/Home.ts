import styled from 'styled-components'

export const Container = styled.div `
.text{
  position: relative;
  /* z-index: 10;  */
  max-width: 700px;


  h2{
    font: ${({theme}) => theme.texts.main_title};
    text-transform: uppercase;
  }
  h3{
    font: ${({theme}) => theme.texts.title};
    text-transform: uppercase;
  }
  p{
    font: ${({theme}) => theme.texts.main_text};
    margin: 20px 0;
  }
  a{
    display: inline-block;
    font: ${({theme}) => theme.texts.main_strong};
    background-color: ${({theme}) => theme.colors.main};
    border: 2px solid transparent;
    border-radius: 4px;
    text-transform: uppercase;
    padding: 10px 30px;
    margin-top: 10px;
    letter-spacing: 2px;
    transition: 0.2s;
  }
  a:hover{
    letter-spacing: 6px;
    background-color: transparent;
    color: ${({theme}) => theme.colors.gray_1000};
    border: 2px solid ${({theme}) => theme.colors.main};
  }
}
`
