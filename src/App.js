import React from 'react';
// import logo from './logo.svg';
import './App.css';
import WaveSurfer from './WaveSurfer';
import dolImage from './dol.jpg';

function App() {
  return (
    <div className="App">

      <WaveSurfer/>

      <div className="two-column">  

        {/* <div> */}
          <img src={dolImage} className="track-art" /> 
        {/* </div> */}
        <div>
          <h1>"Down on Love"</h1>
          <h3>by Helios Hype</h3>
          <strong><a href="/dol.mp3" download="dol.mp3">mp3 download</a></strong><br/><br/>
          <hr/>
          <pre>
          I was thinking of the sun<br/>
          Just waiting for my little slice of pie <br/>
          Wondering where she’s gone today<br/>
          All I can remember’s yesterday<br/><br/>

          I was a dreamer down on love<br/>
          I was a dreamer down on love<br/>
          Just thinking bout something else tonight<br/>
          Just hoping for someone else tonight<br/><br/>

          When I’m thinking of the moon<br/>
          It makes my ladies wanna swoon<br/>
          Turn me round, start again<br/>
          It’s all left in the wind<br/><br/>

          I was a dreamer down on love<br/>
          I was a dreamer down on love<br/>
          Just thinking bout something else tonight<br/>
          Just hoping for someone else tonight<br/><br/>

          ‘Cause thinkin bout the sun will make you feel alright<br/>
          ‘Cause thinkin bout the sun will make you feel alright<br/>

          When I’m out there on the edge<br/>
          It makes me thankful fo be with you<br/>
          Taking in all that’s right<br/>
          It makes me love that morning light<br/><br/>

          I was a dreamer down on love<br/>
          I was a dreamer down on love<br/>
          Just thinking bout something else tonight<br/>
          Just hoping for someone else tonight<br/><br/>

          ‘Cause thinkin bout the sun will make you feel alright<br/>
          And thinkin bout the sun will make you feel alright <br/><br/>

          On and on and on and on<br/>
          On and on and on and on<br/><br/>

          It’s everything you want and everything you needed!<br/>
          It’s everything you want and anything you needed!<br/>
          It’s everything you want and everything you needed!<br/>
          It’s everything you want and everything you needed!
          </pre>
          <br/>
        </div>

      </div>
      
      
    </div>
  );
}

export default App;
