import React from 'react'
import './loader.scss';
import './loader.css';



function Loader() {


  return (

  <>

      <section>
        {/* <article> */}
          <div className="chart-container centerr">

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="12.5em" height="12.5em" viewBox="0 0 200 200" enableBackground="new 0 0 200 200" className="svg-loader">
                              <defs>
                                  <filter id="glow" x="-120%" y="-120%" width="400%" height="400%">
                                      <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
                                      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10"></feGaussianBlur>
                                      <feBlend in="SourceGraphic" in2="blurOut" mode="overlay"></feBlend>
                                  </filter>
                              </defs>
                              <g>
      
                                  <circle fill="none" cx="6.25em" cy="6.25em" r="5em" className=" gray" transform = "scale(.8, .8) translate(25 25)"/>
                                  <circle fill="none" cx="6.25em" cy="6.25em" r="5em" className="svg-loader_grow svg-loader_animate-color white" role="progressbar"  transform = "rotate(-89 100 100) scale(.8, .8) translate(25 25)" filter="url(#glow)"/>
                                  <circle fill="none" cx="6.25em" cy="6.25em" r="5em" className="svg-loader_grow svg-loader_animate-color reflect-x white" role="progressbar" transform = "rotate(-89 100 100) translate(0 200) scale(1, -1)" filter="url(#glow)"/>
                              </g>
                          </svg>
          </div>
        {/* </article> */}
      </section>


      </>
  )
}

export default Loader;