import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';

const StatsSection = () => {
  const stats = [
    { number: '300,000+', label: 'Members Worldwide' },
    { number: '70+', label: 'Countries' },
    { number: '10.6M+', label: 'Referrals Generated' },
    { number: '$18.3B+', label: 'Business Generated' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.underlineContainer}>
          <Text style={styles.bizText}>BIZ</Text>
          <Text style={styles.linkoText}>LINKO</Text>
        </Text>{' '}
        By The Numbers
      </Text>

      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View
            key={index}
            style={[
              styles.statItem,
              // vertical divider except last in row
              (index % 2 === 0) && { borderRightWidth: 1, borderRightColor: theme.colors.gray },
              // horizontal divider for first row
              index < 2 && { borderBottomWidth: 1, borderBottomColor: theme.colors.gray },
            ]}
          >
            <Text style={styles.statNumber}>{stat.number}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.lg,
    marginHorizontal: theme.spacing.md,
    padding: theme.spacing.lg,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderStyle: 'dotted',
    borderRadius: theme.borderRadius.md,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
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

  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%', // 2 items per row
    paddingVertical: theme.spacing.lg,
  },
  statNumber: {
    fontSize: 36,
    fontFamily: theme.fonts.bold,
    color: theme.colors.secondary,
    marginBottom: theme.spacing.sm,
  },
  statLabel: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary,
    textAlign: 'center',
  },
});

export default StatsSection;
