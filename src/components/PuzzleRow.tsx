
import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../theme/Theme';
import Pill from './Pill';

const PuzzleRow: React.FC<{ title: string; difficulty: string; color: string; onPress?: () => void }> = ({ title, difficulty, color, onPress }) => {
  const { palette, radii } = useTheme();
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }] }>
      <View style={[styles.row, { backgroundColor: palette.cardAlt, borderRadius: radii.md, borderColor: color }]}> 
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, { color: palette.text }]}>{title}</Text>
          <Text style={[styles.sub, { color: palette.subtext }]}>Tap to solve</Text>
        </View>
        <Pill label={difficulty} color={color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: { padding: 16, borderWidth: 1, marginBottom: 12, flexDirection: 'row', alignItems: 'center', gap: 12 },
  title: { fontSize: 16, fontWeight: '800', marginBottom: 4 },
  sub: { fontSize: 12 },
});

export default PuzzleRow;
