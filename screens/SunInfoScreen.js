import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import ParagraphTextSmall from '../components/texts/ParagraphTextSmall';
import SubtitleText from '../components/texts/SubtitleText';
import TitleText from '../components/texts/TitleText';
import SafeAreaWrapper from '../components/wrappers/SafeAreaWrapper';
import monthData from '../utils/monthData';

const SunInfoScreen = (props) => {
    const today = new Date();
    const lastYear = today.getFullYear() - 1;
    const nasaUrl = `https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=${props.route.params.location.lng.toString()}&latitude=${props.route.params.location.lat.toString()}&format=JSON&start=${lastYear}&end=${lastYear}`;

    const [yearlyOutput, setYearlyOutput] = useState(0);
    useEffect(() => {
        fetchNasaData(nasaUrl);
    }, [])

    const fetchNasaData = (url) => {
        axios.get(url)
            .then((res) => {
                let output = calculateYearlyOutput(res.data.properties.parameter.ALLSKY_SFC_SW_DWN);
                setYearlyOutput(output);
                // console.log(res.data.properties.parameter.ALLSKY_SFC_SW_DWN);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const calculateYearlyOutput = (data) => {
        let keys = Object.keys(data);
        let values = Object.values(data);
        let output = 0;
        for(let i = 0; i < values.length-1; i++) { // omit annual
            output = monthData[i]["days"] * values[i] + output;
        }
        return Math.round(output);
    }

    return <SafeAreaWrapper>
        <Image source={require("../assets/TopArt.png")} style={styles.image} resizeMode="contain" />
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TitleText size="large">Sun Information</TitleText>
                <View style={styles.address}>
                    <ParagraphTextSmall size="small">
                        {props.route.params.location.address}
                    </ParagraphTextSmall>
                </View>
            </View>
            <View style={styles.summary}>
                <TitleText size="large">Summary</TitleText>
                <View>
                    <Text style={styles.summaryText}>The average panel from this location produces 1250 kWh per year. (Global average: 525 kWh per year)</Text>
                </View>
                <View>
                    <Text style={styles.summaryText}>The average person from this location uses 9 992 kWh per year. (Global average: 3 131 kWh per year)</Text>
                </View>
                <View>
                    <Text style={styles.summaryText}>According to weather data this location scores a:</Text>
                </View>
                <View style={styles.classImageContainer}>
                    <Image style={styles.classImage} resizeMode="contain" source={require("../assets/classes/A-ClassCard.png")} />
                </View>
                <View style={{marginVertical: 20}}>
                    <ParagraphTextSmall size="small">Average estimation is 1250 kWh per panel and with 1380 Hours of Sun yearly this location has been issued an A-Rating.</ParagraphTextSmall>
                </View>
            </View>
            <View>
                <TitleText size="large">Stats</TitleText>
                <View style={{marginVertical: 30}}>
                    <View style={styles.statsItem}>
                        <SubtitleText size="large">Average Output (Yearly)</SubtitleText>
                        <TitleText>1250 kWh</TitleText>
                    </View>
                    <View style={styles.statsItem}>
                        <SubtitleText size="large">Average Hours of Sun (Yearly)</SubtitleText>
                        <TitleText>1380</TitleText>
                    </View>
                    <View style={styles.statsItem}>
                        <SubtitleText size="large">Sky surface downward irradiance (All - Yearly)</SubtitleText>
                        <TitleText>{yearlyOutput}</TitleText>
                    </View>
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
    address: {
        width: "80%",
        marginVertical: 10
    },
    image: {
        width: "100%"
    },
    summary: {
        marginVertical: 25,
    },
    summaryText: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'ubuntu',
        marginVertical: 12
    },
    classImage: {
        width: "100%",
        height: 250,
    },
    classImageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    statsItems: {
        width: "100%",
        paddingVertical: 30
    },
    statsItem: {
        paddingVertical: 10
    }
});

export default SunInfoScreen;