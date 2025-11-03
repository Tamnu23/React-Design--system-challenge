import React from 'react';
import './Button.css';

//DEfining types for the button

interface ButtonProps {
  text: string;
  variant?: 'primary'|'secondary'|'danger';
  disabled?:boolean;
  loading?:boolean;
  onClick?: () => void;
}

// create button componenet

const Button: React.FC<ButtonProps> = React.memo(
  ({text , variant ='primary', disabled = false, loading = false, onClick}) =>{
    //build a dynamic css class based on props
    const className = `button ${variant} ${disabled ? 'disabled':''}`;

    //Render the actual button

    return (
      <button className={className}
      //disable click event when utton is disabled or loading

      onClick = {!disabled && !loading ? onClick : undefined}
      disabled = {disabled || loading}
      >        {/* ✅ This line uses `text`, so no more warning */}
        {loading ? 'Loading…' : text}</button>
    );
  }
);

export default Button;