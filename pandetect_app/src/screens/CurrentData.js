import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {
    LineChart
} from "react-native-chart-kit";
import { ScrollView } from 'react-native-gesture-handler';

export default class CurrentData extends React.Component {

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>

                <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    alignItems: "center",
                    marginHorizontal: 40,
                    marginTop: 35,
                    paddingVertical: 2
                }}>
                    <Icon name="back" color="#961B92" size={24}
                        onPress={() => navigate('Main')} />
                    <Text
                        onPress={() => navigate('Main')}
                        style={{
                            fontSize: 25,
                            fontFamily: "SemiBold",
                            alignSelf: "center"
                        }}
                    >PANDETECT</Text>
                    <Icon name="logout" color="#961B92" size={24}
                        onPress={() =>
                            Alert.alert(
                                "Signing Out",
                                "Are you sure you want to sign out?",
                                [
                                    {
                                        text: "Cancel",
                                        style: "cancel"
                                    },
                                    { text: "OK", onPress: () => navigate('Login') }
                                ]
                            )} />
                </View>

                
                <Text
                    style={{
                        marginTop: 20,
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingVertical: 10,
                        paddingHorizontal: 30
                    }}>Coffee Break, Bilkent University, Ankara</Text>

                <Text
                    style={{
                        fontFamily: "SemiBold",
                        marginTop: 20,
                        color: "#85847D",
                        fontFamily: "SemiBold",
                        paddingVertical: 10,
                        paddingHorizontal: 30
                    }}>Based on Average for 15 Minutes</Text>

                <Text
                    style={{
                        marginTop: 20,
                        fontFamily: "SemiBold",
                        paddingVertical: 10,
                        paddingHorizontal: 30
                    }}>There are 50 People</Text>

                <Text
                    style={{
                        marginTop: 20,
                        fontFamily: "SemiBold",
                        paddingVertical: 10,
                        paddingHorizontal: 30
                    }}>96% Wears a Mask</Text>

                <Text
                    style={{
                        marginTop: 20,
                        fontFamily: "SemiBold",
                        paddingVertical: 10,
                        paddingHorizontal: 30
                    }}>76% Obeys Social Distancing</Text>

                <Text
                    style={{
                        alignSelf: "center",
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingTop: 50,
                        paddingBottom: 20
                    }}>For More Detailed Information</Text>

                <View>
                    <TouchableOpacity
                        style={styles.pastDataBtn}>
                        <Text
                            onPress={() => navigate('PastData')}

                            style={styles.topBtnText}>Past Data</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    topBtnContainer: {
        marginHorizontal: 30,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "84%",
        alignItems: "center"
    },
    topUserBtn: {
        backgroundColor: "#85847D",
        borderRadius: 10,
        padding: 10,
        width: "25%"
    },
    topBtnText: {
        color: "white",
        fontFamily: "SemiBold",
        textAlign: "center",
        fontSize: 12
    },
    pastDataBtn: {
        alignSelf: "center",
        backgroundColor: "#961B92",
        borderRadius: 10,
        padding: 10,
        width: "25%"
    }
});