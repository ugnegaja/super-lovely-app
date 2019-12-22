import React, {Component} from 'react';
import {Button, Text, View} from 'native-base';
import {ImageBackground} from 'react-native';
import styles from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/lib/connect/connect';
import randomInspirationPhrase from '../actions/random-inspiration-phrase';
import clearState from '../actions/clear-state';

class ComplimentScreen extends Component {
  componentWillUnmount() {
    const {clearState} = this.props;
    clearState();
  }

  render() {
    const {randomInspirationPhrase} = this.props;
    const {background} = this.props;
    const {currentInspirationPhrase} = this.props;
    const {currentInspirationImage} = this.props;
    return (
      <ImageBackground
        source={currentInspirationImage}
        style={styles.complimentScreen}
        onPress={randomInspirationPhrase}>
        <Button
          bordered
          light
          transparent
          rounded
          onPress={() => randomInspirationPhrase(currentInspirationPhrase)}
          style={styles.inspirationButton}>
          <Text style={styles.menuTitle}>Gauti įkvėpimo</Text>
        </Button>
        <View style={styles.separator} />
        <LinearGradient style={styles.linearGradient} colors={background}>
          <Text style={styles.answerText}>{currentInspirationPhrase}</Text>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

ComplimentScreen.propTypes = {
  randomInspirationPhrase: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  currentInspiration: PropTypes.shape({
    currentInspirationPhrase: PropTypes.string,
    background: PropTypes.arrayOf(PropTypes.string),
    currentInspirationImage: PropTypes.string,
  }),
};

const mapStateToProps = state => {
  const {currentInspiration} = state;
  return currentInspiration;
};

const mapDispatchToProps = dispatch => ({
  randomInspirationPhrase: bindActionCreators(
    randomInspirationPhrase,
    dispatch,
  ),
  clearState: bindActionCreators(clearState, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComplimentScreen);
