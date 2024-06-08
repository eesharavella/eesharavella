import python from "../assets/img/python.svg";
import sql from "../assets/img/sql.svg";
import numpy from "../assets/img/numpy.svg";
import pandas from "../assets/img/pandas.svg";
import matplotlib from "../assets/img/matplotlib.svg";
import javascript from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import office365 from "../assets/img/office365.svg";
import tableau from "../assets/img/tableau.svg";
import powerbi from "../assets/img/powerbi.svg";
import github from "../assets/img/github.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Some of the skills that I have developed<br></br> and the technologies I've worked with so far</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={numpy} alt="Image" />
                                <h5>NumPy</h5>
                            </div>
                            <div className="item">
                                <img src={pandas} alt="Image" />
                                <h5>Pandas</h5>
                            </div>

                            <div className="item">
                                <img src={matplotlib} alt="Image" />
                                <h5>Matplotlib</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>

                            <div className="item">
                                <img src={office365} alt="Image" />
                                <h5>Office 365</h5>
                            </div>
                            <div className="item">
                                <img src={tableau} alt="Image" />
                                <h5>Tableau</h5>
                            </div>
                            <div className="item">
                                <img src={powerbi} alt="Image" />
                                <h5>Power BI</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h5>GitHub</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}