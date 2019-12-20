import React, {Component} from 'react';
import {Button, Text, View} from 'native-base';
import {ImageBackground} from 'react-native';
import styles from '../styles/styles';
import {COMPLIMENT_IMAGE, INSPIRE_FRAZES} from '../constants/constants';
import LinearGradient from 'react-native-linear-gradient';

export default class ComplimentScreen extends Component {
  state = {
    currentFraze: '',
    currentImage: COMPLIMENT_IMAGE,
    background: ['#ffffff00', '#ffffff00', '#ffffff00'],
  };

  randomSweetFraze = () => {
    const {currentFraze} = this.state;
    for (var i = 0; i < INSPIRE_FRAZES.length; i++) {
      const randomInspiration =
        INSPIRE_FRAZES[Math.floor(Math.random() * INSPIRE_FRAZES.length)];

      if (currentFraze != randomInspiration.fraze) {
        this.setState({
          currentFraze: randomInspiration.fraze,
          currentImage: randomInspiration.image,
          background: ['#c88597bd', '#b98b9bbf', '#c88597bd'],
        });
        break;
      } else {
        continue;
      }
    }
  };

  render() {
    return (
      <ImageBackground
        source={this.state.currentImage}
        style={styles.complimentScreen}
        onPress={this.randomSweetFraze}>
        <Button
          bordered
          light
          transparent
          rounded
          onPress={this.randomSweetFraze}
          style={styles.inspirationButton}>
          <Text style={styles.menuTitle}>Gauti įkvėpimo</Text>
        </Button>
        <View style={styles.separator} />
        <LinearGradient
          style={styles.linearGradient}
          colors={this.state.background}>
          <Text style={styles.answerText}>{this.state.currentFraze}</Text>
        </LinearGradient>
      </ImageBackground>
    );
  }
}
