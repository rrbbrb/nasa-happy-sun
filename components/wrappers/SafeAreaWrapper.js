import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

const SafeAreaWrapper = (props) => (
    <ScrollView>
        <SafeAreaView style={{ ...props.style }, { ...styles.wrapper }}>
            {props.children}
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        minHeight: Dimensions.get('window').height,
    },
})

export default SafeAreaWrapper;