import React, { Component } from 'react';
import './expertsPannel.css';
import Slider from 'react-slick';
class expertsPannel extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
    };
    let { expertsData } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <p className="desc-heading"> Experts Pannel</p>
          </div>
        </div>
        <div className="col-md-12" style={{ marginTop: '2rem' }}>
          <div class="row">
            <div className="col-md-12">
              <Slider {...settings}>
                {expertsData &&
                  expertsData.map((value, index) => {
                    return (
                      <div key={value}>
                        <img
                          src={value.profilePic}
                          className="experts-image"
                          alt={value.expertName}
                        ></img>
                        <p className="experts-name">
                          {' '}
                          {value.title + value.expertName}
                        </p>
                        <p className="experts-degree"> {value.qualification}</p>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default expertsPannel;
