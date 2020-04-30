import React, { Component } from 'react';

import './subContent.css';
class subContent extends Component {
  state = {};
  render() {
    const { discriptionText } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8" style={{ marginTop: '2rem' }}>
            <p className="desc-heading"> Description</p>
            <p className="desc-content">{discriptionText}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default subContent;
