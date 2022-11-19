import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React, {useState} from 'react';
import Item from './Item'

import { cats, dogs} from './breeds'


export default function App() {

  const [search, setSearch] = useState('')

  function logSearch(){
    console.log(search)
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >
        <StatusBar style="auto" />
        <View style={styles.listContainer}>
          <FlatList
            data={cats.filter(item => item.breed.includes(search))}
            //data={cats}
            renderItem={({ item, index }) => {
              return <Item index={index} data={item} />;
            }}
            keyExtractor={(item) => item.breed}
          />
        </View>
        <TextInput
          style={styles.search}
          placeholder="Search Pet Breed"
          onChangeText={setSearch}
          value={search}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading : {
    fontSize: 36,
    color:'red',
    fontWeight:'bold'
  },
  search: {
    fontSize: 24,
    padding: 10,
    borderWidth: 1
  
  },
  kav: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    margin: 30
  }
});
