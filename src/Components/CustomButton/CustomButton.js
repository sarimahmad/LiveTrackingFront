import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, bgColor, fgColor, type}) => {

    return(
        <Pressable 
            onPress={onPress}
             style={[
                styles.container,
                bgColor ? {backgroundColor: bgColor} : {},
              ]}>
            <Text 
                 style={[
                 styles.text,
                 fgColor ? {color: fgColor} : {},
                 ]}>
                    {text}
                    </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({

    container: {
        width: '80%',

        borderRadius: 35,

        padding: 15,
        marginVertical: 25,
        alignItems: 'center',
    },

    text:{
          fontWeight: 'bold',
          fontStyle: 'italic'
    },
});

export default CustomButton;