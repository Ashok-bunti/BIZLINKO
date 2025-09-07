import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';
import Card from './Common/Card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Johnson Marketing',
      text: 'BNI has transformed my business. In just one year, I\'ve received over 50 qualified referrals that have resulted in more than $200,000 in new business.',
      avatar: require('../assets/images/A11.jpg'),
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Chen Financial Services',
      text: 'The structured approach to networking and referral generation at BNI is unmatched. It\'s the best investment I\'ve made in my business.',
      avatar: require('../assets/images/A1.jpg'),
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      company: 'Rodriguez Real Estate',
      text: 'Being part of BNI has not only grown my business but also provided me with a supportive community of business professionals.',
      avatar: require('../assets/images/A12.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Success Stories</Text>
      <Text style={styles.subtitle}>
        Hear from business professionals who have grown their businesses through BNI
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} style={styles.testimonialCard}>
            <View style={styles.testimonialHeader}>
              <Image
                source={testimonial.avatar}
                style={styles.avatar}
                resizeMode="cover"
              />
              <View style={styles.testimonialInfo}>
                <Text style={styles.name}>{testimonial.name}</Text>
                <Text style={styles.company}>{testimonial.company}</Text>
              </View>
            </View>
            <Text style={styles.testimonialText}>{testimonial.text}</Text>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.darkGray,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    lineHeight: 24,
  },
  scrollContent: {
    paddingVertical: theme.spacing.md,
  },
  testimonialCard: {
    width: 300,
    marginRight: theme.spacing.lg,
    borderWidth: 0.5,
    borderColor: theme.colors.secondary, // secondary color border
    borderRadius: theme.borderRadius.md, // optional: rounded corners
    padding: theme.spacing.md, // optional: add inner padding
  },

  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: theme.spacing.md,
  },
  testimonialInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
  },
  company: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.darkGray,
  },
  testimonialText: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    lineHeight: 22,
    fontStyle: 'italic',
  },
});

export default TestimonialsSection;