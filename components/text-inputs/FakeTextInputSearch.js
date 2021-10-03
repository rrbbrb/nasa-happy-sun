import React from 'react';
import { TextInput, View, StyleSheet, Dimensions, Text } from 'react-native';

const FakeTextInputSearch = (props) => {
    return <View>
        <View style={styles.input}>
            <Text style={styles.placeholder}>{props.placeholder}</Text>
        </View>
        {props.span ? <Text style={styles.span}>{props.span}</Text> : null}
    </View >
};

const styles = StyleSheet.create({
    input: {
        borderColor: "#8C8C8C",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 11,
        paddingHorizontal: 15,
    },
    placeholder: {
        fontFamily: 'ubuntu-medium',
        fontSize: Dimensions.get("window").width / 25,
        color: "#8C8C8C",
    },
    span: {
        fontFamily: 'ubuntu',
        fontSize: Dimensions.get('window').width / 32,
        lineHeight: Dimensions.get('window').width / 19,
        color: "#343A40",
        paddingLeft: 10
    }
})

export default FakeTextInputSearch;