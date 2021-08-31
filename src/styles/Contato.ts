import styled from 'styled-components'

export const Container = styled.div`
  .content{
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
    }
    .request-form{
      width: 100%;
      flex:1;
    }
  }
`
