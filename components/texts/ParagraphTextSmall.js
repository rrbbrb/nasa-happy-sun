import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const ParagraphTextSmall = (props) => {
    return <Text style={[{...props.style}, styles.text, props.size === "large" ? styles.large : styles.small]} {...props}>{props.children}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: "#000",
    },
    large: {
        fontFamily: 'ubuntu-medium',
        fontSize: Dimensions.get('window').width / 26,
        lineHeight: Dimensions.get('window').width / 16,
    },
    small: {
        fontFamily: 'ubuntu',
        fontSize: Dimensions.get('window').width / 28,
        lineHeight: Dimensions.get('window').width / 16,
    },
})

export default ParagraphTextSmall;