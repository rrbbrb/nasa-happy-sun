import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';

const SafeAreaWrapper = (props) => (
    <SafeAreaView style={{ ...props.style }, { ...styles.wrapper }}>
        {props.children}
    </SafeAreaView>
);

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        minHeight: Dimensions.get('window').height,
    }
})

export default SafeAreaWrapper;