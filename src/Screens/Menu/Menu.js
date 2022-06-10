import React from 'react';
import { View, Text, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import NavigationStrings from '../../Constants/NavigationStrings';

import imagePath from '../../Constants/imagePath';


function Menu(props) {
    const { navigation } = props
    return (
        <DrawerContentScrollView style={{
            backgroundColor: ''
        }} {...props}>

            <View style={{ backgroundColor: '', alignItems: 'center', paddingVertical: 24 }}>

                <Image
                    style={{height: 200,
                            width: 200,
                           marginTop: 10,
                           }}
                    source={require('../../../assets/Images/logo.png')}
                     />

            </View>

            <DrawerItem
                label="Home"
                onPress={() => navigation.navigate(NavigationStrings.HOME)}
                icon={() => <Image source={imagePath.icHome} />}
                labelStyle={{ color: 'black', fontWeight: '200',  fontSize: 20 }}
            />
            <DrawerItem
                label="Profile"
                onPress={() => navigation.navigate(NavigationStrings.PROFILE)}
                icon={() => <Image source={imagePath.icProfile} />}
                labelStyle={{ color: 'black', fontWeight: '200',  fontSize: 20 }}
            />
            <DrawerItem
                label="Help"
                onPress={() => alert('Tell me! How can I Help You')}
                icon={() => <Image source={imagePath.icHelp} />}
                labelStyle={{ color: 'black', fontWeight: '200',  fontSize: 20 }}
            />
            <DrawerItem
                label="Settings"
                onPress={() => alert('Go and Check your Mobile Settings')}
                icon={() => <Image source={imagePath.icSettings} />}
                labelStyle={{ color: 'black', fontWeight: '200',  fontSize: 20 }}
            />
            <DrawerItem
                label="Report"
                onPress={() => alert('Report About this Application, If this Application not working properly')}
                icon={() => <Image source={imagePath.icReport} />}
                labelStyle={{ color: 'black', fontWeight: '200',  fontSize: 20 }}
            />
            <DrawerItem
                label="Log Out"
                onPress={() => navigation.navigate(NavigationStrings.WELCOME)}
                icon={() => <Image source={imagePath.icLogOut} />}
                labelStyle={{ color: 'black', fontWeight: '200',  fontSize: 20 }}
            />
        </DrawerContentScrollView>
    );
}

export default Menu;