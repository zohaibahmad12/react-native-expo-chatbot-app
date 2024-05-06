import React, { useState, useEffect, useRef, memo } from 'react';
import {
  View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image,
  Dimensions, ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");
const ChatList = ({ messages }) => {

  const renderMessage = ({ item }) => {
    return (
      <View style={[styles.messageContainer, item.isUser ? styles.userMessage : styles.otherMessage]}>
        {item.isUser && <Ionicons size={12} name='checkmark-done-circle' style={styles.tickIcon} color={'#0084ff'} />}
        <Text style={[styles.messageText, item.isUser ? styles.userText : styles.otherText]}>{item.text}</Text>
        <Text style={[styles.dateText, item.isUser ? styles.userDate : styles.otherDate]}>{item.time}</Text>
      </View>
    );
  };
console.log('chat rendered')
console.log(messages);
  return (
    <FlatList
      inverted={true}
      data={[...messages].reverse()}
      renderItem={renderMessage}
      keyExtractor={(item) => item.uid}
      contentContainerStyle={styles.chatContainer}

    />
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    paddingVertical: 10,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084ff',
    color: 'white  '
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F3F3F3',
  },
  messageText: {
    fontSize: 16,
  },
  tickIcon: {
    position: 'absolute', // Position the icon absolutely within the message container
    bottom: 2, // Align the icon to the bottom of the container
    right: -15, // Adjust the right position to move the icon to the bottom right corner

  },
  userText: {
    color: 'white'
  },
  dateText: {
    fontSize: 10.5,
  }
  , userDate: {
    color: 'white'
  },
  otherDate: {
    color: 'grey',
  }
});

export default memo(ChatList);
