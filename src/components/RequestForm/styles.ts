import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
  padding-left: 2rem;

  .registration{

  }
  .travel{
    div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.5rem;
      div{
        width: 100%;
        margin-top:0;
        margin:0;
        & + :last-child{
          margin-left: 1rem;
        }
      }
    }
  }

  @media screen and (max-width:1024px) {
    padding:0;
  }
`;
