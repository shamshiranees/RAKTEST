import { View, Text, TouchableOpacity, KeyboardAvoidingView, Dimensions, Platform, Image, SafeAreaView, ScrollView, ActivityIndicator, Modal } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Colors from '../../Theme/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppInputText from '../../Components/AppInputText';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { LoginUser, setLocationValue } from '../../Redux/Actions/login';
import { useNavigation } from '@react-navigation/native';
import deviceinfo from '../../DeviceInfo';
import Geolocation from '@react-native-community/geolocation';
import { styles } from './Style';
import LinearGradient from 'react-native-linear-gradient';
export const IMAGENAME = require('../../iR.png');
const showAnimation = "slideInUp"
const hideAnimation = "slideOutDown"
const window = Dimensions.get('window');



const Login = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [showPassword, setshowPassword] = useState(false)
  const [rememberMe, setrememberMe] = useState(false)
  const [formValid, setformValid] = useState(false)
  const [animationState, setAnimationState] = useState({
    show: false,
    anim: false
  })
  const { navigate } = useNavigation()
  const dispatch = useDispatch();
  const loginSuccess = useSelector(({ login }) => login.loginSuccess);
  const loading = useSelector(({ apiReducer }) => apiReducer.loadingData);
  const [formValue, setFormValue] = useState({ userID: '', password: '' })

  const toggle = () => {
    if (!animationState.show)
      setAnimationState({
        show: true,
        anim: true
      })
    else {
      setAnimationState((st) => ({
        ...st,
        anim: false,
        show: false,

      }))
      setTimeout(() =>
        setAnimationState((st) => ({
          ...st,
          show: false
        })), 500)
    }

  }
  const onValueChange = (type, value) => {
    console.log("value", value);
    setFormValue((st) => ({ ...st, [type]: value }));

  }

  const onProceedToLogin = () => {
    setIsLogin(!isLogin)
    toggle()
  }
  useEffect(() => {
    if (formValue.password.length > 3 && formValue.userID.length > 3) {
      setformValid(true)
    } else {
      setformValid(false)
    }
  }, [formValue]);
  useEffect(() => {
    if (loginSuccess) {
      navigate('Home')
    }
  }, [loginSuccess]);
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      dispatch(setLocationValue({ latitude: info.coords.latitude, longitude: info.coords.longitude }))
    })
  }, []);
  ;

  const onLoginPress = async () => {
    const deviceInfoData = await deviceinfo()
    const loginObj = {
      userID: formValue.userID, ...deviceInfoData
    }
    dispatch(LoginUser(loginObj))
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Modal
          animationType="none"
          transparent={true}
          visible={loading}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <ActivityIndicator color={Colors.secondary} size={"large"} />
          </View>
        </Modal>
        <View>

          <View style={styles.parent}>
            <View >
              <LinearGradient style={styles.child} colors={[Colors.primary, '#e2133a', '#c1064a']} >
                {isLogin ? <View style={styles.headerLogin}>
                  <TouchableOpacity style={{ padding: 10 }} onPress={() => onProceedToLogin()}>
                    <Ionicons name={"chevron-back-outline"} size={30} color={Colors.white} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 10 }} onPress={() => setrememberMe(!rememberMe)}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ color: Colors.white, marginRight: 5 }}>Remember User ID</Text>
                      <Ionicons name={rememberMe ? "checkbox-outline" : "square-outline"} size={25} color={Colors.white} />
                    </View>
                  </TouchableOpacity>
                </View> :
                  <View style={styles.header}>
                    <TouchableOpacity style={{ height: 45, width: 110, borderRadius: 30, padding: 10, borderColor: 'white', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 17, color: 'white' }}>Register</Text>
                    </TouchableOpacity>

                  </View>
                }
                {animationState.show ?
                  <Animatable.View duration={500} animation={animationState.anim ? showAnimation : hideAnimation}>
                    <View style={{ marginTop: 20 }} >
                      <AppInputText
                        blurOnSubmit={false}
                        placeholder="User ID"
                        handleChange={(e) => onValueChange('userID', e)}
                        isValid={true}
                        value={formValue.userID}
                      />
                      <AppInputText
                        blurOnSubmit={false}
                        secureTextEntry={!showPassword}
                        placeholder="Password"
                        handleChange={(e) => onValueChange('password', e)}
                        isValid={true}
                        value={formValue.password}
                        sufix={<TouchableOpacity style={{ marginBottom: 10 }} onPress={() => setshowPassword(!showPassword)} disabled={formValue.password.length < 1}><Text style={{ color: formValue.password.length < 1 ? Colors.lightGrey : Colors.secondary }}>{!showPassword ? 'Show' : 'Hide'}</Text></TouchableOpacity>}
                      />
                    </View>
                  </Animatable.View> :
                  <Animatable.View duration={500} animation={animationState.anim ? showAnimation : hideAnimation}>
                    {/* <Image style={{ height: 80, width: 300, resizeMode: 'contain' }} source={{ uri: "https://timg3cf.b8cdn.com/images/templates/rak_bank/rak_bank-logo-en.png" }} /> */}
                    <View style={{ justifyContent: 'flex-start', padding: 20, width: window.width, marginTop: -80 }}>
                      {/* <Text style={{ color: Colors.white, fontSize: 30, fontWeight: 'bold', marginBottom: 15, letterSpacing: 1 }}>
                      RAKBANK
                    </Text> */}
                      <Image source={IMAGENAME} style={{ width: window.width - 50, resizeMode: "contain", height: 60 }} />
                      <Text style={{ color: Colors.white, fontSize: 18, lineHeight: 22, marginBottom: 10, letterSpacing: 1, paddingLeft: 50 }}>
                        Everything you love about{"\n"}
                        Digital Banking in a smater,{"\n"}
                        simple design
                      </Text>
                    </View>
                  </Animatable.View>
                }
              </LinearGradient>
            </View>
          </View>
          {isLogin ? <View style={{ alignItems: 'center', marginTop: 10, flex: 1 }}>
            <TouchableOpacity disabled={!formValid} style={[styles.buttonContainer, { backgroundColor: formValid ? Colors.secondary : Colors.lightGrey }]} onPress={() => onLoginPress()}>
              <Text style={styles.buttontext}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity >
                <Text>Forgot User ID</Text>
              </TouchableOpacity>
              <Text>{" | "}</Text>
              <TouchableOpacity >
                <Text>Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text>Enable User ID</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text>Go to klip Wallet</Text>
            </TouchableOpacity>
          </View> :
            <View style={{ alignItems: 'center', marginTop: 10, flex: 1 }}>
              <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: Colors.secondary }]} onPress={() => onProceedToLogin()}>
                <Text style={styles.buttontext}>Proceed to Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text>Enable Quick Balance</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text>Go to klip Wallet</Text>
              </TouchableOpacity>
            </View>
          }
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default Login;


