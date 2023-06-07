import styled from "styled-components"

export const SBoardSearchButton = styled.div`
  display:flex;
  align-items: center;
  margin-top: 2rem;
  .search {
    display: flex;
    align-items: center;
    width: 35.8rem;
    height: 4.8rem;
    padding: 1.55rem 1.35rem;
    box-sizing: border-box;
    background-color: #FFF;
    border: 1px solid #E4E8F4;
    border-radius: 0.5rem;
    #board_search {
      width: 80%;
      margin-left: 1.15rem;
      border: none;
      font-size: 1.5rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #A7B1D1;
      }
    }
  }
  .filter {
    margin-left: 1rem;
    select#board-order-filter {
      width: 15.4rem;
      height: 4.8rem;
      padding: 1.2rem;
      box-sizing: border-box;
      -webkit-appearance: none; 
      -moz-appearance: none;
      appearance: none;
      border: 1px solid #E4E8F4;
      border-radius: 0.4rem;
      background: url("icon/icon-arrow-down-gray.svg") no-repeat 95% 50%;
      background-color: #fff;
      font-size: 1.7rem;
      font-weight: 600;
      color: #434B65;
      option {
        color: red;
      }
    }
  }
`