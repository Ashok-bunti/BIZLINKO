import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';
import Card from './Common/Card';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Business Referrals',
      description: 'Generate qualified referrals to grow your business through our structured referral networking system.',
      icon: '📊',
    },
    {
      id: 2,
      title: 'Networking Opportunities',
      description: 'Connect with other business professionals and build valuable relationships.',
      icon: '🤝',
    },
    {
      id: 3,
      title: 'Education & Training',
      description: 'Learn proven techniques for business growth through our comprehensive training programs.',
      icon: '🎓',
    },
    {
      id: 4,
      title: 'Global Reach',
      description: 'Access business networks around the world with chapters in over 70 countries.',
      icon: '🌎',
    },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        How{' '}
        <Text style={styles.underlineContainer}>
          <Text style={styles.bizText}>BIZ</Text>
          <Text style={styles.linkoText}>LINKO</Text>
        </Text>{' '}
        Helps Your Business Grow
      </Text>


      <Text style={styles.subtitle}>
        We provide the platform, tools, and training to help you generate more referrals and grow your business.
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {services.map((service) => (
          <Card
            key={service.id}
            style={styles.serviceCard}
          >
            <Text style={styles.serviceIcon}>{service.icon}</Text>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.xl,
    // backgroundColor: theme.colors.lightGray,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  bizText: {
    color: theme.colors.black, // keep BIZ in normal color
    fontFamily: theme.fonts.bold,
  },
  linkoText: {
    color: theme.colors.secondary, // LINKO in secondary color
    fontFamily: theme.fonts.bold,
  },
  underlineContainer: {
    textDecorationLine: 'underline',
    textDecorationColor: theme.colors.secondary, // underline color
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
  serviceCard: {
    width: 280,
    marginRight: theme.spacing.lg,
    alignItems: 'center',
  },
  serviceIcon: {
    fontSize: 50,
    marginBottom: theme.spacing.md,
  },
  serviceTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.darkGray,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default ServicesSection;