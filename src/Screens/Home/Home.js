import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Colors from '../../Theme/Colors';


const Home = () => {
    const data = useSelector(({ login }) => login.data);

    return (
        <SafeAreaView style={{ justifyContent: 'center', flex: 1, padding: 20 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {Object.keys(data).map((keyName, i) => (
                    <View style={{ padding: 15, margin: 5, borderRadius: 8, borderWidth: 1, borderColor: Colors.lightGrey }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>
                            {keyName}
                        </Text >
                        <Text style={{ fontSize: 13, marginTop: 5 }}>
                            {data[keyName]}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
