import styled from "styled-components";

export const SMainLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:3rem;
  cursor:pointer;
`;

export const SMainProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  margin-top: 1.9rem;
  .profile-content {
    margin-left: 0.5rem;
    p.gainge {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.4rem;
      color: #A7B1D1;
    }
    p.user-name {
      margin-top: 0.2rem;
      font-weight: 700;
      font-size: 1.8rem;
      color: #434B65;
    }
  }
`;

export const SMainSearch = styled.div`
  width: calc(100% - 3rem);
  height: 4.4rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1.2rem;
  box-sizing: border-box;
  background-color: #F6F7FA;
  border: 0.1rem solid #E4E8F4;
  border-radius: 0.8rem;
  img {
    cursor: pointer;
  }
`;

export const SMainCategory = styled.div`
  width: calc(100% - 2rem);
  margin:0 auto;
  margin-top: 2rem;
  border-top: 1px solid #E4E8F4;

  .all-content {
    padding-left: 2rem;
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #E4E8F4;
    span {
      font-size: 1.7rem;
      font-weight: 700;
    }
    &.active span {
      color:#005EFF;
    }
  }

  ul {
    margin-left: 2rem;
    margin-top: 2rem;
    li {
      list-style: none;
      font-size: 1.7rem;
      font-weight: 600;
      color: #434B65;
      margin-top: 2rem;
      &:first-child {
        margin-top: 0;
      }
      &.active {
        color: #005EFF;
      }
    }
  }
`;

export const SMainBottom = styled.div`
  height:100%;
  max-height: 17.48%;
  position: absolute;
  bottom: 0;
  width: 100%;
  .board {
    cursor:pointer;
    width: calc(100% - 2rem);
    margin: 0 auto;
    border-width: 0.1rem 0;
    border-style: solid;
    border-color: #E4E8F4;
    padding: 1.5rem 0 1.5rem 1.9rem;
    span {
      font-size: 1.8rem;
      font-weight: 700;
      color: #434B65;
    }
  }

  .content-apply {
    height: 69.83%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
      margin-top: 0.5rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: #005EFF;
    }
  }
`;