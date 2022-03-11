import React, { useState, useEffect } from "react";
import {
   View,
   Text,
   StyleSheet,
   TextInput,
   Platform,
   FlatList
  } from "react-native";
import Button from "../components/Button";
import SkillCard from "../components/SkillCard";

export default function Home (){
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [gretting, setGretting] = useState('')

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill] )
  }

  useEffect(()=>{
    const currentHour = new Date().getHours()
    
    if(currentHour < 12){
      setGretting('Good Morging')
    }else if(currentHour >= 12 && currentHour < 18){
      setGretting('Good Afternoon')
    }else{
      setGretting('Good Night')
    }
  }, [])

  return(
    <View style={styles.container}>
      

      <Text style={styles.title}>Welcome, Hugo</Text>
      <Text style={styles.grettings} >
        {gretting}
      </Text>

      <TextInput
        placeholder="New Skill"
        placeholderTextColor='#555'
        style={styles.input}
        onChangeText={setNewSkill}
      />

     <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>
      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item })=>(
          <SkillCard skill={item} />
        )}
      />
      
       
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#ffffff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  grettings: {
    color: '#fff'
  }
})