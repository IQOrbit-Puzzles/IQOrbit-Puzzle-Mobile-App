
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import { useTheme } from '../theme/Theme';
import TypeCard from '../components/TypeCard';
import { PUZZLE_TYPES } from '../data/puzzles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export default function HomeScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const { palette, spacing } = useTheme();
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={{ padding: spacing.lg }}>
        <Text style={[styles.title, { color: palette.text }]}>Choose Puzzle Type</Text>
        <Text style={[styles.subtitle, { color: palette.subtext }]}>Start with any category. New puzzles can be added anytime.</Text>
        <View style={{ height: 16 }} />
        {PUZZLE_TYPES.map(t => (
          <TypeCard
            key={t.id}
            title={t.title}
            description={t.description}
            color={t.color}
            onPress={() => navigation.navigate('Type', { typeId: t.id })}
          />
        ))}
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: '900' },
  subtitle: { fontSize: 13 },
});
