import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import ParagraphTextSmall from '../texts/ParagraphTextSmall';

const AddressItem = (props) => {
    return <TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={styles.container}>
        <View style={styles.icon}></View>
        <View style={styles.textContainer}>
            {props.label && <ParagraphTextSmall size="large">
                {props.label}
            </ParagraphTextSmall>}
            <ParagraphTextSmall size="small">
                {props.address}
            </ParagraphTextSmall>
        </View>
        <View style={styles.icon}></View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    icon: {
        flex: 1
    },
    textContainer: {
        flexDirection: 'column',
        flex: 6
    }
});

export default AddressItem;