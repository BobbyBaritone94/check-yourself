import * as React from 'react';
import { StyleSheet,ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { TitleBox } from './Home_Comps/TitleBox';
import { LoginBox } from './Home_Comps/LoginBox';
import { Register } from './Home_Comps/Register';
import { ForgotLogin } from './Home_Comps/ForgotLogin';



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  //title component
  //login component
  //register / forgot login

  return (
      <View style={styles.container}>
        <ImageBackground style={styles.imageContainer} source = {require('../assets/images/comp-book-1.png')}>
          <TitleBox title='Check Yourself' subtitle="A Wellness App"/>
          <LoginBox/>
          <Register/>
          <ForgotLogin/>
            {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
            {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
        </ImageBackground>
      </View>
  
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
