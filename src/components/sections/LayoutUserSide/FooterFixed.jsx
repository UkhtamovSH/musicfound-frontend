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
        <div className='mid2'>
          <div className='mid2Sub1'>0:00</div>
          <div className='mid2Sub2'>
            ee kasdjasjkdakj kaksdjkaskjd akjsdjkaskj jkajksdjkasjkj kjkasjkdjk
            jkasjkdj
          </div>
          <div className='mid2Sub3'>0:00</div>
        </div>
        <div className='footerFixedFlex'>
          <div className=''>
            <span className='icon icon-skipBack' />
            {play ? (
              <span className='icon icon-play' onClick={handlePlay} />
            ) : (
              <span className='icon icon-pause' onClick={handlePlay} />
            )}
            <span className='icon icon-skipForward' />
          </div>
          <div className='mid'>
            <div className='midSub1'>0:00</div>
            <div className='midSub2'>
              ee kasdjasjkdakj kaksdjkaskjd akjsdjkaskj jkajksdjkasjkj
              kjkasjkdjk jkasjkdj
            </div>
            <div className='midSub3'>0:00</div>
          </div>
          <div className=''>
            <span className='icon icon-download' style={{ margin: '0 4px' }} />
            <span className='icon icon-starFill' style={{ margin: '0 4px' }} />

            <span style={{ margin: '0 4px' }}>
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
                <span
                  className='icon icon-order'
                  onClick={() => handleTypePlay(2)}
                />
              ) : null}
            </span>
            <span style={{ margin: '0 4px' }}>
              {Number(val) === 0 ? (
                <span
                  className='icon icon-volumeMute'
                  onClick={() => setVal(100)}
                />
              ) : val > 0 && val <= 50 ? (
                <span
                  className='icon icon-volumeDown'
                  onClick={() => setVal(0)}
                />
              ) : (
                <span className='icon icon-volume' onClick={() => setVal(0)} />
              )}
            </span>
            <input
              type='range'
              min='0'
              max='100'
              value={val}
              onChange={(e) => setVal(e.target.value)}
              style={{
                width: '80px',
                height: '4px',
              }}
            />
            <span style={{ fontSize: '12px', width: '20px' }}>{val}</span>
          </div>
        </div>
      </ContainerStyle>
    </FooterFixedMain>
  );
};
