import React from "react";
import { View,TouchableOpacity, Text } from "react-native";
import styles from "./style";
const Task = (props) =>{
  const {number} = props;
  const numberText = number < 10 ? `0${number}` : number;
  const itemBG = number % 2 === 0 ? styles.odd : styles.even;
    return(
        <TouchableOpacity onPress={props.onDeleteTask}>
            <View style={styles.item}>
              <View style={[styles.list, itemBG]}>
                <Text style={styles.number}>{numberText}</Text>
              </View>
              <Text style={styles.content}>{props.title}</Text>
            </View>
          </TouchableOpacity>
    )
}
export default Task;