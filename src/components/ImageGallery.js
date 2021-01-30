import React from 'react'
// Images 
import cat_cactus from '../img/cat_cactus.jpg';
import china from '../img/china.jpg';
import coast from '../img/coast.jpg';
import foliage from '../img/foliage.jpg';
import forest from '../img/forest.jpg';
import plant_shelf from '../img/plant_shelf.jpg';
import tree from '../img/tree.jpg';
import windsurfing from '../img/windsurfing.jpg';

const ImageGallery = ({changeImageHandler}) => {

  return (
    <div>
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
    </div>
  )
}

export default ImageGallery;
