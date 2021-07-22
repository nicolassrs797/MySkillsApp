import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps){
    return(
        <TouchableOpacity
          style={styles.buttonSkill}
          {...rest}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    );
};

let styles = StyleSheet.create({
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 4
  }
})