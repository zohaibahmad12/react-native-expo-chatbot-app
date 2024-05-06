import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import Lottie from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");
const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.lottieContainer}>
                <Lottie style={{ width: width * 0.9, height: height * 0.4 }}
                    source={require("../assets/Animations/main.json")}
                    autoPlay
                    loop
                />
                <Text style={styles.mainheading}>CHATBOT</Text>
                <Text style={styles.subHeading}>Made to be Helpful</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ChatbotScreen')}>
                <View style={styles.button}>
                    <Text style={styles.text}>Start Chat</Text>
                </View>
            </TouchableOpacity>
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
