import React from 'react';
// Components
import Slider from './Slider';
import {filterPresets} from '../util';


const ImageEditor = ({options, handleResetButtonClick, handleSliderChange, getImageStyle, backgroundUrl, setOptions}) => {

  return(
    <div className="image-editor-container">
      <div className="step-two-container">
        <p>2</p>
        <h2>Edit by adjusting filters or choosing a preset</h2>
      </div>
      <div className="filter-presets">
        {filterPresets().map(preset => {
          return (
            <p className="preset" onClick={() => setOptions(preset.filters)}>{preset.name}</p>
          )
        })}
      </div>
      <div className="slider-container">
        {options && options.map((option, index) => {
          return (
            <>
              <Slider 
              key={option.name}
              name={option.name}
              min={option.range.min}
              max={option.range.max}
              value={option.value}
              handleChange={handleSliderChange}  
              />
              {/* <p>{option.value}</p> */}
            </>
            )
          })}
        {/* <button className="reset-button" onClick={handleResetButtonClick}>Reset</button> */}
      </div>
      <img id="main-image" src={backgroundUrl} style={getImageStyle()} alt="edited"></img>
    </div>
  )
}

export default ImageEditor;