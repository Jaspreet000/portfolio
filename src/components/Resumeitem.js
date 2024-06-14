import React from 'react'
import parse from 'html-react-parser';

const Resumeitem = ({icon,year,title,desc}) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>
      <div className="resume__daye">{year}</div>
      <div className="resume__subtitle">{parse(title)}</div>
      <div className="resume__description">{desc}</div>

    </div>
  )
}

export default Resumeitem