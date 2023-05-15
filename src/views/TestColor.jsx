// import { useEffect } from 'react';
import './testColor.css';
import Blob from '../components/Blob';

function TestColor() {
  // useEffect(() => {
  //   // const element = document.getElementById('background-element');
  //   // console.log("element", element)
  //   // const computedStyles = window.getComputedStyle(element);
  //   // console.log("computedStyles", computedStyles)
  //   // const backgroundColor = computedStyles.webkitBorderStartColor;
  //   // console.log("backgroundColor",backgroundColor)

  //   const backgroundColor = "#ED6A5A"

  //   const textColor = isColorLight(backgroundColor) ? '#ED6A5A' : '#f9f7f5';
  //   console.log("textColor", textColor)
  //   const textElements = document.getElementsByClassName('color-change');
  //   console.log(textElements)
  //   Array.from(textElements).forEach(element => {
  //     element.style.color = textColor;
  //   });
  // }, []);

  // function isColorLight(color) {
  //   // Convierte el color a RGB
  //   console.log("COLOR", color)
  //   const rgb = color.substring(4, color.length-1)
  //                     .replace(/ /g, '')
  //     .split(',');
  //   console.log(rgb)
  //   const brightness = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
    
  //   // Determina si el color es claro o oscuro
  //   return brightness > 128;
  //}

  return (
<div style={{ position: 'relative' }}>
      <Blob />
      <p style={{ position: 'absolute', top: 200, left: 300, color: 'white', zIndex: 1 }}>Este texto cambiará de color</p>
      <p style={{ position: 'absolute', top: 100, left: 200, zIndex: 0, '::before': { content: '', position: 'absolute', top: -20, left: -20, right: -20, bottom: -20, backgroundColor: 'black' }}}>Este texto está dentro del Blob component</p>
    </div>
  );
}

export default TestColor;
