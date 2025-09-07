import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { theme } from '../../constants/theme';
import Button from '../Common/Button';

// Import your social media icons
import facebookIcon from '../../assets/images/facebook.png';
import instagramIcon from '../../assets/images/instagram.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import twitterIcon from '../../assets/images/twitter.png';
import youtubeIcon from '../../assets/images/youtube.png';

const Footer = () => {
  const footerSections = [
    {
      title: 'Membership',
      links: ['Join BNI', 'Member Benefits', 'Membership Fees', 'Find a Chapter'],
    },
    {
      title: 'Resources',
      links: ['BNI Podcast', 'Business Articles', 'Success Stories', 'Video Library'],
    },
    {
      title: 'About BNI',
      links: ['Our Story', 'Leadership', 'Global Presence', 'Careers'],
    },
    {
      title: 'Support',
      links: ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'],
    },
  ];

  const socialLinks = [
    { image: facebookIcon, url: 'https://facebook.com/bni' },
    { image: twitterIcon, url: 'https://twitter.com/bni' },
    { image: linkedinIcon, url: 'https://linkedin.com/company/bni' },
    { image: instagramIcon, url: 'https://instagram.com/bni' },
    { image: youtubeIcon, url: 'https://youtube.com/bni' },
  ];

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      {/* Newsletter */}
      <View style={styles.newsletterSection}>
        <Text style={styles.newsletterTitle}>Stay Connected with BNI</Text>
        <Text style={styles.newsletterText}>
          Subscribe to our newsletter for the latest updates, networking tips, and business growth strategies.
        </Text>
        <View style={styles.newsletterForm}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={20}
              color={theme.colors.gray}
              style={{ marginRight: theme.spacing.sm }}
            />
            <Text style={styles.input}>Enter your email address</Text>
          </View>

          <Button title="Subscribe" variant="secondary" style={styles.subscribeButton} />
        </View>
      </View>

      {/* Footer Links */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.footerLinks}>
        {footerSections.map((section, index) => (
          <View key={index} style={styles.footerSection}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.links.map((link, linkIndex) => (
              <TouchableOpacity key={linkIndex} style={styles.linkItem}>
                <Text style={styles.linkText}>{link}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Social Media */}
      <View style={styles.socialSection}>
        <Text style={styles.socialTitle}>Follow Us</Text>
        <View style={styles.socialIcons}>
          {socialLinks.map((social, index) => (
            <TouchableOpacity
              key={index}
              style={styles.socialIcon}
              onPress={() => handleLinkPress(social.url)}
            >
              <Image source={social.image} style={styles.socialImage} resizeMode="contain" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Bottom Footer */}
      <View style={styles.bottomFooter}>
        <Text style={styles.copyright}>
          © 2023 BNI. All rights reserved.
        </Text>
        <View style={styles.bottomLinks}>
          <TouchableOpacity>
            <Text style={styles.bottomLinkText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomLinkText}>Terms of Service</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomLinkText}>Cookie Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.xl,
  },
  newsletterSection: {
    marginBottom: theme.spacing.xl,
  },
  newsletterTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
    marginBottom: theme.spacing.sm,
  },
  newsletterText: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
    marginBottom: theme.spacing.lg,
    lineHeight: 20,
  },
  newsletterForm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    marginRight: theme.spacing.md,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray,
  },
  subscribeButton: {
    height: 50,
  },
  footerLinks: {
    marginBottom: theme.spacing.xl,
  },
  footerSection: {
    marginRight: theme.spacing.xl,
    minWidth: 150,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
    marginBottom: theme.spacing.md,
  },
  linkItem: {
    marginBottom: theme.spacing.sm,
  },
  linkText: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
  },
  socialSection: {
    marginBottom: theme.spacing.xl,
  },
  socialTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
    marginBottom: theme.spacing.md,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  socialImage: {
    width: 20,
    height: 20,
    tintColor: theme.colors.secondary,
  },
  bottomFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', // allow wrapping if screen is small
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
    paddingTop: theme.spacing.lg,
  },

  copyright: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.secondary,
    // marginRight: theme.spacing.md, // spacing before links
    textAlign: 'center',
  },

  bottomLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bottomLinkText: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
    marginLeft: theme.spacing.md,
  },

});

export default Footer;
