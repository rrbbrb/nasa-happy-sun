import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const ParagraphText = (props) => {
    return <Text style={styles.text} { ...props }>{props.children}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: "#000",
        fontFamily: "ubuntu",
        fontSize: Dimensions.get('window').width / 22,
        lineHeight: Dimensions.get('window').width / 22,
    }
})

export default ParagraphText;