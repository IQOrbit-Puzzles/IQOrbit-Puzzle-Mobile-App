
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ViewStyle } from 'react-native';

const GradientBackground: React.FC<{ style?: ViewStyle } & React.PropsWithChildren> = ({ children, style }) => (
  <LinearGradient
    colors={[ '#0b1020', '#0b1020', '#11183a' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={[{ flex: 1 }, style]}
  >
    {children}
  </LinearGradient>
);

export default GradientBackground;
