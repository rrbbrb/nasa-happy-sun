import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors'

const PrimaryButton = (props) => {
    return <TouchableOpacity activeOpacity={0.8} {...props} style={styles.button}>
        <View style={styles.button}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.PRIMARY_COLOR,
        paddingVertical: Dimensions.get('window').width / 40,
        paddingHorizontal: Dimensions.get('window').width / 13,
        borderRadius: 8
    },
    text: {
        fontFamily: 'ubuntu-medium',
        color: "#FFF",
        fontSize: 20
    }
})

export default PrimaryButton;