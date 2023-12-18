import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navigation from './componenets/navigation/Navigation';
import MainContent from './componenets/main_content/main_content';
import Sidebar from './componenets/side_bar/side_bar';

import React from 'react';
import ReactDOM from 'react-dom';

function ExamplePage() {
  return (
    <div className="flex-container">
      <div className='navigation-container'> 
        <Navigation />
      </div>
      <div className='main-content'>
        <MainContent />
      </div>
      <div className='sidebar'>
        <Sidebar />
      </div>
      
    </div>
  );
}

ReactDOM.render(<ExamplePage />, document.getElementById('root'));