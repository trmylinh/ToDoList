import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';
import { useState } from 'react';
export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) =>{
    // add task
    setTaskList([...taskList,task]);
  }
  const handleDeleteTask = (index) =>{
    Alert.alert('Warning', 'You want to delete task?', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Cancel Pressed');
        },
        style: 'cancel',
      },
      {text: 'OK', 
        onPress: () => {
          console.log('OK Pressed');
          let taskListTmp = [...taskList];
          taskListTmp.splice(index,1);
          setTaskList(taskListTmp);
        }
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>

        <ScrollView style={styles.items}>
          {
            taskList.map((item, index)=>{
              return <Task 
                      key={index} 
                      title={item} 
                      number={index+1} 
                      onDeleteTask={()=>handleDeleteTask(index)}
                    />
            })
          }
        </ScrollView>

      </View>

      <Form onAddTask = {handleAddTask}/>
    </View>
  );
}

