import React, { useState } from "react";
import {
    Text,
    StyleSheet
} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1E1E1E',
        padding: 25,

    },
    
    
})

const loginScreen = () => {
    const [email, createEmail] = useState('');
    const [password, createPassword] = useState('');


const loginConditions = () => {

    if (!email || !password){
        alert('Please fill in the fields');
            return;
    }
}

return (
    <Text> Hello World </Text>
)
};