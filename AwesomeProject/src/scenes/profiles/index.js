import React from 'react';
import { Text, View } from 'react-native';

const ProfileScene = ({route}) => {
    const { year }= route.params;
    const { month } = route.params;
    const { day } = route.params;
    var today = new Date();
    var y = today.getFullYear();
    var m = String(today.getMonth() + 1).padStart(2, '0');
    var d = String(today.getDate()).padStart(2, '0');

    var ageY = y - year;
    var ageM = m - month;
    var ageD = d - day;
    var age;

    if(ageM <0 || (ageM<=0 && ageD<0) )
    {
        age = ageY - 1;
    }else
        age= ageY;
    
  return (  
    <>
        <CalculateAge age = {age}/>
    </>
  );
}

const CalculateAge = (props) =>{
    return(
        <View style ={{alignSelf:"center",marginVertical:100}}>
        <Text style = {{fontSize: 50, marginLeft: 40}}> 
            You are
        </Text>
        <Text style = {{fontSize: 100, marginLeft: 100, color:"#00bfff", fontWeight:"bold"}}>
            {props.age}
        </Text>
        <Text style = {{fontSize: 50}}> 
            years old.
        </Text>
    </View>
    );
}
 
export default ProfileScene;