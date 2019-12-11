import React from 'react';  
import { StyleSheet, View, Button } from 'react-native';  
  
export default class FirstScreen extends React.Component {  
  
    constructor(props) {   
        super(props);  
        this.state = {  
            counter: 0,  
        };  
    }    
  
    render() {  
        const { navigate } = this.props.navigation;  
        return (    
         <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>   
        <View style={styles.buttonStyle}>  
            <Button  
        title="click"   
        onPress={() => 
        this.props.navigation.navigate('Second', {  
            count: this.state.counter +=1,    
        })  }/>  
        </View> 
        </View> 
          
    );  
    }  
}  
const styles = StyleSheet.create({   

    buttonStyle:{  
        width: "50%",  
        marginTop: 100,   
    }  
});  