import React, { Component } from 'react';
import LinearGradient from 'react-native-web-linear-gradient';
import { StyleSheet, View, WebView, Platform ,Dimensions,Text } from 'react-native';
 

const windowheight= Dimensions.get('window').height;
const TryScreen=Props=>{
    return(
      <View style={{ height: 300 }}>
<iframe src="https://drive.google.com/file/d/1CJktSyA2q9XQRg2ARb8mc5dnEuE4IeJd/preview" width="100%" height="100%"></iframe>
         <Text>aaa</Text>
  </View>

  
      );
};
 
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      imgBackground: {
        flex: 1,
        width: "100%",
        alignItems: "center",
      },
      linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      WebViewContainer: {

        marginTop: (Platform.OS == 'android') ? 20 : 0,
    
      }
  });
  export default TryScreen; 
  //source={require('../assets/back.png')}  