import { View, Text, ScrollView, SafeAreaView, Dimensions, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Colors from '../../Theme/Colors';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';
const screen = Dimensions.get('window');

const AnimatedSvg = Animated.createAnimatedComponent(Svg);


const Home = () => {
    const data = useSelector(({ login }) => login.data);
    const [scale, setScale] = useState(new Animated.Value(1))
    const [scale1, setScale1] = useState(new Animated.Value(1.2))



    useEffect(() => {
        animate()
        animate1()

    }, []);
    const animate = () => {
        Animated.sequence([
            Animated.timing(scale,
                {
                    toValue: 1.1,
                    duration: 4000
                }),
            Animated.timing(scale,
                {
                    toValue: 1,
                    duration: 4000
                })
        ]).start(() => animate())
    }

    const animate1 = () => {
        Animated.sequence([
            Animated.timing(scale1,
                {
                    toValue: 1,
                    duration: 4000
                }),
            Animated.timing(scale1,
                {
                    toValue: 1.2,
                    duration: 4000
                })
        ]).start(() => animate1())
    }
    const width = screen.width
    const height = screen.height * 0.2
    const svgHeight = screen.height * 0.5
    console.log("svgHeight", svgHeight);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <View style={{ backgroundColor: 'blue', width: screen.width}}> */}
                <View>
                    <View style={{ width: width, height: height, backgroundColor: Colors.primary, zIndex: 999 }}>
                    </View>
                    <Svg height={svgHeight} width={width} style={{ marginTop: -20 }}>
                        <Circle cx={width / 2} cy={-40} r={width} fill="#c1064a" />
                    </Svg>
                    <Animated.View style={{ transform: [{ scale: scale }], marginTop: -svgHeight}}>
                        <Svg height={svgHeight} width={width}>
                            <Circle cx={(width / 2) - 30} cy={-80} r={width} fill="#e2133a" />
                        </Svg>
                    </Animated.View>
                    <Animated.View style={{ transform: [{ scale: scale1 }], marginTop: -svgHeight}}>
                        <Svg height={svgHeight} width={width}>
                            <Circle cx={(width / 2) - 80} cy={-120} r={width} fill={Colors.primary} />

                        </Svg>
                    </Animated.View>
                </View>
                <Text>sssss</Text>
                <Text>sssss</Text>

            {/* </View> */}
<View style={{backgroundColor:'green'}}>
            <Text>sssss</Text>
            </View>
            {/* <ScrollView showsVerticalScrollIndicator={false}>
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
            </ScrollView> */}
        </SafeAreaView>
    );
};

export default Home;
