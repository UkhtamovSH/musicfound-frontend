import styled from 'styled-components';

export const HeaderSectionStyle = styled.div`
  padding-top: 55px;
  padding-bottom: 5px;
  background-color: #f5f5f5;
  text-align: center;
  ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0px;
    li {
      margin: 0 5px;
      a {
        text-decoration: none;
        display: inline-block;
        padding: 5px;
        color: #333;
        text-decoration: none;
        font-weight: 700;
        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
`;
