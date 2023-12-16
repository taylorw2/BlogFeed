import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './conponents/MyButton';

function ExamplePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">Main Content</div>
        <div className="col-md-4">Sidebar</div>
      </div>
      <div className="row">
        <MyButton text="Click Me" variant="primary" />
      </div>
    </div>
  );
}

ReactDOM.render(<ExamplePage />, document.getElementById('root'));