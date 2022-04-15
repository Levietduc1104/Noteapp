import React from 'react';
import { useState } from 'react';
import { StyleSheet, View,FlatList } from 'react-native';
import Goalinput from './goalinput';

import goalItems from './GoalItem';
export default function App() {


  const[courseGoals,setCourseGoals]= useState([]);
 

  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text:enteredGoalText,id: Math.random().toString()},
    ]); 
  }

  return (
    <View style={styles.appContainer}>
      <Goalinput onAddGoal={addGoalHandler}/>
      <View style={styles.inputContainer}> 
      <FlatList data={courseGoals} renderItem={(itemData) =>{
          return <goalItems text={itemData.item.text}/>;
           }}
           keyExtractor={(item,index)=>{
             return item.id;
           }}

      alwaysBounceVertical={false}/> 
      
      </View>
    </View>
  );
}

const styles= StyleSheet.create ({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },

  goalsContainer:{
    flex:5
  },
} );