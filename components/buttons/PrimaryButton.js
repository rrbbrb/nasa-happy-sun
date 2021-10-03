import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors'

const PrimaryButton = (props) => {
    return <TouchableOpacity activeOpacity={0.8} {...props} style={[styles.button, props.size === "large" ? styles.large : styles.small]}>
        <View style={styles.button}>
            <Text style={[styles.text, props.size === "large" ? styles.largeText : styles.smallText]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    large: {
        paddingVertical: Dimensions.get('window').width / 20,
        paddingHorizontal: Dimensions.get('window').width / 6.5,
        borderRadius: 8,
    },
    small: {
        paddingVertical: Dimensions.get('window').width / 36,
        borderRadius: 4
    },
    text: {
        fontFamily: 'ubuntu-medium',
        color: "#FFF",
    },
    largeText: {
        fontSize: 20
    },
    smallText: {
        fontSize: 15
    }
})

export default PrimaryButton;