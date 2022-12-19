
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Card from './Card';



const Cat = () => {
  const cardData = [
    { 
      "name": "Health Report",
      "icon": "document-text-outline",
      "description": "Check your health for routine check",
      "iconType": "ion",
      "key": 1
    },
    { 
      "name": "Reports",
      "icon": "graph",
      "description": "See your daily reports",
      "iconType": "oct",
      "key": 2
    }

  ]
  return (
    <>
    <View className="flex-1	flex items-center justify-center">
      <Image source={require('../assets/main-icon.png')} className="w-48 h-48 object-cover"/>
      <View className="bg-blue-500 text-white rounded-xl px-8 py-2 my-2">
        <Text className="text-white font-bold text-xl">Connect to device</Text>
      </View>
      <StatusBar style="auto" />
      <View className="flex flex-row flex-wrap justify-center my-4">
        {
          cardData.map((elem)=>{
            return <Card name={elem.name} icon={ elem.icon } iconType={elem.iconType} description={ elem.description } key={elem.key}/>
          })
        }
      </View>
    </View>
    </>
  );
}


export default Cat;