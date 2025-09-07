import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import logo from '../../assets/images/logo.png';
import { theme } from '../../constants/theme';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={logo}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.iconGroup}>
          {/* ✅ Search Icon */}
          <TouchableOpacity onPress={() => console.log("Search pressed")}>
            <Ionicons
              name="search"
              size={24}
              color={theme.colors.secondary}
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>

          {/* Menu Icon */}
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={28} color={theme.colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Side Menu Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Image
              source={logo}
              style={styles.logo}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Ionicons name="close" size={28} color={theme.colors.secondary} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.mobileNav}>
            {['Membership', 'Chapters', 'Events', 'Resources', 'About', 'Contact'].map((item) => (
              <TouchableOpacity key={item} style={styles.mobileNavItem}>
                <Text style={styles.mobileNavText}>{item}</Text>
              </TouchableOpacity>
            ))}

       
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
  },
  logo: {
    width: 120,
    height: 40,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray,
  },
  mobileNav: {
    padding: theme.spacing.lg,
  },
  mobileNavItem: {
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
  },
  mobileNavText: {
    fontSize: 18,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
  },
  mobileButtonContainer: {
    marginTop: theme.spacing.xl,
  },
  mobileCtaButton: {
    marginBottom: theme.spacing.md,
  },
});

export default Header;
