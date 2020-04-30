import React, { Component } from 'react';
import Topic from '../components/Topic/Topic';
import Content from '../components/content/content';
import SubContent from '../components/subContent/subContent.js';
import ExpertsPannel from '../components/expertsPannel/expertsPannel';
import { config } from './config';
import axios from 'axios';
class MainPage extends Component {
  state = {
    discription: '',
    expertList: [],
    modulesData: [],
    moduleListData: [],
  };

  getModuleList = () => {
    let self = this;
    axios
      .get(`${config.moduleListURL}`, {
        headers: {
          'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f',
        },
      })
      .then(function (response) {
        // handle success
        self.setState({
          discription: response.data.courseDetails.description,
          modulesData: response.data.courseDetails.modules,
          moduleListData: response.data.courseDetails,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  expertsList = () => {
    let self = this;
    axios
      .get(`${config.expertsURL}`, {
        headers: {
          'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f',
        },
      })
      .then(function (response) {
        // handle success
        self.setState({ expertList: response.data.expertDetails });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  componentDidMount() {
    this.getModuleList();
    this.expertsList();
  }
  render() {
    let { moduleListData, modulesData, expertList, discription } = this.state;
    return (
      <div>
        <Topic moduleListData={moduleListData} />
        <Content moduleData={modulesData} moduleListData={moduleListData} />
        <SubContent discriptionText={discription} />
        <ExpertsPannel expertsData={expertList} />
      </div>
    );
  }
}

export default MainPage;
