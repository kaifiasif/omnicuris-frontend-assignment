import React from 'react';
import Topbar from './components/Topbar/Topbar';
import MainPage from './containers/MainPage';
import 'video-react/dist/video-react.css'; // import css

function App() {
  return (
    <div className="App">
      <Topbar />
      <MainPage />
    </div>
  );
}

export default App;
