import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavigationStrings from '../../Constants/NavigationStrings';
import CustomButton from '../../Components/CustomButton/CustomButton';

const AVRecording = ({ navigation }) => {

    const onCameraPressed = () => {
     //   console.warn('onCameraPressed');

        navigation.navigate(NavigationStrings.CAMERA)

    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Text style={styles.title}>Video Recording SETUP</Text>

                <Text style={{ paddingBottom: 20 }}>This Feature allows you to start the video recording of Snatching Incident </Text>

                <CustomButton
                    text="Open Camera"
                    onPress={onCameraPressed}
                    bgColor="pink"
                    fgColor="black"
                />


                <View style={styles.container}>
                    <Text style={styles.text}>

                        Enable Recording <Text style={{ fontWeight: 'normal', color: 'grey' }}>Allow the App to start the audio/video recording
                            to click on this Open Camera Button
                        </Text>
                    </Text>


                </View>



                <View style={styles.container}>
                    <Text style={styles.text}>
                        Save To Storage<Text style={{ fontWeight: 'normal', color: 'grey' }}>     Save the recording in the internal storage of device</Text>
                    </Text>


                </View>

                <Text>_________________________________________________</Text>

                <Text style={{
                    fontStyle: "italic",
                    fontWeight: 'bold',
                    fontSize: 18,
                    paddingTop: 10,
                    paddingBottom: 10
                }}>Send Recording To</Text>

                <View style={styles.container}>
                    <Text style={styles.text}>
                        Email
                        <Text style={{ fontWeight: 'normal', color: 'grey' }}>                               [ammarchawla1811@gmail.com] </Text>
                    </Text>

                </View>

               


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 5,
        marginVertical: 5,

    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
        fontStyle: 'italic',
        paddingBottom: 40,

    },

    container: {

        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 40,
        paddingLeft: 40,
        paddingRight: 70,
        marginBottom: 20,
        marginTop: 20,


    },
    text: {

        fontStyle: "italic",
        fontWeight: 'bold',
        textAlign: 'center'

            },

});
export default AVRecording;