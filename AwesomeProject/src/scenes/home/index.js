import React, {useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScene = ({ navigation }) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  return (
    <View>
        <Text>{"\n"}</Text>
        <TextInput
        style={{height: 40},{paddingLeft:20, textAlignVertical:"center",borderRadius: 20, backgroundColor: "#dcdcdc"}}
        placeholder="Please enter your year of birth. Ex: 1996"
        onChangeText={year => setYear(year)}
        defaultValue={year}
      />
      <Text>{"\n"}</Text>
      <TextInput
        style={{height: 40, },{paddingLeft:20, textAlignVertical:"center", borderRadius: 20, backgroundColor: "#dcdcdc"}}
        placeholder="Please enter your month of birth. Ex: 01"
        onChangeText={month => setMonth(month)}
        defaultValue={month}
      />
      <Text>{"\n"}</Text>
      <TextInput
        style={{height: 40},{paddingLeft:20, textAlignVertical:"center", borderRadius: 20, backgroundColor: "#dcdcdc"}}
        placeholder="Please enter your day of birth. Ex: 15"
        onChangeText={day => setDay(day)}
        defaultValue={day}
      />
      <Text>{"\n"}</Text> 
      {/* <View style={{width:"40%", alignSelf:"center"}}>
        <Button
            title="Calculate my age"
            onPress = {() => navigation.navigate('Profile', {year, month, day})}
        />
      </View> */}
      <TouchableOpacity
        style={styles.button}
        onPress = {() => navigation.navigate('Profile', {year, month, day})}
      >
        <Text style={{color:"#ffffff"}}>CALCULATE MY AGE</Text>
      </TouchableOpacity>
  </View>);

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#1e90ff",
      padding: 10,
      width:"40%",
      alignSelf:"center",
      borderRadius:20,
      shadowColor:"#a9a9a9",
      shadowOpacity:100,
      shadowRadius:1000,
      shadowOffset:{width:10, height:10} 
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });


 
export default HomeScene;