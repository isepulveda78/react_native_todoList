import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem'
import { GoalInput } from './components/GoalInput';
export default function App() {
  
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    /** Appending Goals in new array */
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#1abc9c" 
      onPress={startAddGoalHandler} />
       <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
           return <GoalItem 
           text={itemData.item.text} 
           onDeleteItem={deleteGoalHandler} 
           id={itemData.item.id}
           />
          }} alwaysBounceVertical={false} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#2c3e50',
  },
  goalsContainer: {
    flex: 4,
    marginRight: 3,
    marginTop: 5
  }
});
