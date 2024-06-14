import React, { useEffect, useState } from 'react'
import { themes } from '../data'
import Themesitem from './Themesitem'
import { FaCog } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import './themes.css'

const getStorageColor = () => {
  let color = 'hsl(252,35%,51%)';
  if(localStorage.getItem('color')){
    color = localStorage.getItem('color');
  }
  return color;
}

const getStorageTheme = () => {
  let Theme = 'light-theme';
  if(localStorage.getItem('color')){
    Theme = localStorage.getItem('port-theme');
  }
  return Theme;
}



const Themes = () => {
  const [showSwitcher, setshowSwitcher] = useState(false);
  const [color, setcolor] = useState(getStorageColor());

  const [Theme, setTheme] = useState(getStorageTheme());

  const changeColor = (color) => {
    setcolor(color);
  };

  const toggleTheme = () => {
    if(Theme === 'light-theme'){
      setTheme('dark-theme');
    }else{
      setTheme('light-theme');
    }
  
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--first-color', color);
    localStorage.setItem('color', color);
  },[color])

  useEffect(() => {
    document.documentElement.className = Theme;
    localStorage.setItem('port-theme', Theme);
  },[Theme])


  return (
    <div>
      <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
        <div className="style__switcher-toggler" onClick={()=>{
          setshowSwitcher(!showSwitcher)
        }}>
          <FaCog/>
        </div>

        <div className="theme__toggler">
          {Theme === 'light-theme' ? <BsMoon onClick={toggleTheme}/> : <BsSun onClick={toggleTheme}/>}
        </div>

        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme,index)=>{
            return(
              <Themesitem key={index}{...theme} changeColor={changeColor}/>
            )
          })}
        </div>

        <div className="style__switcher-close" onClick={()=>{
          setshowSwitcher(!showSwitcher)
        }}>&times;</div>
      </div>
    </div>

  );
}

export default Themes