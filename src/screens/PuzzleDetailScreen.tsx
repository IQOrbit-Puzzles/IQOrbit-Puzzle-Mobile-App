
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import { useTheme } from '../theme/Theme';
import { getPuzzleById, getTypeById } from '../data/puzzles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Pill from '../components/Pill';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PuzzleDetailScreen({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'Puzzle'>) {
  const insets = useSafeAreaInsets();

  const { puzzleId } = route.params;
  const puzzle = getPuzzleById(puzzleId);
  const type = puzzle ? getTypeById(puzzle.typeId) : undefined;
  const { palette, spacing, radii } = useTheme();

  const [revealed, setRevealed] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);

  if (!puzzle || !type) {
    return (
      <GradientBackground>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: palette.text }}>Puzzle not found.</Text>
        </View>
      </GradientBackground>
    );
  }

  const showNextHint = () => {
    if (!puzzle.hints) return;
    setHintIndex(i => Math.min(i + 1, puzzle.hints!.length));
  };

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top, paddingBottom: insets.bottom, paddingHorizontal: spacing.lg }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ color: type.color, fontWeight: '800' }}>{'‹ Back'}</Text>
        </Pressable>

        <View style={[styles.headerCard, { backgroundColor: '#0f1530', borderColor: type.color, borderRadius: radii.lg }]}> 
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={[styles.title, { color: palette.text }]}>{puzzle.title}</Text>
            <Pill label={puzzle.difficulty} color={type.color} />
          </View>
          <Text style={[styles.typeText, { color: type.color }]}>{type.title}</Text>
        </View>

        <View style={[styles.card, { borderColor: type.color, borderRadius: radii.md }]}> 
          <Text style={[styles.sectionTitle, { color: palette.text }]}>Puzzle</Text>
          <Text style={[styles.body, { color: palette.text }]}>{puzzle.statement}</Text>
        </View>

        {puzzle.hints && (
          <View style={[styles.card, { borderColor: '#264166', borderRadius: radii.md }]}> 
            <Text style={[styles.sectionTitle, { color: palette.text }]}>Hints</Text>
            {puzzle.hints.slice(0, hintIndex).map((h, idx) => (
              <Text key={idx} style={[styles.hint, { color: '#c6d4ff' }]}>• {h}</Text>
            ))}
            {hintIndex < puzzle.hints.length && (
              <Pressable onPress={showNextHint} style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, styles.button, { borderColor: '#385a8a' }]}>
                <Text style={{ color: '#cfe0ff', fontWeight: '800' }}>Show hint</Text>
              </Pressable>
            )}
          </View>
        )}

        <View style={[styles.card, { borderColor: revealed ? type.color : '#3a3f64', borderRadius: radii.md }]}> 
          <Text style={[styles.sectionTitle, { color: palette.text }]}>Solution</Text>
          {revealed ? (
            <Text style={[styles.body, { color: '#c2ffe9' }]}>{puzzle.solution}</Text>
          ) : (
            <Pressable onPress={() => setRevealed(true)} style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, styles.button, { borderColor: type.color }]}>
              <Text style={{ color: '#e6ebff', fontWeight: '800' }}>Reveal Answer</Text>
            </Pressable>
          )}
        </View>

      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  headerCard: { padding: 18, borderWidth: 1, marginTop: 10, marginBottom: 14 },
  title: { fontSize: 22, fontWeight: '900' },
  typeText: { marginTop: 4, fontWeight: '800', letterSpacing: 1 },
  card: { padding: 18, borderWidth: 1, backgroundColor: '#141a33', marginBottom: 14 },
  sectionTitle: { fontSize: 14, fontWeight: '800', marginBottom: 10, letterSpacing: 0.3 },
  body: { fontSize: 16, lineHeight: 22 },
  hint: { fontSize: 14, lineHeight: 20, marginBottom: 6 },
  button: { alignSelf: 'flex-start', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 12, borderWidth: 1, marginTop: 6 },
});
