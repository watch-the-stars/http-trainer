import styled from 'styled-components';

const Button = styled.button`
  background-color: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 2px;
  outline: none;
  
  font-size: 14px;
  line-height: 17px; 
  color: #1A1B22; 
  cursor: pointer;

  width 100%;
  max-width:220px;
  height: 48px;
  margin-bottom:40px;
  transition: all .1s ease-in-out;

  :last-of-type {
    margin-bottom: 0;
  }

  :hover {
    background-color: #56B89F;
    border: none;
    color: #fff;
  }
  :active {
    background-color: #1A1B22;
    color: #fff;
  }
`;

export default Button;