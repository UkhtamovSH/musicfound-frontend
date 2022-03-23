import styled from 'styled-components';

export const HeaderFixedMain = styled.div`
  position: fixed;
  width: 100%;
  background: #000;
  padding: 10px 0;
  z-index: 999;
`;
export const HeaderFlexStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .brand {
    font-size: 22px;
    color: var(--white);
    margin: 0;
    @media only screen and (max-width: 576px) and (min-width: 320px) {
      font-size: 15px;
    }
  }
  .searchLineMain {
    align-items: center;
    display: flex;
    input {
      padding: 7px 12px;
      border: none;
      width: 100%;
      color: #555;
      font-size: 13px;
      font-style: italic;
      background-color: #fff;
      &:focus {
        box-shadow: none !important;
        border: none !important;
        outline: none !important;
      }
    }
    .searchLine {
      background-color: var(--blue);
      padding: 4px 16px;
      border: none;
    }
  }
  .starLine {
    height: 30px;
    padding: 0 12px;
    background-color: var(--dark);
    align-items: center;
    display: flex;
    color: var(--white);
    font-size: 13px;
    font-weight: bold;
    @media only screen and (max-width: 576px) and (min-width: 320px) {
      img {
        margin-right: 0 !important;
      }
      span {
        display: none;
      }
    }
  }
`;
