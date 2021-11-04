import * as React from 'react';
import { StyleSheet,ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return (
   
      <View style={styles.container}>
        <ImageBackground source = {require('../assets/images/comp-book-1.png')}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Check</Text>
            <Text style={styles.title}>Yourself</Text>
            <Text style={styles.subTitle}>A Wellness App</Text>
          </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
        </ImageBackground>
      </View>
  
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    borderColor: 'white',
    borderWidth: 8,
    borderRadius: 20,
    width: '70vw',
    flex: 0.5,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Schoolbell',
    fontSize: 50,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitle: {
    fontFamily: 'Schoolbell',
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
