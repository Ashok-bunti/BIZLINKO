import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../constants/theme';

const { width } = Dimensions.get('window');

export default function HeroSection() {
  return (
    <ImageBackground
      source={require('../assets/images/hero.png')}
      style={styles.hero}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.heroTitle}>Grow Your Business Through Referrals</Text>
        <Text style={styles.heroSubtitle}>
          Join the world's largest business referral organization with chapters across the globe.
        </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={[styles.button, styles.primaryButton]}>
            <Text style={styles.primaryButtonText}>Find a Chapter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
            <Text style={styles.secondaryButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: width,
    height: 300,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: theme.spacing.xl,
  },
  heroTitle: {
    color: theme.colors.white,
    fontSize: 36,
    fontFamily: theme.fonts.bold,
    marginBottom: theme.spacing.md,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
  },
  heroSubtitle: {
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.fonts.regular,
    marginBottom: theme.spacing.xl,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: theme.spacing.sm, // reduced from md
    paddingHorizontal: theme.spacing.lg - 4, // slightly smaller width
    borderRadius: theme.borderRadius.md,
    marginRight: theme.spacing.md,
  },

  primaryButton: {
    backgroundColor: theme.colors.secondary,
  },
  primaryButtonText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.medium,
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  secondaryButtonText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.medium,
    fontSize: 16,
  },
});