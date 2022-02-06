import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import AnimatedInput from 'react-native-animated-input';
import Colors from '../Theme/Colors';


function AppInputText({ handleChange, isValid, placeholder, value, sufix = null, ref, ...props }) {
    return <View style={{ width: Dimensions.get("screen").width - 50, justifyContent: "center", paddingHorizontal: 20, backgroundColor: Colors.white, margin: 10, paddingVertical: 10, borderRadius: 8 }}>
        <AnimatedInput
            autoCorrect={false}
            {...props}
            placeholder={placeholder}
            valid={isValid}
            errorText="Error"
            onChangeText={handleChange}
            value={value}
            styleLabel={{ fontWeight: "600", color: Colors.lightGrey, letterSpacing: 0.5 }}
            styleBodyContent={{ borderBottomWidth: 0.5, borderBottomColor: '#C8AA1E' }}
            sufix={sufix}
            ref={ref}
        />
    </View>;
}

export default AppInputText;
