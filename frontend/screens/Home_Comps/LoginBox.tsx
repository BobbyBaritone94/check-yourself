import * as React from 'react';
import {Text,View} from '../../components/Themed'
import { StyleSheet,TextInput,Button, TouchableOpacity} from 'react-native';

const textColor= '#4F4E4E';


const submitCredentials=()=>{
    console.log("loging in")
}

export const LoginBox = () =>{

    // const [userInput,onChangeUserInput] = React.useState("")
    // const [password,onChangePassword] = React.useState("")

    return(
    <View style={styles.container}>
        <View style={styles.title2Container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.subtitle}
                    placeholder="user"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.subtitle}
                    placeholder="password"
                />
            </View>
            <TouchableOpacity
                style={styles.buttons}
                onPress={submitCredentials}
            >
                <Text style={styles.subtitle}>login</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    title2Container:{
        borderColor: textColor,
        borderWidth: 3,
        borderRadius: 60,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: '90%'
    },
    buttons:{
        borderColor:textColor,
        borderRadius: 50,
        borderWidth: 3,
        width: '50%'

    },
    container:{
        borderColor: textColor,
        borderWidth: 3,
        borderRadius: 60,
        width: '70vw',
        paddingVertical: '10px',
        flex: 0.3,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title:{
        fontFamily: 'Schoolbell',
        fontSize: 50,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        textAlign: 'center'

    },
    inputContainer:{
        borderBottomWidth:2,
        width:'60%',
        borderBottomColor: textColor
    },
    subtitle:{
        fontFamily: 'Schoolbell',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',

    }
})