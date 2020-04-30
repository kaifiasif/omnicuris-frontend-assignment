import React, { Component } from 'react';
import './content.css';
import { Player, BigPlayButton } from 'video-react';
import Chapter from './Chapter';

class content extends Component {
  state = {
    showModal: false,
    showModalFlag: false,
    url: '',
  };
  hideModalFlag = () => {
    this.setState({ showModalFlag: false });
  };
  showModalFlag = (id, title, name, profilePic, duration) => {
    this.setState({
      showModalFlag: true,
      moduleId: id,
      moduleTitle: title,
      moduleName: name,
      moduleExpertsPic: profilePic,
      moduleDuration: duration,
    });
  };
  videoURL = (url) => {
    this.setState({ url: url, showModalFlag: false });
  };
  render() {
    console.log('Content Props', this.props);
    let { moduleData, moduleListData } = this.props;
    let { url } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="video-content">
              <Player src={url ? url : moduleListData.introVideo}>
                <BigPlayButton position="center" />
              </Player>
            </div>
          </div>
          <div className="col-md-4 module card">
            <div className="module-items" style={{ marginTop: '12px' }}>
              {moduleData &&
                moduleData.map((value, index) => {
                  return (
                    <div
                      key={value}
                      onClick={() =>
                        this.showModalFlag(
                          value.id,
                          value.title,
                          value.name,
                          value.moduleExperts[0].profilePic,
                          value.durationStr
                        )
                      }
                    >
                      <p className="card  chapter-heading">
                        <img
                          src={value.moduleExperts[0].profilePic}
                          className="into"
                          alt="professor-img"
                        ></img>{' '}
                        <span className="text-left">{value.title} - </span>
                        <span className="chapter-subheading">
                          {value.name}{' '}
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
                      </p>
                    </div>
                  );
                })}
            </div>
            <Chapter
              showModal={this.state.showModalFlag}
              moduleId={this.state.moduleId}
              moduleTitle={this.state.moduleTitle}
              moduleName={this.state.moduleName}
              moduleExpertsPic={this.state.moduleExpertsPic}
              moduleDuration={this.state.moduleDuration}
              hideModal={() => this.hideModalFlag()}
              videoURL={this.videoURL}
              // moduleData={this.props.moduleData}
            ></Chapter>
          </div>
        </div>
      </div>
    );
  }
}

export default content;
