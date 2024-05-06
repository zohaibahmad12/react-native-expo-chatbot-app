import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get("window");
import getCurrentTime from '../../utils/CurrentTime';
import generateUniqueId from '../../utils/UniqueIdentity';
import * as GoogleGenerativeAI from '@google/generative-ai';
const ChatInput = ({ addMessage, loading, setLoading }) => {
    const API_KEY = 'AIzaSyCBav1Ajj66OMmoeZYfLvvRXftQ7juK8Jw'
    const [text, setText] = useState('');

    const sendMessage = async () => {
        setLoading(true)
        const prompt = text
        const newMessage = {
            text,
            isUser: true,
            time: getCurrentTime(),
            uid: generateUniqueId()
        }
        addMessage(newMessage)
        setText('')

        const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY)
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
        const result = await model.generateContent(prompt)
        const response = result.response
        const chatbotText = response.text()
        const chatbotMessage = {
            text: chatbotText,
            isUser: false,
            time: getCurrentTime(),
            uid: generateUniqueId()
        }
        addMessage(chatbotMessage)
        setLoading(false)
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                value={text}
                onChangeText={(value) => setText(value)}
                placeholder="Type a message..."
                multiline
            />
            <TouchableOpacity style={[ styles.sendButton, loading && styles.buttonDisabled, (text.trim()=='') && styles.buttonDisabled]} onPress={sendMessage} disabled={loading}>
                <Ionicons name="send" size={24} color="white" />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
        padding: 10,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#0084ff',
        borderRadius: 20,
        padding: 10,
    },
    buttonDisabled: {
        backgroundColor: 'lightgrey',
     
    },
    activityIndicatorContainer: {

    }
});

export default ChatInput;
