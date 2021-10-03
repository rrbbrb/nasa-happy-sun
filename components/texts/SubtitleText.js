import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const SubtitleText = (props) => {
    return <Text style={[styles.text, props.size === "large" ? styles.large : styles.small]} { ...props }>{props.children}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: "#000",
        fontFamily: "ubuntu-medium",
    },
    large: {
        fontSize: Dimensions.get('window').width / 18,
        lineHeight: Dimensions.get('window').width / 20,
    },
    small: {
        fontSize: Dimensions.get('window').width / 18,
        lineHeight: Dimensions.get('window').width / 20,
    }
})

export default SubtitleText;