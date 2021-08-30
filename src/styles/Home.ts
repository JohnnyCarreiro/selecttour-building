import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export const Container = styled.div `

  .showcase{
    position: absolute;
    right: 0;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({theme}) => theme.colors.gray_100};
    color: ${({theme}) => theme.colors.gray_1000};
    z-index: 2;

    transition: 0.75s;

    header{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 40px 100px;
      z-index: 1000;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        cursor: pointer;
      }
      .toggle{
        position: relative;
        width: 60px;
        height: 60px;
        background-image: url('./assets/images/menu.png');
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: center;
        cursor: pointer;
      }
      .toggle.active{
        background-image: url('./assets/images/close.png');
        background-repeat: no-repeat;
        background-size: 25px;
        background-position: center;
        cursor: pointer;
      }
    }

    video {
      position:absolute;
      top:0;
      left: 0%;
      width: 100%;
      height:100%;
      object-fit: cover;
      opacity: 0.8;
    }
    .overlay{
      position:absolute;
      top:0;
      left: 0%;
      width: 100%;
      height:100%;
      background: #FAA94399;
      mix-blend-mode: overlay;
    }
    .text{
      position: relative;
      z-index: 10;
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
    .social{
      position: absolute;
      bottom: 40px;
      z-index: 10;

      display: flex;
      align-items: center;
      justify-content: center;

      a{
        display: inline-block;
        margin-right: 24px;
        /* transform: scale(1.5); */
        font-size: 1.5rem;
        transition: 0.5s;
      }

      a:hover{
        cursor: pointer;
        transform: translateY(-16px);
      }
    }
  }
  .showcase.active{
    right: 300px;
  }
  @media (max-width: 891px){
    .showcase, .showcase header {
      padding: 40px;
    }
  }

  .menu{
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.white};

    ul{
      position: relative;

      li{
        margin-bottom: 16px;
      }

      li a{
        font: ${({theme}) => theme.texts.title};
        text-transform: uppercase;
        color: ${({theme}) => theme.colors.main};
      }
      li a:hover{
        color: ${({theme}) => theme.colors.secondary};
      }
    }
  }
  h1{
    font: ${({theme}) => theme.texts.main_title};
  }
`
