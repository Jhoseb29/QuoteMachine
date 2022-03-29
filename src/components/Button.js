import React from 'react';

const Button = ({handle, color, quote}) => {
    return (
        <div className="d-flex jc-space-between">
        
        <button className={color} onClick={handle}>
            <i class="fas fa-chevron-right"></i>
        </button>
        
    </div>

);
    
};

export default Button;