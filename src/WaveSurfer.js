
import React from 'react';
// import WaveSurfer from 'wavesurfer.js';
// console.log(WaveSurfer.create);
 
class MyComponent extends React.Component {
  state = {
    wavesurfer: null,
    isPlaying: false
  };
  componentDidMount() {
    
    var wavesurfer = window.WaveSurfer.create({
      container: '#waveforms',
      waveColor: 'navy',
      progressColor: 'purple',
      barWidth: 2,
      height: 240,
      maxCanvasWidth: 300,
      scrollParent: true,
    });
    wavesurfer.load('dol.mp3');
    wavesurfer.on('finish', this.togglePlaying);
    // wavesurfer.on('ready', function () {
    //   wavesurfer.play();
    // });
    this.setState({ wavesurfer });

  }
  togglePlaying = () => {
    const { wavesurfer, isPlaying } = this.state;
    if (isPlaying) {
      wavesurfer.pause();
    } else {
      wavesurfer.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };
  render() {
    const { isPlaying } = this.state;
    return (
      <div className="ws-player">
        <button onClick={this.togglePlaying}>
          {isPlaying ? '| |' : ' ► '}
        </button>
        <div style={{ padding: '10px' }}>
          <div id="waveforms"></div>
        </div>
       
      </div>
    );
  }
}
export default MyComponent;