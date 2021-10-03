import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const ParagraphText = (props) => {
    return <Text style={[{...props.style}, styles.text, props.size === "large" ? styles.large : styles.small]} {...props}>{props.children}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: "#000",
        fontFamily: "ubuntu",
    },
    large: {
        fontSize: Dimensions.get('window').width / 22,
        lineHeight: Dimensions.get('window').width / 22,
    },
    small: {
        fontSize: Dimensions.get('window').width / 24,
        lineHeight: Dimensions.get('window').width / 17,
    },
})

export default ParagraphText;