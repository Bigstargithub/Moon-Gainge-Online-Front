import styled from "styled-components";

export const SMainContainer = styled.div`
  
`;

export const SLeftMain = styled.div`
  position:fixed;
  left:0;
  width:26.7rem;
  height:100vh;
  border-right: 0.1rem solid #E4E8F4;
  z-index: 9;
  background-color: #FFF;
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