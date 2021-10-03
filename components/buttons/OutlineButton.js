import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors'

const OutlineButton = (props) => {
    return <TouchableOpacity activeOpacity={0.8} {...props} style={styles.button}>
        <View style={styles.button}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14 
    },
    text: {
        fontFamily: 'ubuntu',
        color: "#000",
        textTransform: "uppercase",
        fontSize: 14
    },
})

export default OutlineButton;