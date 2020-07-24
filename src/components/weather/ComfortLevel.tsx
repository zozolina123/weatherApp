import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fontSize } from '../../styles/fontSize';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ComfortLevel = (props: any) => {
    return(
        <View>
            <Text style={[fontSize.large, {textAlign:'center'}]}>Comfort level</Text>
            <View style={styles.container}>
                <View style={styles.humidityInfo}>
                    <Text style={fontSize.mini}>Humidity</Text>
                    <AnimatedCircularProgress
                    size={120}
                    width={15}
                    fill={props.humidity}
                    tintColor="#0000bb"
                    backgroundColor="#ddd" 
                    >{
                        (fill) => (
                          <Text>
                            { props.humidity }%
                          </Text>
                        )
                      }
                    </AnimatedCircularProgress>
                </View>
                <View style={styles.realFeelInfo}>
                    <Text style={fontSize.mini}>Feels like: {props.feelsLike}&deg;{props.unit}</Text>
                    <Text style={fontSize.mini}>UV Index: {props.uvIndex}</Text>
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
    humidityInfo: {
        alignItems: 'center',
        padding: 20,
        width: '50%',
    },
    realFeelInfo: {
        justifyContent: 'center',
        width: '50%',
        padding: 20
    }
})

export default ComfortLevel