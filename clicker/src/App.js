import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Board from "./components/Board";
import images from './image'

class App extends Component {

  state = {
    "message": "You wouldn't forget your friends, would you? Click an image to start",
    "score": 0,
    "images": images,
    "clicked": []
  };

  handleClickById = (imageId) => {
    let clicked = this.state.clicked.slice(0);

    // has this image been clicked before?
    if (clicked.findIndex(item => imageId === item) === -1){
      clicked.push(imageId);
      this.setState({
        "clicked": clicked,
        "score": this.state.score + 1,
        "message": "You are filled with determination."
      })
    } else {
      // game end/restart
      this.setState({
        "message": "Don't give up! You have to stay determined.",
        "score": 0,
        "clicked": []
      })
    }
    // image shuffler
    let images = this.state.images.slice(0);
    images.sort(() => Math.random() - 0.5);
    this.setState({images});
    console.log("clicked!")
  }


  render() {
    return (
      <div className="App">
        <Header 
        message={this.state.message}
        score={this.state.score}
        total={this.state.images.length} />
        <Board 
          images={this.state.images}
          clickHandler={this.handleClickById}
        />
      
      </div>
    );
  }
}

export default App;
