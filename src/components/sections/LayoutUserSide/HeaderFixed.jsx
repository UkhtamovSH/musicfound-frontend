import React from 'react';
import { ContainerStyle } from '../../../styles/Global.styled';
import SearchLine from '../../../assets/svg/search-line.svg';
import Star from '../../../assets/svg/star-fill.svg';
import {
  HeaderFixedMain,
  HeaderFlexStyle,
} from '../../../styles/HeaderFixed.styled';

export const HeaderFixed = () => {
  return (
    <HeaderFixedMain>
      <ContainerStyle>
        <HeaderFlexStyle>
          <p className='brand'>Музыка</p>
          <div
            style={{
              width: '100%',
              padding: '0 20px',
            }}
          >
            <form action='#' className='searchLineMain'>
              <input
                type='text'
                placeholder='Поиск — введите название песни или исполнителя'
              />
              <button type='submit' className='searchLine cursor'>
                <img src={SearchLine} alt='' />
              </button>
            </form>
          </div>
          <div className='starLine'>
            <img src={Star} style={{ marginRight: '6px' }} alt='' />{' '}
            <span>избранное</span>
          </div>
        </HeaderFlexStyle>
      </ContainerStyle>
    </HeaderFixedMain>
  );
};
