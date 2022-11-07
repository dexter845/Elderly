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
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <View style={styles.headerItem}>
          <IconIon name="ios-home-outline" size={size}/>
          <Text>Home</Text>
        </View>
        <View style={styles.headerItem}>
          <IconFeather name="file-text" size={size}/>
          <Text>Records</Text>
        </View>
        <View style={styles.headerItem}>
          <IconAnt name="warning" size={size}/>
          <Text>Warning</Text>
        </View>
        <View style={styles.headerItem}>
          <IconAwesome name="user" size={size}/>
          <Text>User</Text>
        </View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ccc',
    width: "100%",
    height: "10%"
  },
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