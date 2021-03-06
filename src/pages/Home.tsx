import React, { Fragment, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreeting] = useState('');

  function handleAddNewSkill() {

    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    };

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id != id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12){
      setGreeting('Good Morning');
    }
    else if(currentHour >= 12 && currentHour < 18){
      setGreeting('Good Afternoon');
    }else{
      setGreeting('Good Night');
    }
  }, [])

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Gerson</Text>

        <Text style={[styles.greetings]}>
          {greetings}
        </Text>

        <TextInput
          style={styles.input}
          placeholder='new skill'
          placeholderTextColor='#555'
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} title='add' />

        <Text style={[styles.title, { marginVertical: 20 }]}>
          My Skills
        </Text>

        <FlatList 
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)}/>
          )}
        />
        
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greetings:{
    color: '#fff'
  }
});
