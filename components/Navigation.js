import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

const Navigation = () => {
  const size = "25";
  return (
    <>
    <View className="flex h-16 p-2 shadow-md bg-white shadow-[#699BF7]">
      <View className="flex flex-row justify-around items-center">
        <View className="flex items-center">
          <IconIon name="ios-home-outline" size={size} color="#699BF7" />
          <Text className="text-[#699BF7] font-bold">Home</Text>
        </View>
        <View className="flex items-center">
          <IconFeather name="file-text" size={size}/>
          <Text>Records</Text>
        </View>
        <View className="flex items-center">
          <IconAnt name="warning" size={size}/>
          <Text>Warning</Text>
        </View>
        <View className="flex items-center">
          <IconAwesome name="user" size={size}/>
          <Text>User</Text>
        </View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerInner: {
    backgroundColor: '#ccc',
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  headerItem: {
    display: "flex",
    alignItems: "center"
  }
});

export default Navigation;