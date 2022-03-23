import React, { useEffect, useRef, useState } from 'react';
import { FooterFixedMain } from '../../../styles/FooterFixed.styled';
import { ContainerStyle } from '../../../styles/Global.styled';

export const FooterFixed = () => {
  const [val, setVal] = useState(100);
  const [play, setPlay] = useState(true);
  const [typePlay, setTypePlay] = useState(3);

  const handlePlay = () => {
    setPlay(!play);
  };

  const handleTypePlay = (i) => setTypePlay(i);

  return (
    <FooterFixedMain>
      <ContainerStyle>
        <span className='icon icon-skipBack' />
        {play ? (
          <span className='icon icon-play' onClick={handlePlay} />
        ) : (
          <span className='icon icon-pause' onClick={handlePlay} />
        )}
        <span className='icon icon-skipForward' />
        <span className='icon icon-download' />
        <span className='icon icon-starFill' />

        {typePlay === 1 ? (
          <span
            className='icon icon-shuffle'
            onClick={() => handleTypePlay(3)}
          />
        ) : typePlay === 2 ? (
          <span
            className='icon icon-repeat'
            onClick={() => handleTypePlay(1)}
          />
        ) : typePlay === 3 ? (
          <span className='icon icon-order' onClick={() => handleTypePlay(2)} />
        ) : null}
        {Number(val) === 0 ? (
          <span className='icon icon-volumeMute' onClick={() => setVal(100)} />
        ) : val > 0 && val <= 50 ? (
          <span className='icon icon-volumeDown' onClick={() => setVal(0)} />
        ) : (
          <span className='icon icon-volume' onClick={() => setVal(0)} />
        )}
        <input
          type='range'
          min='0'
          max='100'
          value={val}
          onChange={(e) => setVal(e.target.value)}
          style={{
            width: '80px',
            height: '4px',
            transform: 'translate(0, -2px)',
          }}
        />
        <span style={{ fontSize: '12px' }}>{val}</span>
      </ContainerStyle>
    </FooterFixedMain>
  );
};
