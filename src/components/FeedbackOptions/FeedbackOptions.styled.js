import { styled } from 'styled-components';
export const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  ${props => {
    switch (props.type) {
      case 'good':
        return `background-color: #addc40`;
      case 'neutral':
        return `background-color: #57a7af`;
      case 'bad':
        return `background-color: #fd9cbc`;
      default:
        return null;
    }
  }}
`;
