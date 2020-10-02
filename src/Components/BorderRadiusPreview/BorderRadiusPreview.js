import React, { useState } from 'react';
import styles from '../BorderRadiusPreview/borderRadiusPreview.module.css';

function BorderRadiusPreview() {
  const [radius, setRadius] = useState(15);
  const [margin, setMargin] = useState(25);
  const [unit, setUnit] = useState('%');
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(170);

  const boxStyle = {
    borderRadius: `${radius}${unit}`,
    margin: `${margin}px auto`,
    width: `${width}px`,
    height: `${height}px`,
    border: '3px solid rgb(184, 4, 4)',
  };

  return (
    <div className="widget">
      <h1>Border Radius Preview</h1>

      <div className={styles.controls}>
        <h3>Controls</h3>
        <div className={styles.sliderBox}>
          <label htmlFor="radius">Radius Percentage (between 0 and 50):</label>
          <input
            className={styles.slider}
            id="radius"
            type="range"
            min="0"
            max="50"
            defaultValue="15"
            onChange={(e) => setRadius(e.target.value)}
          />

          <form
            onChange={(e) => {
              setUnit(e.target.value);
            }}
          >
            <label htmlFor="percent">Percent </label>
            <input id="percent" name="type" type="radio" value="%" />
            <label htmlFor="pixels">Pixels </label>
            <input id="pixels" name="type" type="radio" value="px" />
          </form>
        </div>

        <div className={styles.sliderBox}>
          <label htmlFor="width">Width (between 60 and 300):</label>
          <input
            className={styles.slider}
            id="width"
            type="range"
            min="60"
            max="300"
            defaultValue="150"
            step="5"
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div className={styles.sliderBox}>
          <label htmlFor="heigth">Heigth (between 60 and 300):</label>
          <input
            className={styles.slider}
            id="width"
            type="range"
            min="60"
            max="300"
            defaultValue="170"
            step="5"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className={styles.sliderBox}>
          <label htmlFor="margin">Margin (between 0 and 50):</label>
          <input
            className={styles.slider}
            id="margin"
            type="range"
            min="0"
            max="50"
            defaultValue="25"
            step="5"
            onChange={(e) => setMargin(e.target.value)}
          />
        </div>

        <hr></hr>
        <div style={{ display: 'inline' }}>
          <h4>Radius {radius}% </h4>
          <h4>Margin {margin}px </h4>
          <h4>Width {width}px </h4>
          <h4>Heigth {height}px </h4>
        </div>
      </div>
      <div className={styles.preview}>
        <div style={boxStyle}>
          <h4>Use slider to change radius</h4>
        </div>
      </div>
    </div>
  );
}

export default BorderRadiusPreview;
