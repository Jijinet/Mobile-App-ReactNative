import {View, TextInput,Button,StyleSheet,Modal} from 'react-native';
import React,{useState} from 'react';


const GoalInput = props =>{


      const [enteredGoal,setEnteredGoal]=useState('');

    
    return(
        
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.content1}>
              <TextInput placeholder='Course goal...' style={styles.textInput} value={enteredGoal} onChangeText={setEnteredGoal} />
              <Button title='Add' onPress={props.addGoal.bind(this,enteredGoal)}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    textInput:{
        marginBottom:10,
        borderBottomWidth:2,
        width:'80%',
        borderStyle:'solid',
        borderColor:'dodgerblue'
      },
    
      content1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }
})

export default GoalInput;