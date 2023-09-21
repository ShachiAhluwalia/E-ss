import React, { Component } from 'react';
import './FloatingButton.css'; // You can create a CSS file for styling

class FloatingButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isIframeVisible: false,
      };
    }
  
    toggleIframeVisibility = () => {
      this.setState((prevState) => ({
        isIframeVisible: !prevState.isIframeVisible,
      }));
    };
  
    render() {
      return (
        <div className="floating-button-container">
          <button className="floating-button" onClick={this.toggleIframeVisibility}>
            {this.state.isIframeVisible ? '-' : 'Chat With us'}
          </button>
          {this.state.isIframeVisible && (
            <iframe
              src="https://fxo.io/m/screen-and-8936"
              width="100%"
              height="600px"
              style={{ border: '3px solid #f9f9fb', width: '500px', height: '500px' }}
              allowFullScreen
            ></iframe>
          )}
        </div>
      );
    }
  }
  
export default FloatingButton

