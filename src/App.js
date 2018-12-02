import React, { Component } from 'react';
import './App.css';
import ContactForm from './NewForm';

import { connect } from 'react-redux'

class App extends Component {
  render() {   
    return (
      <div className="App">
        <h1>Counter</h1>
        <div>
          <h2>{this.props.a}</h2>
          <h2>{this.props.b}</h2>
        </div>
        <div>
          <button onClick={this.props.onAgeUp}>Increase</button>
          <button onClick={this.props.onAgeDown}>Decrease</button>
        </div><br/>
        <ContactForm onSubmit={this.submit}/>
      </div>
    );
  }
}

// submit -> you can put inside or outside the form
//handleSubmit is prop used in NewForm component but we pass onSubmit because handleSubmit is something redux-form uses to update the redux state and know ur done submiting the form
// If you want values of the form you need to pass an onSubmit prop

const mapStateToProps = (state) => {
  return {
    a: state.addA.a,
    b: state.subB.b,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'ADD'}),
    onAgeDown: () => dispatch({type: 'SUBTRACT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
