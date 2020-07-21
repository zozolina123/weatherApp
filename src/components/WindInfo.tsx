import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { fontSize } from '../styles/fontSize';

const WindInfo = (props: any) => {
    return (
        <View>
            <Text style={[fontSize.large,{textAlign:'center'}]}>Wind</Text>
            <View style={styles.container}>
                <View style={styles.gifAnimation}>
                    <Image
                        style={{width: 125,height:125}}
                        source={require('../../assets/wind.png')}
                    />
                </View>
                <View style={styles.windInfo}>
                    <Text style={fontSize.mini}>Direction: {props.windDirection}</Text>
                    <Text style={fontSize.mini}>Speed: {props.windSpeed} m/s</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexWrap: 'nowrap',
        flexDirection: 'row',
        textAlign: 'center',
    },
    gifAnimation: {
        padding: 20,
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    windInfo: {
        justifyContent: 'center',
        width: '50%',
        padding: 20
    }
})

export default WindInfo