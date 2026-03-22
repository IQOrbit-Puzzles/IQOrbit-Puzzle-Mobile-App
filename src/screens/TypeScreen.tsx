
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import { useTheme } from '../theme/Theme';
import { getTypeById, getPuzzlesByType } from '../data/puzzles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import PuzzleRow from '../components/PuzzleRow';

export default function TypeScreen({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'Type'>) {
  const { typeId } = route.params;
  const type = getTypeById(typeId);
  const puzzles = getPuzzlesByType(typeId);
  const { palette, spacing } = useTheme();

  if (!type) {
    return (
      <GradientBackground>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: palette.text }}>Type not found.</Text>
        </View>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={{ padding: spacing.lg }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ color: type.color, fontWeight: '800' }}>{'‹ Back'}</Text>
        </Pressable>
        <Text style={[styles.title, { color: palette.text }]}>{type.title}</Text>
        <Text style={[styles.subtitle, { color: palette.subtext }]}>{type.description}</Text>
        <View style={{ height: 14 }} />
        {puzzles.map(p => (
          <PuzzleRow
            key={p.id}
            title={p.title}
            difficulty={p.difficulty}
            color={type.color}
            onPress={() => navigation.navigate('Puzzle', { puzzleId: p.id })}
          />
        ))}
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '900', marginTop: 6 },
  subtitle: { fontSize: 13, marginTop: 6 },
});
