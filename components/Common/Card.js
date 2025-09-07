import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../../constants/theme';

const Card = ({ 
  children, 
  style, 
  image, 
  title, 
  description,
  imageStyle 
}) => {
  return (
    <View style={[styles.card, style]}>
      {image && (
        <Image source={image} style={[styles.image, imageStyle]} resizeMode="cover" />
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  description: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.darkGray,
    lineHeight: 20,
  },
});

export default Card;