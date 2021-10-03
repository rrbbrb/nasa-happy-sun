import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import AddressItem from '../components/AddressItem/AddressItem';
import TextInputSearch from '../components/text-inputs/TextInputSearch';
import TitleText from '../components/texts/TitleText';
import SafeAreaWrapper from '../components/wrappers/SafeAreaWrapper';
import axios from 'axios';

const SearchScreen = (props) => {
    const [userInput, setUserInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        let inputTimeOut;
        if(userInput) {
            inputTimeOut = setTimeout(() => {
                fetchGooglePlaces();
            }, 25)
        }
        return(() => {
            clearTimeout(inputTimeOut);
        })
    }, [userInput])

    const userInputHandler = (input) => {
        setUserInput(input);
    }

    const fetchGooglePlaces = () => {
        axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?language=en&input=${userInput}&inputtype=textquery&fields=formatted_address%2Cplace_id%2Cname%2Cgeometry&key=AIzaSyBB4D1FwaylNXLGK_-9ROpuLMQDbFK57ac`)
        .then((res) => {
            setSuggestions(res.data["candidates"]);
        })
        .catch((err) => {
            console.log(err)
        })
    }
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
                    value={userInput}
                    onChangeText={userInputHandler}
                />
            </View>
            <View>
                <FlatList
                    keyExtractor={(item, index) => item["place_id"]}
                    data={suggestions}
                    renderItem={item => <View activeOpacity={0.6} style={styles.address}>
                        <AddressItem
                            label={item.item["name"]}
                            address={item.item["formatted_address"]}
                            onPress={() => props.navigation.navigate("AddressInfoScreen", { location: {
                                address: `${item.item["name"]}, ${item.item["formatted_address"]}`,
                                lat: item.item["geometry"]["location"]["lat"],
                                lng: item.item["geometry"]["location"]["lng"]
                            } })}
                        />
                    </View>}
                />
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