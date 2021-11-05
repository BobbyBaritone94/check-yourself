import * as React from 'react';
import {Text,View} from '../../components/Themed'
import { StyleSheet} from 'react-native';

type titleBoxProps = {
    title: string,
    subtitle: string
}

export const TitleBox = ({title, subtitle}: titleBoxProps) =>{
    return(
    <View style={styles.titleContainer}>
        <View style={styles.title2Container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    titleContainer:{
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 80,
        width: '90vw',
        padding:'10px',
        flex: 0.5,
        justifyContent: 'center'
    },
    title2Container:{
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    title:{
        fontFamily: 'Schoolbell',
        fontSize: 70,
        textDecorationLine: 'underline',
        textAlign: 'center',
        paddingHorizontal: '3%'

    },
    subtitle:{
        fontFamily: 'Schoolbell',
        fontSize: 30,
        textDecorationLine: 'underline',
        fontWeight: '300',
        textAlign: 'center'

    }
})