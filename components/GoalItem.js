import { View, Text, StyleSheet, Pressable } from 'react-native'

function GoalItem(props) {

    return (
      
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#dddddd'}} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        marginRight: 20,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: '#1abc9c',
        width: '100%',
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText:{
        color: 'white',
        padding: 5
      }
})