// video.jsx

import React from 'react';
import PropTypes from 'prop-types';


export class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  render() {
    const {src, preview, isPlaying} = this.props;

    return <video
      src={preview}
      poster={`/img/${src}`}
      muted={true}
      loop={true}
      preload={`metadata`}
      width={280}
      height={175}
      autoPlay={isPlaying}

      ref={this._videoRef}
    ></video>;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}


Video.propTypes = {
  src: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
