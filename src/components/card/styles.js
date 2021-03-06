import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fff;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  border-radius: 5px;
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${({ isDragging }) =>
    isDragging &&
    css`
      padding-top: 31px;
      border: 2px dashed rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      span {
        opacity: 0;
      }
    `}
`;

export const Label = styled.div`
  width: 10px;
  height: 10px;
  display: inline-block;
  background: ${({ color }) => color};
  border-radius: 2px;
`;
