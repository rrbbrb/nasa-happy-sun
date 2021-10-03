import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import AddressItem from '../components/AddressItem/AddressItem';
import FakeTextInputSearch from '../components/text-inputs/FakeTextInputSearch';
import ParagraphText from '../components/texts/ParagraphText';
import SubtitleText from '../components/texts/SubtitleText';
import TitleText from '../components/texts/TitleText';
import SafeAreaWrapper from '../components/wrappers/SafeAreaWrapper';

const LocationInputScreen = (props) => {
    return <SafeAreaWrapper>
        <Image source={require("../assets/TopArt.png")} style={styles.image} resizeMode="contain" />
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.title}>                
                    <TitleText size="large">Location</TitleText>
                </View>
                <ParagraphText size="small">Enter a place in order see how much sun that area gets.</ParagraphText>
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.input} onPress={() => props.navigation.navigate("SearchScreen")}>
                <FakeTextInputSearch placeholder="Enter new address" span="Search for a new location."/>
            </TouchableOpacity>
            <View style={styles.dataContainer}>
                <View>
                    <SubtitleText size="small">Previous address</SubtitleText>
                </View>
                <View style={styles.current}>
                    <AddressItem />
                </View>
                <View style={styles.recentContainer}>
                    <View style={styles.recent}><AddressItem /></View>
                    <View style={styles.recent}><AddressItem /></View>
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
        flex: 1
    },
    titleContainer: {
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    title: {
        marginBottom: 10
    },
    image: {
        width: "100%"
    },
    input: {
        marginVertical: 30
    },
    dataContainer: {
        marginTop: Dimensions.get('window').height * 0.03
    },
    current: {
        paddingVertical: 10
    },
    recentContainer: {
        paddingVertical: 6
    },
    recent: {
        paddingVertical: 3
    }
});

export default LocationInputScreen;