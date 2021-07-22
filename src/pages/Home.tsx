import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/skillCard';

interface SkillData {
  id: string;
  name: string;
};

export function Home(){

  let [newSkill, setNewSkill] = useState('');
  let [mySkills, setMySkills] = useState<SkillData[]>([]);
  let [greeting, setGreeting] = useState('');

  function handleNewSkill(){

    let data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldSkills => [...oldSkills, data]);
  };

  function handleDeleteSkill(id: string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  };

  useEffect(() => {
    let currentDayTime = new Date().getHours();

    if(currentDayTime < 12){
      setGreeting('Good Morning');
    } else if(currentDayTime >= 12 && currentDayTime <= 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night');
    }
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {greeting}, My Friend
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button
        title="Add"
        onPress={handleNewSkill}
        activeOpacity={.7}
      />

      <Text style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={()=>handleDeleteSkill(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 8
  }
});