import styled from 'styled-components';

export const Container = styled.section`
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
      /* width: 250px; */
      padding: 0 25px;
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

`;
