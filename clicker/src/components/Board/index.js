import React from 'react';


function Board(props) {
    return <div class="container">
      <div id="board">
        {props.images.map(image => (
          <><img src={image.url} alt="test" className="image" id={"image-" + image} key={image.index} onClick={() => {props.clickHandler(image.index)}} ></img>
          </>

        ))}
    </div>
    </div>
  }
  
  export default Board;