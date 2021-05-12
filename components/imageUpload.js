import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageUpload() {

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);


    };

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>
                To upload a cicada photo from you phone, just press the button below!
            </Text>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
      },
      button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
      },
})