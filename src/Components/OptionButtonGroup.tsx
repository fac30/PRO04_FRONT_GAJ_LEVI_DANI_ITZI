import React, { useState } from 'react';
import "../App.css";


interface OptionButtonGroupProps {
  options: string[];
  onOptionSelect: (option: string) => void;
  renderOption?: (option: string) => React.ReactNode;  // Add this line
}


const OptionButtonGroup: React.FC<OptionButtonGroupProps> = ({ options, onOptionSelect, renderOption }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      onOptionSelect(option);
    };


    return ( 

        <div>
      {options.map((option) => (
        <button
          key={option}
          className={`buttonStyling ${selectedOption === option ? "selected" : ""}`}
          onClick={() => handleOptionClick(option)}
        >
          {renderOption ? renderOption(option) : option}
        </button>
      ))}
    </div>



     );
}
 
export default OptionButtonGroup;


{/* <div className="buttonGroup">
    <button className='button-styling'>One</button>
    <button className='button-styling'>Two</button>
    <button className='button-styling'>Three</button>
    <button className='button-styling'>Four</button>
</div> */}