import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView } from 'react-native';
import PrimaryButton from '../components/buttons/PrimaryButton';
import CreditText from '../components/texts/CreditText';
import ParagraphText from '../components/texts/ParagraphText';
import SafeAreaWrapper from '../components/wrappers/SafeAreaWrapper';

const SplashScreen = (props) => {
    return <SafeAreaWrapper>
        <View style={styles.extraPadding}>
            <View style={styles.titleContainer}>
                <Image source={require('../assets/HappySun.png')} resizeMode="contain" style={styles.image} />
            </View>
            <ParagraphText size="large">Meassure sun hours using NASA data</ParagraphText>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/welcome-sun.png')} resizeMode="contain" style={styles.image} />
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={() => props.navigation.navigate("LocationInputScreen")}>
                    <Text>Continue</Text>
                </PrimaryButton>
            </View>
            <CreditText>3D Art by Mikołaj Niżnik</CreditText>
        </View>
    </SafeAreaWrapper>
};

const styles = StyleSheet.create({
    extraPadding: {
        paddingVertical: Dimensions.get("window").width / 5,
        paddingTop: Dimensions.get("window").width / 2.5,
        alignItems: 'center',
    },
    titleContainer: {
        width: Dimensions.get("window").width * 0.65,
        height: Dimensions.get("window").height / 10
    },
    imageContainer: {
        width: Dimensions.get("window").width * 0.68,
        height: Dimensions.get("window").width * 0.68,
        marginTop: 30,
        marginBottom: 42
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    buttonContainer: {
        marginBottom: Dimensions.get("window").height / 6
    }
});

export default SplashScreen;