import React from 'react';
import {Button, Card, Icon, Text} from 'native-base';
import PropTypes from 'prop-types';
import {ImageBackground} from 'react-native';
import styles from '../styles/styles';

const MenuCard = ({onPress, titleText, iconName, iconType, image, key}) => (
  <Card style={{flex: 2}} key={key}>
    <ImageBackground source={image} style={styles.menuCard}>
      <Button style={styles.menuButton} transparent onPress={onPress}>
        <Icon style={styles.menuIcon} name={iconName} type={iconType} />
        <Text style={styles.menuTitle}>{titleText}</Text>
      </Button>
    </ImageBackground>
  </Card>
);
MenuCard.propTypes = {
  onPress: PropTypes.func,
  titleText: PropTypes.string,
  iconType: PropTypes.string,
  iconName: PropTypes.string,
  image: PropTypes.string,
  key: PropTypes.number,
};
MenuCard.defaultProps = {
  onPress: () => {},
  titleText: '',
  iconType: '',
  iconName: 'heart',
  image: '',
  key: 1000000 * Math.random(),
};

export default MenuCard;
