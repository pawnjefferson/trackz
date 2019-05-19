
import React from 'react';
import WavePlayer from 'waveplayer';

 
class WaveForm extends React.Component {
  componentDidMount() {
    var wavePlayer = new WavePlayer({
      container: '#waveform',
      barWidth: 4,
      barGap: 1,
      height: 128
    });
    wavePlayer.load('/white.mp3')
      .then(() => {
        console.log('loaded')
        wavePlayer.play()
      });
  }
  render() {
    return (
      <div id="waveform"></div>
    );
  }
}
export default WaveForm;