import React, { useState } from 'react';
// Styling
import './App.scss';
//Images 
import cat_cactus from './img/cat_cactus.jpg';
// Components
import ImageGallery from './components/ImageGallery';
import ImageEditor from './components/ImageEditor';

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

const App = () => {
  // State
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionSelectedIndex] = useState(0);
  const [backgroundUrl, setBackgroundUrl] = useState(cat_cactus);

  const handleSliderChange = ({ target }) => {   
    setOptions(prevOptions => {
      return prevOptions.map((option) => {
        if (option.name !== target.name) return option;
        return { ...option, value: target.value };
      })
    })
  }

  const getImageStyle = () => {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`;
    })

    return { filter: filters.join(' ') };
  }

  const changeImageHandler = (e) => {
    setBackgroundUrl(e.target.src);
    resetFilters();
  }

  const resetFilters = () => {
    setOptions(DEFAULT_OPTIONS);
  }

  const handleResetButtonClick = () => {
    resetFilters();
  }

  return (
    <>
      <div className="header">
        <h1>Photo editor</h1>
      </div>
      <div className="container">
        <ImageGallery changeImageHandler={changeImageHandler}/>
        <ImageEditor options={options} handleResetButtonClick={handleResetButtonClick} handleSliderChange={handleSliderChange} getImageStyle={getImageStyle} backgroundUrl={backgroundUrl}/>
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
