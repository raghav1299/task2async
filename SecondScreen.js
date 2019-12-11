import React from 'react';  
import { StyleSheet, View, Text, Button } from 'react-native';  
  
export default class SecondScreen extends React.Component {  
    render() {  
    
        const { navigation } = this.props;  
        const count1 = navigation.getParam('count', 'counter');  
          
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>    
                <Text style={styles.textStyle}>Times Visited:{count1}</Text>  
                   <View style={styles.buttonStyle}>  
                <Button  
                    title="Go back"  
                    onPress={() => this.props.navigation.goBack()}  
                />  
                </View>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    textStyle: {  
        fontSize: 23,  
        textAlign: 'center',  
        color: 'red',  
    },  
  
    buttonStyle:{  
        width: "50%",  
        marginTop: 100,   
    }  
});  