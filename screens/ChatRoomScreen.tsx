import React from "react";
import {FlatList, Text, ImageBackground} from "react-native";

import { useRoute } from '@react-navigation/native';
import ChatMessage from "../components/ChatMessage";
import chatRoomData from '../data/Chats';
import InputBox from "../components/InputBox";

const BG = require('../assets/images/BG.png');

const ChatRoomScreen = () => {

    const route = useRoute();

    return (
        <ImageBackground style={{width: '100%', height: '100%' }} source={BG}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />

            <InputBox />

        </ImageBackground>
    )
}

export default ChatRoomScreen;
