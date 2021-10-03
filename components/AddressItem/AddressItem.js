import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import ParagraphTextSmall from '../texts/ParagraphTextSmall';

const AddressItem = (props) => {
    return <TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={styles.container}>
        <View style={styles.icon}></View>
        <View style={styles.textContainer}>
            <ParagraphTextSmall size="large">
                Current location
            </ParagraphTextSmall>
            <ParagraphTextSmall size="small">
            106, Taipei City, Da’an District, Section 2, Xinsheng S Rd, 1號露天音樂表演臺
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