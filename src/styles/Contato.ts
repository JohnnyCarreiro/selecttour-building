import styled from 'styled-components'

export const Container = styled.div`
  .content{
    margin:10px 0;
    z-index: 10;
    width: 100%;
    height:100%;
    display: flex;
    justify-content: space-between;

    .text{
      flex: 1;
      position: relative;
      z-index: 10;
      max-width: 700px;
      /* width: 100%; */


      h2{
        font: ${({theme}) => theme.texts.main_title};
        text-transform: uppercase;
      }
      h3{
        font: ${({theme}) => theme.texts.title};
        margin: 10px 0;
        text-transform: uppercase;
      }
      p{
        max-width: 500px;
        font: ${({theme}) => theme.texts.main_text};
        margin: 20px 0;

        a strong{
          font: ${({theme}) => theme.texts.main_strong};
        }
      }
      .contacts{
        font: ${({theme}) => theme.texts.main_strong};
        font-size: 1.5rem;
        color: ${({theme}) => theme.colors.gray_1000};
        margin-top: 20px;
        ul li{
          padding: 8px 0;
          display:flex;
          align-items: center;
          transition: 0.2s;

          svg{
            margin-right: 8px;
          }
           :hover{
             transform: translateX(20px);
           }
        }
      }
    }
    .request-form{
      width: 100%;
      flex:1;
    }
  }
  @media (max-width: 891px){
    /* .showcase{
      height: 100%;
    } */
    .content{
      margin: 80px 0;
      position: relative;
      display: flex;
      flex-direction: column;

      .request-form{
        margin-top: 10px;
      }
    }
  }
`
