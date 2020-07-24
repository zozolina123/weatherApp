import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Linking } from 'expo';

const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={"Measure Unit: "+ props.unit}
          onPress={() => props.toggleUnit()}
        />
      </DrawerContentScrollView>
    );
  }

  export default CustomDrawerContent