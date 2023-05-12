import { useEffect } from 'react';
import './testColor.css';
import Blob from '../components/Blob';

function TestColor() {
  useEffect(() => {
    const element = document.getElementById('background-element');
    console.log("element", element)
    const computedStyles = window.getComputedStyle(element);
    console.log("computedStyles", computedStyles)
    const backgroundColor = computedStyles.webkitBorderStartColor;
    console.log("backgroundColor",backgroundColor)

    const textColor = isColorLight(backgroundColor) ? 'black' : 'white';
    console.log(textColor)
    const textElements = document.getElementsByClassName('color-change');
    console.log(textElements)
    Array.from(textElements).forEach(element => {
      element.style.color = textColor;
    });
  }, []);

  function isColorLight(color) {
    // Convierte el color a RGB
    const rgb = color.substring(4, color.length-1)
                      .replace(/ /g, '')
      .split(',');
    console.log(rgb)
    const brightness = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
    
    // Determina si el color es claro o oscuro
    return brightness > 128;
  }

  return (
    <div>
        <Blob />
        <p className="color-change" style={{color: "white"}}>Este texto cambiará de color</p>
    </div>
  );
}

export default TestColor;
