import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appHeader: {backgroundColor: 'transparent'},

  menuIcon: {
    fontSize: 36,
    color: 'white',
  },
  menuCard: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    color: 'white',
  },
  menuTitle: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
  },
  sweetScreen: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    marginBottom: 10,
    fontSize: 28,
    color: 'white',
  },
  complimentScreen: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  answerText: {
    marginBottom: 20,
    fontSize: 28,
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: 'transparent',
  },
  floatingHeartContainer: {
    flex: 3,
    paddingTop: 200,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  questionButton: {
    justifyContent: 'center',
    backgroundColor: '#bb497ac7',
  },
  inspirationButton: {
    marginTop: 100,
    justifyContent: 'center',
    backgroundColor: '#bb497ac7',
    marginBottom: 20,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    margin: 20,
    width: '90%',
  },
  separator: {
    height: 2,
    width: '80%',
    backgroundColor: 'white',
    marginBottom: 20,
  },
});

export default styles;
