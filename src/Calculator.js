import React, { useState } from 'react'
import buttons from './data'
import { FaBackspace } from "react-icons/fa";

const Calculator = () => {
    const [input,setInput] = useState('');
    const handleButtonClick = (value) => {
        if (value === 'backspace') {
          handleBackspace();
        } else if (value === 'Clear') {
          handleClear();
        } else if (value === '=') {
          handleCalculate();
        } else {
          setInput(input + value);
        }
      };
    
      const handleClear = () => {
        setInput('');
      };
    
      const handleBackspace = () => {
        setInput(input.slice(0, -1));
      };
    
      const handleCalculate = () => {
        try {
          setInput(eval(input));
        } catch {
          setInput('Error');
        }
      };
    
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
            <div className='mb-4 p-4 bg-gray-100 rounded text-right text-2xl shadow-inner' >
                {input || "0"}
            </div>
            <div className='grid grid-cols-4 gap-4'>

            {buttons.map((button) => (
            <button
              key={button.label}
              className={`calculator-button  ${button.type === 'action' && button.label === 'Clear' ? 'bg-red-400 hover:bg-red-500' : ''} ${button.type === 'action' && button.label === 'backspace' ? 'bg-red-400 hover:bg-red-500' : ''} ${button.type === 'operator' ? 'bg-yellow-400 hover:bg-yellow-500' : ''} ${button.label === '=' ? 'bg-blue-400 hover:bg-blue-500' : ''}`}
              onClick={() => handleButtonClick(button.label)}
            >
              {button.label === 'backspace' ? <FaBackspace /> : button.label}
            </button>
          ))}
            </div>
        </div>
    </div>
  )
}

export default Calculator