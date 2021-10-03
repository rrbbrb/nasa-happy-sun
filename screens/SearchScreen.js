import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import AddressItem from '../components/AddressItem/AddressItem';
import TextInputSearch from '../components/text-inputs/TextInputSearch';
import SubtitleText from '../components/texts/SubtitleText';
import TitleText from '../components/texts/TitleText';
import SafeAreaWrapper from '../components/wrappers/SafeAreaWrapper';

const SearchScreen = (props) => {
    const [autoFocus, setAutoFocus] = useState(true);

    useEffect(() => {
        setAutoFocus(true);
    }, [autoFocus])

    return <SafeAreaWrapper>
        <Image source={require("../assets/TopArt.png")} style={styles.image} resizeMode="contain" />
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TitleText size="large">Searching</TitleText>
            </View>
            <View style={styles.input}>
                <TextInputSearch
                    placeholder="Enter new address"
                    span='Results for "search term"...'
                    autoFocus={autoFocus}
                    value=""
                />
            </View>
            <View>
                <View activeOpacity={0.6} style={styles.address}>
                    <AddressItem onPress={() => props.navigation.navigate("AddressInfoScreen")} />
                </View>
                <View activeOpacity={0.6} style={styles.address}>
                    <AddressItem />
                    </View>
            </View>
        </View>
    </SafeAreaWrapper>
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: Dimensions.get("window").width * 0.04,
        textAlign: 'left',
        alignSelf: 'flex-start',
        width: Dimensions.get("window").width - Dimensions.get("window").width * 0.08
    },
    titleContainer: {
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    image: {
        width: "100%"
    },
    input: {
        marginVertical: 20,
    },
    address: {
        paddingVertical: Dimensions.get('window').height * 0.018
    }
});

export default SearchScreen;