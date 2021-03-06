import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const TitleText = (props) => {
    return <Text style={[styles.text, props.size === "large" ? styles.large : styles.small]} { ...props }>{props.children}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: "#000",
        fontFamily: "ubuntu-bold",
    },
    large: {
        fontSize: Dimensions.get('window').width / 11,
        lineHeight: Dimensions.get('window').width / 11,
    },
    small: {
        fontSize: Dimensions.get('window').width / 11,
        lineHeight: Dimensions.get('window').width / 11,
    }
})

export default TitleText;