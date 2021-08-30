import styled from 'styled-components'

export const Container = styled.div<{primaryColor:boolean}>`
  .primary{
    background-color:${({primaryColor})=> primaryColor ? ({theme})=> theme.colors.primary :({theme})=> theme.colors.secondary };
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    text-align:center;
    border: none;
    border-radius:0.5rem;
    margin-top:2.5rem;
    padding:0.5rem 2.5rem;
    transition:.2s;
    cursor:pointer;
    a{
      text-align:center;
      color:${({theme})=>theme.colors.gray_1000};
      font: 700 1.5rem/2.25rem Roboto, sans-serif;
    }
  }
  .primary:hover{
      background:transparent;
      border: 2px solid ${({primaryColor})=> primaryColor ? ({theme})=> theme.colors.primary :({theme})=> theme.colors.secondary };
      a{
        color:${({primaryColor})=> primaryColor ? ({theme})=> theme.colors.primary :({theme})=> theme.colors.secondary };
      }
    }
  .secondary{
    background:transparent;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    text-align:center;
    border: 1px solid ${({primaryColor})=> primaryColor ? ({theme})=> theme.colors.primary :({theme})=> theme.colors.secondary };
    border-radius:0.5rem;
    padding:0.5rem 2.5rem;
    margin-top:2.5rem;
    transition:0.2s;

    a{
      text-align:center;
      color:${({primaryColor})=> primaryColor ? ({theme})=> theme.colors.primary :({theme})=> theme.colors.secondary };
      font: 700 1.5rem/2.25rem Roboto, sans-serif;
    }
  }
  .secondary:hover{
    background:${({primaryColor})=> primaryColor ? ({theme})=> theme.colors.primary :({theme})=> theme.colors.secondary };
    opacity:0.7;
    a{
      color:${({theme})=> theme.colors.gray_900};
    }
  }
`
