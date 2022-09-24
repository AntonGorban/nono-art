import React from 'react';
import { SharePresentation } from './SharePresentation';
import { connect } from 'react-redux';
import axios from 'axios';

class ShareContainer extends React.Component {
  state = {
    message: '',
  };

  sendData = async () => {
    try {
      const res = await axios.post('https://nono-art-server.herokuapp.com/api/level/sharing', {
        name: this.props.name,
        colors: this.props.colors,
        art: this.props.art,
      });
      this.setState({
        message: res.data.message,
      });
    } catch (error) {
      this.setState({
        message: error.response.data.message,
      });
    }
  };

  render() {
    return (
      <SharePresentation
        message={this.state.message}
        sendData={this.sendData}
        level={JSON.stringify({
          name: this.props.name,
          colors: this.props.colors,
          art: this.props.art,
        })}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.designer.name,
  colors: state.designer.colors,
  art: state.designer.art,
});

const mapDispatchToProps = (dispatch) => ({});

export const Share = connect(mapStateToProps, mapDispatchToProps)(ShareContainer);
