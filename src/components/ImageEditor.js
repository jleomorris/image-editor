import React from 'react';
// Components
import Slider from './Slider';

const ImageEditor = ({options, handleResetButtonClick, handleSliderChange, getImageStyle, backgroundUrl}) => {

  return(
    <div className="image-editor-container">
      <div className="step-two-container">
        <p>2</p>
        <h2>Edit by adjusting filters</h2>
      </div>
      <div className="slider-container">
        {options.map((option, index) => {
          return(
            <Slider 
            key={option.name}
            name={option.name}
            min={option.range.min}
            max={option.range.max}
            value={option.value}
            handleChange={handleSliderChange}  
            />
            )
          })}
        <button className="reset-button" onClick={handleResetButtonClick}>Reset</button>
      </div>
      <img id="main-image" src={backgroundUrl} style={getImageStyle()} alt="edited"></img>
    </div>
  )
}

export default ImageEditor;