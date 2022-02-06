import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../Theme/Colors";
const window = Dimensions.get('window');

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1, backgroundColor: Colors.primary
    }, buttonSecondary: {
      height: 35, justifyContent: 'center', marginVertical: 5
    },
    container: {
      backgroundColor: Colors.background,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }, header: {
      flexDirection: "row-reverse",
      justifyContent: 'space-between',
      backgroundColor: Colors.primary,
      paddingHorizontal: 10, width: window.width, position: 'absolute', top: 0
  
    },
    headerLogin: {
      flexDirection: "row",
      justifyContent: 'space-between',
      backgroundColor: Colors.primary,
      paddingHorizontal: 10, width: window.width, position: 'absolute', top: 0
    },
    buttonContainer: {
      width: window.width - 70,
      // backgroundColor: Colors.secondary,
      color: Colors.white,
      padding: 10,
      height: 60, borderRadius: 30, justifyContent: 'center', marginBottom: 10
    }, buttontext: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center', fontWeight: 'bold'
    },
    input: {
      height: 50,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginVertical: 5,
      // paddingVertical: 5,
      // paddingHorizontal: 15,
      width: window.width - 30,
    },
    parent: {
      // height: window.height * 0.9,
      width: window.width,
      transform: [{ scaleX: 2 }],
      borderBottomStartRadius: 200,
      borderBottomEndRadius: 200,
      overflow: 'hidden',
      backgroundColor: Colors.primary,
      flex: 2.8
      // marginTop:-window.height*.35
    },
    child: {
      // flex: 1,
      transform: [{ scaleX: 0.5 }],
  height:'100%',
      // backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center'
    },
    child1: {
      flex: 0.98,
      marginBottom: 25,
      //  alignItems: 'center',
      // justifyContent: 'center',
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 150,
      backgroundColor: '#e41042'
    },
    child3: {
      flex: 0.95,
      // marginBottom:25,
      alignItems: 'center',
      justifyContent: 'center',
  
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 800,
      backgroundColor: Colors.primary
    }
  })