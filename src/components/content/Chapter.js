import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { config } from '../../containers/config';
import axios from 'axios';
class Chapter extends Component {
  state = {
    lessonDetails: [],
  };
  // Calling Module Details API to chapter details
  getModuleDetails = () => {
    let self = this;
    axios
      .get(`${config.moduleDetails}${this.props.moduleId}`, {
        headers: {
          'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f',
        },
      })
      .then(function (response) {
        // handle success
        self.setState({
          lessonDetails: response.data.lessonDetails[0].userChapterDetails,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.moduleId !== this.props.moduleId) {
      this.getModuleDetails();
    }
  }
  // Passing Video URL Props to Parent
  videoURL = (url) => {
    this.props.videoURL(url);
  };
  render() {
    let { lessonDetails } = this.state;
    let {
      moduleExpertsPic,
      moduleTitle,
      moduleName,
      moduleDuration,
    } = this.props;
    return (
      <div>
        {/* Popup Code  Starts Here ---->*/}
        <Modal
          show={this.props.showModal}
          id="lineModal"
          size="md"
          onHide={this.props.hideModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6 text-right">
                <button
                  type="button"
                  className="btn btn-close-m create-down"
                  style={{ marginTop: '-7px' }}
                  onClick={this.props.hideModal}
                >
                  {' '}
                  <i className="fa fa-close" aria-hidden="true" />
                </button>
              </div>
            </div>
            {/****** Code For Module Title ,Module  Name and Module Duration the values are being received from Content Page as Props   */}
            <div className="col-md-12 module card">
              <div className="module-items">
                <p className=" chapter-heading">
                  <img
                    src={moduleExpertsPic}
                    className="into"
                    alt="professor-img"
                  ></img>{' '}
                  <span className="text-left module-main-chapter-heading">
                    {moduleTitle} -
                  </span>
                  <span className="module-main-chapter-subheading">
                    {moduleName}{' '}
                  </span>
                  <small className="duration-timing">
                    <i class="fa fa-clock-o clock-icon" aria-hidden="true"></i>
                    <span className="duration-timiing"> {moduleDuration}</span>
                  </small>
                </p>
              </div>
              {/* **** Code to Display Chapters name and Chapters Content  the values are being received from Module Detail API   */}
              {lessonDetails &&
                lessonDetails.map((value, index) => {
                  index++;
                  return (
                    <div className="module-chapter card popup-card-bottom-spacing-20">
                      <div
                        className="card-body "
                        onClick={() => this.videoURL(value.content)}
                      >
                        <img
                          src={value.chapterExperts[0].profilePic}
                          className="into-chapter"
                          alt={value.chapterExperts[0].expertName}
                        ></img>
                        <span className="text-left module-popup-chapter-heading">
                          Chapter {index} -
                        </span>
                        <span className="module-popup-chapter-subheading">
                          {value.title}
                        </span>
                        <small className="duration-timing">
                          <i
                            class="fa fa-clock-o clock-icon"
                            aria-hidden="true"
                          ></i>
                          <span className="duration-timiing">
                            {' '}
                            {value.durationStr}
                          </span>
                        </small>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Modal.Body>
        </Modal>
        {/* Pop Code Ends Here*/}
      </div>
    );
  }
}

export default Chapter;
