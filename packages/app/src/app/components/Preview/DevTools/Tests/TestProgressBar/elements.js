// @flow
import styled from 'styled-components';

export const ProgressBar = styled.div`
  padding: 0 calc(1rem - 3px);
  box-sizing: border-box;
  display: flex;
  height: 3px;
  width: 100%;
  border-radius: 1px;
`;

const BaseBar = styled.div`
  transition: 0.3s ease all;
  border-radius: 1px;
  height: 3px;
  flex: ${props => props.count};
  margin: 0 ${props => (props.count !== 0 ? 3 : 0)}px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

export const SuccessBar = BaseBar.extend`
  background-color: ${props => props.theme.green};
`;

export const FailedBar = BaseBar.extend`
  background-color: ${props => props.theme.red};
`;

export const IdleBar = BaseBar.extend`
  background-color: rgba(255, 255, 255, 0.5);
`;
