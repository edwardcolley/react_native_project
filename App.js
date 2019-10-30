import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => 
      [...currentGoals, 
      {key: Math.random().toString(), value: goalTitle}
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => {
        console.log(goal.key, goalId);
        return goal.key !== goalId
      });
    });
  };
  
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList 
      data={courseGoals}
      renderItem={ itemData => <GoalItem onDelete={removeGoalHandler} id={itemData.item.key} title={itemData.item.value}/>}
      />   
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
