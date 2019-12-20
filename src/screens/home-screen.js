import React, {Component} from 'react';
import {Linking, Platform} from 'react-native';
import {
  ANDROID_PHONE_NUMBER,
  CALL_IMAGE,
  COMPLIMENT_IMAGE,
  IOS_PHONE_NUMBER,
  SWEET_IMAGE,
} from '../constants/constants';
import MenuCard from '../components/menu-card';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Mieliausia aplikacija pasaulyje',
    headerTitleStyle: {
      textAlign: 'center',
      width: '100%',
    },
  };

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = ANDROID_PHONE_NUMBER;
    } else {
      phoneNumber = IOS_PHONE_NUMBER;
    }
    Linking.openURL(phoneNumber);
  };

  navigateSweet = () => {
    const {navigate} = this.props.navigation;
    return navigate('Sweet');
  };

  navigateCompliment = () => {
    const {navigate} = this.props.navigation;
    return navigate('Compliment');
  };

  mainMenu = [
    {
      onPress: this.navigateSweet.bind(this),
      iconName: 'heart',
      iconType: 'FontAwesome5',
      titleText: 'Meilė čia',
      image: SWEET_IMAGE,
    },
    {
      onPress: this.navigateCompliment.bind(this),
      iconName: 'wind',
      iconType: 'FontAwesome5',
      titleText: 'Įkvėpimas čia',
      image: COMPLIMENT_IMAGE,
    },
    {
      onPress: this.dialCall.bind(this),
      iconName: 'phone',
      iconType: 'FontAwesome5',
      titleText: 'Noriu pakalbėti',
      image: CALL_IMAGE,
    },
  ];

  render() {
    return (
      <>
        {this.mainMenu.map((itemProps, index) => {
          const params = {index, ...itemProps};
          return new MenuCard(params);
        })}
      </>
    );
  }
}
