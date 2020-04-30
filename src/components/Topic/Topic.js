import React, { Component } from 'react';
import './Topic.css';
class Topic extends Component {
  state = {};
  render() {
    let { moduleListData } = this.props;
    return (
      <div className="container" style={{ marginTop: '0.8rem' }}>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <p className="topic-text">
                {' '}
                {moduleListData.name + '' + ':'}{' '}
                <span className="module-text"> Introduction </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topic;
