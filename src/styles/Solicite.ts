import styled from 'styled-components'

export const Container = styled.div`
.content{
  z-index: 10;
  width: 100%;
  height:100%;
  display: flex;
  justify-content: space-between;

  .text{
    width: 100%;
    flex:1;
  }
  .request-form{
    width: 100%;
    flex:1;
  }
}
@media (max-width: 891px){
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
