import styled from "styled-components";

export const SMainContainer = styled.div`
  
`;

export const SLeftMain = styled.div`
  max-width:16.67%;
  background-color: #E8EFFE;
  border: 1px solid #E8EFFE;
  height:100vh;  
  .logo {
    width:81.67%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:#fff;
    margin-left:1rem;
    margin-top:1rem;
    padding:1.5rem;
    box-sizing: border-box;
    border-radius:1rem;
    cursor:pointer;
  }
  .category {
    margin-top:0.4rem;
    ul {
      margin:0;
      padding:0;
      margin-left:1rem;
      list-style:none;
    }
    li {
      margin-left:1rem;
      margin-top:2.5rem;
      font-size: 1.8rem;
      font-weight: 700;
      line-height:2.4rem;
      color: #434B65;
      cursor:pointer;
      &.active {
        color: #005EFF;
      }
    }
  }
`