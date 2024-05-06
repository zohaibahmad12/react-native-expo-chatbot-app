import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
const { width, height } = Dimensions.get("window");
const HomeScreen = () => {
    return (
        <View style={styles.container}>
          <Text>Hello</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    mainheading: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#ffffff",
    },
    subHeading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: "#ffffff",
    },
    lottieContainer: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: "#0084ff",
        marginVertical: 6,
        padding: 10,
        width: width * 0.8,
        borderRadius: 10,
    },
    text: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
        color: "white",
    },
});

export default HomeScreen;
