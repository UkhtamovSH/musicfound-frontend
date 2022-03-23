import styled, { createGlobalStyle } from 'styled-components';
import Volume from '../assets/svg/volume-up-fill.svg';
import VolumeDown from '../assets/svg/volume-down-fill.svg';
import VolumeMute from '../assets/svg/volume-mute-fill.svg';
import Order from '../assets/svg/order-play-fill.svg';
import Repeat from '../assets/svg/repeat-fill.svg';
import Shuffle from '../assets/svg/shuffle-fill.svg';
import StarFill from '../assets/svg/star-fill-bc.svg';
import Download from '../assets/svg/download-2-fill.svg';
import SkipForward from '../assets/svg/skip-forward-fill.svg';
import Play from '../assets/svg/play-fill.svg';
import Pause from '../assets/svg/pause-fill.svg';
import SkipBack from '../assets/svg/skip-back-fill.svg';
export const GlobalStyled = createGlobalStyle`
  body{
    background: var(--gray);
    font-family: arial,sans-serif;
    box-sizing: border-box;
    margin: 0;
    user-select: none;
  }
  
  :root{
    --gray: #d5d8db;
    --gray2: #f5f5f5;
    --blue: #0AF;
    --dark: #444444;
    --white: #fff;
  }
  
  p{
    margin-bottom: 0;
  }
  
  .cursor{
    cursor: pointer;
  }
  
  .icon {
    display: inline-block;
    mask-repeat: no-repeat;
    mask-size: 100%;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    -webkit-mask-position: center;
    vertical-align: middle;
  }

  .icon-volume {
    mask-image: url(${Volume});
    -webkit-mask-image: url(${Volume});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-order {
    mask-image: url(${Order});
    -webkit-mask-image: url(${Order});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-repeat {
    mask-image: url(${Repeat});
    -webkit-mask-image: url(${Repeat});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-shuffle {
    mask-image: url(${Shuffle});
    -webkit-mask-image: url(${Shuffle});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-starFill {
    mask-image: url(${StarFill});
    -webkit-mask-image: url(${StarFill});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-download {
    mask-image: url(${Download});
    -webkit-mask-image: url(${Download});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-skipForward {
    mask-image: url(${SkipForward});
    -webkit-mask-image: url(${SkipForward});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-play {
    mask-image: url(${Play});
    -webkit-mask-image: url(${Play});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-pause {
    mask-image: url(${Pause});
    -webkit-mask-image: url(${Pause});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-skipBack {
    mask-image: url(${SkipBack});
    -webkit-mask-image: url(${SkipBack});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-volumeDown {
    mask-image: url(${VolumeDown});
    -webkit-mask-image: url(${VolumeDown});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
  .icon-volumeMute {
    mask-image: url(${VolumeMute});
    -webkit-mask-image: url(${VolumeMute});
    background-color: #bcbcbc;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
`;

export const ContainerStyle = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media only screen and (max-width: 576px) and (min-width: 320px) {
    padding: 0 15px !important;
  }
`;
