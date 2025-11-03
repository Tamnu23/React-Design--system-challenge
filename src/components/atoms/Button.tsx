import React from 'react';
import '../../styles/Button.css';

//Defining what properties (props) the button will accept
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({text, onClick}) => {
//React.FC<ButtonProps> tells typescript that this ia s react functional component that accepts props of type ButtonProps

return (
  <button className='button' onClick={onClick}>{text}</button>
);
}
export default Button;