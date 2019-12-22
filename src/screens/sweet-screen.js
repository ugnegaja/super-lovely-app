import React, {Component} from 'react';
import {Button, Text, View} from 'native-base';
import {TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import Video from 'react-native-video';
import FloatingHearts from 'react-native-floating-hearts';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/lib/connect/connect';
import randomSweetPhrase from '../actions/random-sweet-phrase';
import clearState from '../actions/clear-state';

class SweetScreen extends Component {
  static navigationOptions = {
    title: 'Kai tiesiog reikia meilės',
  };
  state = {
    count: 0,
  };

  componentWillUnmount() {
    const {clearState} = this.props;
    clearState();
  }

  render() {
    const {randomSweetPhrase} = this.props;
    const {background} = this.props;
    const {currentSweetPhrase} = this.props;
    const {count} = this.state;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.floatingHeartContainer}
        onPress={() => this.setState({count: count + 1})}>
        <Video
          source={require('../assets/video/background.mp4')}
          ref={ref => {
            this.player = ref;
          }}
          onBuffer={this.onBuffer}
          style={styles.backgroundVideo}
          repeat={true}
        />
        <Text style={styles.questionText}>Kiek Ugnė jus myli?</Text>
        <View style={styles.separator} />
        <Button
          bordered
          light
          transparent
          rounded
          onPress={() => {
            randomSweetPhrase(currentSweetPhrase);
            this.setState({count: count + 3});
          }}
          style={styles.questionButton}>
          <Text style={styles.menuTitle}>Sužinoti</Text>
        </Button>
        <LinearGradient style={styles.linearGradient} colors={background}>
          <Text style={styles.answerText}>{currentSweetPhrase}</Text>
        </LinearGradient>
        <FloatingHearts count={count} color={'white'} />
      </TouchableOpacity>
    );
  }
}

SweetScreen.propTypes = {
  randomSweetPhrase: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  currentPhrase: PropTypes.shape({
    currentSweetPhrase: PropTypes.string,
    background: PropTypes.arrayOf(PropTypes.string),
  }),
};

const mapStateToProps = state => {
  const {currentPhrase} = state;
  return currentPhrase;
};

const mapDispatchToProps = dispatch => ({
  randomSweetPhrase: bindActionCreators(randomSweetPhrase, dispatch),
  clearState: bindActionCreators(clearState, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SweetScreen);
