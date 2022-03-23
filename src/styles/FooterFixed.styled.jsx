import styled from 'styled-components';

export const FooterFixedMain = styled.div`
  position: fixed;
  width: 100%;
  background: #000;
  padding: 10px 0;
  z-index: 999;
  bottom: 0;
  left: 0;
  color: #fff;
  .mid2 {
    display: none;
    overflow: hidden;
    .mid2Sub1 {
      width: 50px;
    }
    .mid2Sub2 {
      width: 100%;
      clear: both;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
    }
    .mid2Sub3 {
      width: 50px;
      padding-left: 10px;
    }
  }
  @media only screen and (max-width: 576px) and (min-width: 320px) {
    .mid2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;
    }
    input[type='range'] {
      width: 50px !important;
    }
  }
  .footerFixedFlex {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 576px) and (min-width: 320px) {
    }
    .mid {
      width: 100%;
      margin: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      overflow: hidden;
      .midSub1 {
        width: 50px;
      }
      .midSub2 {
        width: 100%;
        clear: both;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
      }
      .midSub3 {
        width: 50px;
        padding-left: 10px;
      }
      @media only screen and (max-width: 576px) and (min-width: 320px) {
        display: none;
      }
    }
    div {
      &:nth-child(1) {
        width: 125px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      @media only screen and (max-width: 576px) and (min-width: 320px) {
        &:nth-child(3) {
          width: 100% !important;
          justify-content: flex-end !important;
        }
      }
      &:nth-child(3) {
        width: 358px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
