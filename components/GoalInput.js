import { useState } from 'react'
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'

export function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
      }
      function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
      }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
            <TextInput placeholder='Your course goal' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 24,
        backgroundColor: '#2c3e50',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
        borderColor: '#fff',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 6
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button:{
        width: '30%',
        marginHorizontal: 8
      },
      image:{
        width: 100,
        height: 100,
        margin: 20
      }
})
