import React, { useEffect, useState } from 'react';
import { View, StyleSheet} from 'react-native';
import TopContainer from '../components/ChatbotScreenComponents/TopContainer';
import ChatList from '../components/ChatbotScreenComponents/ChatList';
import ChatInput from '../components/ChatbotScreenComponents/ChatInput';
import getCurrentTime from '../utils/CurrentTime';
import generateUniqueId from '../utils/UniqueIdentity';
const ChatbotScreen = () => {
    const [messages, setMessages] = useState([])
    const addMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
    useEffect(() => {
        const newMessage = {
            text: 'Hello! How may I assist you today?',
            isUser: false,
            time: getCurrentTime(),
            uid:generateUniqueId()
        }
        addMessage(newMessage)
    },[])
    return (
        <View style={styles.container}>
            <TopContainer />
            <ChatList messages={messages} />
            <ChatInput addMessage={addMessage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default ChatbotScreen;
