
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../theme/Theme';

const Pill: React.FC<{ label: string; color?: string }> = ({ label, color }) => {
  const { palette } = useTheme();
  return (
    <View style={[styles.pill, { backgroundColor: (color ?? palette.muted) + '55', borderColor: color ?? palette.muted }]}> 
      <Text style={[styles.text, { color: '#fff' }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  text: { fontSize: 12, fontWeight: '600' },
});

export default Pill;
