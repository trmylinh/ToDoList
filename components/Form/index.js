import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity,KeyboardAvoidingView, Keyboard } from "react-native";
import styles from "./style";
const Form = (props) =>{
    const [task, setTask] = useState('');
    const addTask = () =>{
        
        if(task.length === 0){
            alert("Please enter a task")
            return false;
        }
        props.onAddTask(task);
        // set lai task sau khi lay duoc task 
        setTask('');
        // an keyboard sau khi submit xong
        Keyboard.dismiss()
    }
    return(
        // dung component KeyboardAvoidingView -> danh cho ios khi khong an vao o input khong hien keyboard, con android thi dung <View> bthg
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.addTask}>
            <TextInput 
            placeholder="Enter your task" 
            style={styles.input}
            onChangeText = {(text) => setTask(text)}
            value = {task}
            />
            <TouchableOpacity onPress={addTask}>
                <View style={styles.iconButton} >
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>    
        

    )
}
export default Form;