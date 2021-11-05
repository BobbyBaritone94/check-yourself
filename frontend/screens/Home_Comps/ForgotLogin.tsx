import * as React from 'react';
import {Text,View} from '../../components/Themed'
import { StyleSheet,TextInput,Button, TouchableOpacity} from 'react-native';

const textColor= '#4F4E4E';


const navigateToForgotLoginPage=()=>{
    console.log("Forgot login")
}

export const ForgotLogin = () =>{

    return(
            <TouchableOpacity
                style={styles.buttons}
                onPress={navigateToForgotLoginPage}
            >
                <Text style={styles.subtitle}>forgot login</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttons:{
        borderColor:textColor,
        borderRadius: 50,
        borderWidth: 3,
        width: '50%',
        backgroundColor:'white'

    },
    subtitle:{
        fontFamily: 'Schoolbell',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',

    }
})