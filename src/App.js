import React, { useState } from 'react';
// Styling
import './App.scss';
//Images 
import cat_cactus from './img/cat_cactus.jpg';
// Components
import ImageGallery from './components/ImageGallery';
import ImageEditor from './components/ImageEditor';
import Footer from './components/Footer';
// Default editor options
import {DEFAULT_OPTIONS} from './util';

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
      <Header />
      <div className="container">
        <ImageGallery changeImageHandler={changeImageHandler}/>
        <ImageEditor options={options} handleResetButtonClick={handleResetButtonClick} handleSliderChange={handleSliderChange} getImageStyle={getImageStyle} backgroundUrl={backgroundUrl}/>
        <Final />
      </div>
      <Footer />
    </>
  );
}

// Components
const Header = () => {
  return(
    <div className="header">
    <h1>Image editor</h1>
  </div>
  )
} 

const Final = () => {
  return(
    <div className="final-step">
      <p>3</p>
      <h2>Cut using snippy/screenshot & crop</h2>
    </div>
  )
}

export default App;
