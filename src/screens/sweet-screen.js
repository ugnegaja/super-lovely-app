import React, {Component} from 'react';
import {Button, Text, View} from 'native-base';
import {TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import Video from 'react-native-video';
import {LOVELY_FRAZES} from '../constants/constants';
import FloatingHearts from 'react-native-floating-hearts';
import LinearGradient from 'react-native-linear-gradient';

export default class SweetScreen extends Component {
  static navigationOptions = {
    title: 'Kai tiesiog reikia meilės',
  };
  state = {
    currentFraze: '',
    count: 0,
    background: ['#ffffff00', '#ffffff00', '#ffffff00'],
  };

  randomSweetFraze = () => {
    const {count} = this.state;
    const {currentFraze} = this.state;
    for (var i = 0; i < LOVELY_FRAZES.length; i++) {
      const randomInspiration =
        LOVELY_FRAZES[Math.floor(Math.random() * LOVELY_FRAZES.length)];
      if (currentFraze != randomInspiration) {
        this.setState({
          currentFraze: randomInspiration,
          count: count + 3,
          background: ['#c88597bd', '#b98b9bbf', '#c88597bd'],
        });
      } else {
        continue;
      }
    }
  };

  render() {
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
          onPress={this.randomSweetFraze}
          style={styles.questionButton}>
          <Text style={styles.menuTitle}>Sužinoti</Text>
        </Button>
        <LinearGradient
          style={styles.linearGradient}
          colors={this.state.background}>
          <Text style={styles.answerText}>{this.state.currentFraze}</Text>
        </LinearGradient>
        <FloatingHearts count={count} color={'white'} />
      </TouchableOpacity>
    );
  }
}
