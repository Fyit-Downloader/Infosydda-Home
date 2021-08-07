import React from "react";
import { YoutubePlayer } from "reactjs-media";

const Gallery1 = () => {
  return (
    <div id="gallery1">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div classNmae="yt-place">
              <YoutubePlayer
                src="https://youtu.be/UZCO5k1Nu70" // Reqiured
                allowFullScreen
                height={320}
                width={500}
              />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="gallery1-text">
              <h2>Our Success Keys</h2>
              <br />
              <h4><li>Determination</li></h4>
              <h4><li>Skill</li></h4>
              <h4><li>Passion</li></h4>
              <h4><li>Descipline</li></h4>
              <h4><li>Luck</li></h4>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Gallery1;