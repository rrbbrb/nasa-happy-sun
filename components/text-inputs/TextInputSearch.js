import React from 'react';
import { TextInput, View, StyleSheet, Dimensions, Text, Keyboard } from 'react-native';

const TextInputSearch = (props) => {
    return <View>
        <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            placeholderTextColor={"#8C8C8C"}
            autoFocus={props.autoFocus}
        />
        {props.span ? <Text style={styles.span}>{props.span}</Text> : null}
    </View>
};

const styles = StyleSheet.create({
    input: {
        borderColor: "#8C8C8C",
        fontFamily: 'ubuntu-medium',
        borderWidth: 1,
        borderRadius: 5,
        color: "#000",
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontSize: Dimensions.get("window").width / 25
    },
    span: {
        fontFamily: 'ubuntu',
        fontSize: Dimensions.get('window').width / 32,
        lineHeight: Dimensions.get('window').width / 19,
        color: "#343A40",
        paddingLeft: 10 
    }
})

export default TextInputSearch;