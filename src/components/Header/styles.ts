import styled from 'styled-components';

export const Container = styled.header`
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
`
