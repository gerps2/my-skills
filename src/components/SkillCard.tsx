import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';


interface SkillCardProps extends TouchableOpacityProps{
  skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={.7} { ...rest }>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1F1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  }
});