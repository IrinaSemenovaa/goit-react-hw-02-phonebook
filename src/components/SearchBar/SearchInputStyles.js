import { css } from '@emotion/css';

export const inputContainerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const searchInputStyles = css`
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  height: 36px;
  width: 500px;
  padding: 8px;
  text-align: center;
  margin: 0 auto;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #3498db;
  }
`;