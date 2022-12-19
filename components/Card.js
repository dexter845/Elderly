
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const Card = (props) => {
  return (
    <View className="w-40 bg-white shadow-md p-4 mx-2">
      {props.iconType == "ion" &&
        <IconIon name={ props.icon } color="#0349D0" size="40"/>
      }
      {props.iconType == "oct" &&
        <Octicons name="graph" color="#0349D0" size="40"/>
      }
      <Text className="font-bold text-blue-500">{ props.name }</Text>
      <Text className="font-bold text-gray-500">{ props.description }</Text>
    </View>
  );
}


export default Card;