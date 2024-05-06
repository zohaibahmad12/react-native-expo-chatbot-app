import React, { useState, useEffect, useRef, memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get("window");
const TopContainer = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.goBackButton} onPress={() => { }}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.userInfo}>
                {/* <Image style={styles.profileImage}
                    source={
                        route.params.user.profilePictureUrl
                            ? { uri: route.params.user.profilePictureUrl }
                            : require("../assets/UserProfile/profilePicture.webp")
                    }
                /> */}
                <Text style={styles.userName}>Chatbot AI</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginTop: 30

    },
    goBackButton: {
        marginRight: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TopContainer
