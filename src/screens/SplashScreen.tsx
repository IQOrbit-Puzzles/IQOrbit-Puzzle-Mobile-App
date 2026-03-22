
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import GradientBackground from '../components/GradientBackground';
import { useTheme } from '../theme/Theme';

export default function SplashScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Splash'>) {
  const { palette } = useTheme();
  const scale = new Animated.Value(0.85);
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, { toValue: 1, duration: 900, easing: Easing.out(Easing.exp), useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 1, duration: 900, easing: Easing.out(Easing.ease), useNativeDriver: true }),
    ]).start();

    const timer = setTimeout(() => navigation.replace('Home'), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GradientBackground>
      <View style={styles.center}>
        <Animated.View style={{ transform: [{ scale }], opacity }}>
          <View style={[styles.logoWrap, { borderColor: palette.accent }]}>
            <Text style={[styles.logoText, { color: palette.accent }]}>IQ</Text>
          </View>
        </Animated.View>
        <Animated.Text style={[styles.brand, { color: '#fff', opacity }]}>IQOrbit Puzzles</Animated.Text>
        <Text style={[styles.tag, { color: palette.subtext }]}>Think sharper. Play smarter.</Text>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  logoWrap: { width: 92, height: 92, borderRadius: 24, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  logoText: { fontSize: 40, fontWeight: '900', letterSpacing: -2 },
  brand: { fontSize: 24, fontWeight: '900', letterSpacing: 0.5 },
  tag: { fontSize: 12, marginTop: -6 },
});
