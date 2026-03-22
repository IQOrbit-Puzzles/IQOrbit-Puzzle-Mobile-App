
import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../theme/Theme';

const TypeCard: React.FC<{ title: string; description: string; color: string; onPress?: () => void }> = ({ title, description, color, onPress }) => {
  const { palette, radii } = useTheme();
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }] }>
      <View style={[styles.card, { backgroundColor: palette.card, borderColor: color, borderRadius: radii.lg }]}> 
        <View style={[styles.badge, { backgroundColor: color + '22', borderColor: color }]}> 
          <View style={[styles.dot, { backgroundColor: color }]} />
          <Text style={[styles.badgeText, { color }]}>{title}</Text>
        </View>
        <Text style={[styles.title, { color: palette.text }]}>{title}</Text>
        <Text style={[styles.desc, { color: palette.subtext }]}>{description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: { padding: 18, borderWidth: 1.5, marginBottom: 16 },
  badge: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, borderWidth: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 8 },
  badgeText: { fontWeight: '700', fontSize: 12 },
  title: { fontSize: 20, fontWeight: '800', marginBottom: 6 },
  desc: { fontSize: 14, lineHeight: 18 },
});

export default TypeCard;
