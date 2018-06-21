import React from 'react';
/**/
import './bubble.css';

const BUBBLE_POP_URL = 'http://soundbible.com/grab.php?id=2067&type=mp3';
const BUBBLE_INFLATE_URL = 'http://soundbible.com/grab.php?id=2044&type=mp3';

export class Bubble extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isPopped: props.isPopped};
  }

  componentWillReceiveProps(updatedProps) {
    this.setState({isPopped: updatedProps.isPopped});
  }

  render() {

    let activeState = this.state.isPopped ? 'bubble_popped' : 'bubble';

    return (
      <div
        className={`${activeState}`}
        onMouseDown={() => this.mouseDown()}
        onMouseUp={() => this.mouseUp()}
        onMouseOver={() => this.togglePopBubble()}
        style={{height: `${this.props.size}px`, width: `${this.props.size}px`}}>
      </div>
    );

  }

  mouseDown() {
    this.setState({isMouseDown: true});
  }

  mouseUp() {
    this.playAudio(BUBBLE_INFLATE_URL);
    this.setState({isMouseDown: false});
    this.setState({isPopped: false});
  }

  togglePopBubble() {

    if(this.state.isPopped) {
      return;
    }

    this.playAudio(BUBBLE_POP_URL);
    this.setState({isPopped: true});

  }

  playAudio(url) {
    let audio = new Audio(url);
    audio.play();
  }

}

