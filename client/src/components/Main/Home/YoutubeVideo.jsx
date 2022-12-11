import React from "react";
import YouTube from "react-youtube"; // run npm i react-youtube
  
export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
        height: '300px',
        width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <div>
        <YouTube videoId="IgAnj6r1O48" 
            opts={opts} onReady={this._onReady} />
        <h3>GIVE A RIDE- Find Co-Travelers according to You.</h3>

      </div>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}