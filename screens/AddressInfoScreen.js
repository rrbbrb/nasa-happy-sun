import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text } from 'react-native';
import OutlineButton from '../components/buttons/OutlineButton';
import PrimaryButton from '../components/buttons/PrimaryButton';
import TextInputLabel from '../components/text-inputs/TextInputLabel';
import TitleText from '../components/texts/TitleText';
import SafeAreaWrapper from '../components/wrappers/SafeAreaWrapper';

const AddressInfoScreen = (props) => {
    return <SafeAreaWrapper>
        <Image source={require("../assets/TopArt.png")} style={styles.image} resizeMode="contain" />
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TitleText size="large">Address Info</TitleText>
            </View>
            <View style={styles.map}>
                <Image style={{height: 200}} source={{uri: `https://maps.googleapis.com/maps/api/staticmap?center=${props.route.params.location.lat.toString()},${props.route.params.location.lng.toString()}&zoom=16&size=600x400&maptype=roadmap&markers=size:large%7Ccolor:red%7C:A%7C${props.route.params.location.lat.toString()},${props.route.params.location.lng.toString()}&key=AIzaSyBB4D1FwaylNXLGK_-9ROpuLMQDbFK57ac`}} />
            </View>
            <View style={styles.input}>
                <View style={styles.inputContainer}>
                    <TextInputLabel
                        placeholder="Enter new address"
                        label='Address'
                        value={props.route.params.location.address}
                        size="large"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInputLabel
                        placeholder="Enter Latitude"
                        label='Latitude (ex: 25.030035)'
                        value={props.route.params.location.lat.toString()}
                        size="small"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInputLabel
                        placeholder="Enter Longitude"
                        label='Longitude (ex: 121.535923)'
                        value={props.route.params.location.lng.toString()}
                        size="small"
                    />
                </View>
            </View>
            <View style={styles.buttons}>
                <PrimaryButton onPress={() => {
                    // nasa api call
                    props.navigation.navigate("SunInfoScreen", { location: props.route.params.location })
                }}>
                    Save
                </PrimaryButton>
                <OutlineButton onPress={() => {
                    props.navigation.replace("LocationInputScreen");
                }}>
                    Remove
                </OutlineButton>
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
    map: {
        paddingTop: 20
    },
    input: {
        marginVertical: 20,
    },
    inputContainer: {
        marginVertical: 10
    }
});

export default AddressInfoScreen;