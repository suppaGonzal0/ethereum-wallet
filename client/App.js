import { StyleSheet, Text, View } from 'react-native';
import Create from './Create';
import Import from './Import';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ethereum Wallet</Text>
      <View style={styles.bodyContainer}>
        <Create />
        <View style={styles.verticleLine}></View>
        <Import />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: "500",
    fontSize: "30px"
  },
  verticleLine: {
    height: '70%',
    width: 1,
    backgroundColor: '#909090'
  },
  bodyContainer: {
    display: 'flex',
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: '5%'
  }
});

export default App;