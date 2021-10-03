import React from 'react';
import { TextInput, View, StyleSheet, Dimensions, Text } from 'react-native';

const TextInputLabel = (props) => {
    return <View>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
            multiline={props.size === "large" ? true : false}
            numberOfLines={props.size === "large" ? 4 : 1}
            style={[styles.input, props.size === "large" ? styles.topText : {}]}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            placeholderTextColor={"#8C8C8C"}
            autoFocus={props.autoFocus}
        />
    </View>
};

const styles = StyleSheet.create({
    input: {
        borderColor: "#8C8C8C",
        fontFamily: 'ubuntu',
        borderWidth: 1,
        borderRadius: 5,
        color: "#000",
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontSize: Dimensions.get("window").width / 27,
        lineHeight: Dimensions.get("window").width / 20,
    },
    topText: {
        textAlignVertical: "top"
    },
    label: {
        fontFamily: 'ubuntu',
        fontSize: Dimensions.get('window').width / 27,
        lineHeight: Dimensions.get('window').width / 18,
        color: "#343A40",
    }
})

export default TextInputLabel;