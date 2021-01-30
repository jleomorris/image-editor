import React, { useState } from 'react';
// Styling
import './App.scss';
// Components
import Slider from './components/Slider';
//Images 
import cat_cactus from './img/cat_cactus.jpg';
import china from './img/china.jpg';
import coast from './img/coast.jpg';
import foliage from './img/foliage.jpg';
import forest from './img/forest.jpg';
import plant_shelf from './img/plant_shelf.jpg';
import tree from './img/tree.jpg';
import windsurfing from './img/windsurfing.jpg';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
]

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionSelectedIndex] = useState(0);
  // const selectedOption = options[selectedOptionIndex];
  const [backgroundUrl, setBackgroundUrl] = useState(cat_cactus);

  function handleSliderChange({ target }) {   
    // Look through options and change the value of the selected option
    setOptions(prevOptions => {
      return prevOptions.map((option) => {
        if (option.name !== target.name) return option;
        return { ...option, value: target.value };
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`;
    })

    return { filter: filters.join(' ') };
  }

  function changeImageHandler(e) {
    setBackgroundUrl(e.target.src);
    resetFilters();
  }

  function resetFilters() {
    setOptions(DEFAULT_OPTIONS);
  }

  function handleResetButtonClick() {
    resetFilters();
  }

  return (
    <>
      <div className="header">
        <h1>Photo editor</h1>
      </div>
      <div className="container">
        <div className="image-gallery">
          <div className="step-one-container">
            <p>1</p>
            <h2>Choose an image</h2>
          </div>
          <img className="image-option" alt="option" src={cat_cactus} onClick={changeImageHandler}></img>
          <img className="image-option" alt="option" src={china} onClick={changeImageHandler}></img>
          <img className="image-option" alt="option" src={coast} onClick={changeImageHandler}></img>
          <img className="image-option" alt="option" src={foliage} onClick={changeImageHandler}></img>
          <img className="image-option" alt="option" src={forest} onClick={changeImageHandler}></img>
          <img className="image-option" alt="option" src={plant_shelf} onClick={changeImageHandler}></img>
          <img className="image-option" alt="option" src={tree} onClick={changeImageHandler}></img>
          <img className="image-option" alt="option" src={windsurfing} onClick={changeImageHandler}></img>
        </div>
        <div className="main-image-container">
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
        <div className="final-step">
          <p>3</p>
          <h2>Cut using snippy/screenshot & crop and use as custom wallpaper</h2>
        </div>
      </div>
      <div>
      </div>
    </>
  );
}

export default App;
