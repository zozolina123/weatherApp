import React from 'react';
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderLeft = (props: any) => {
    const navigation = useNavigation();
    return (
        props.isDrawerOpen ?
        null
        :
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            props.toggleDrawer(!props.isDrawerOpen)
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <Image 
            style={{ width: 50, height: 50 }}
            source={require('../../../assets/drawer.png')} />
        </TouchableOpacity>
      </View>
    );
  };

  export default HeaderLeft