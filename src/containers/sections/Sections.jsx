import React from 'react';
import  {Component} from 'react';
import Sectionsui from './Sectionsui';
import './sections.css';



class Sections extends Component {
  render() {
    return(
      <div className="gpt3__whatgpt3 section__margin" >
      <div className="container-fluid d-flex justify-content-center">
      <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Partners</h1>
  
    </div>
      <div className="gpt3__whatgpt3-container">
        <div className="col-md-2">
          <Sectionsui/>
        </div>
        <div className="col-md-2">
          <Sectionsui/>
        </div>
        <div className="col-md-2">
          <Sectionsui/>
        </div>
      </div>
      </div>
  </div>
    )
  }
}
  

export default Sections;
