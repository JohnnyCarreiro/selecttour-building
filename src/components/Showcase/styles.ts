import styled from 'styled-components';

export const Container = styled.section`

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
  :nth-child(){
    z-index: 10;
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

`;
