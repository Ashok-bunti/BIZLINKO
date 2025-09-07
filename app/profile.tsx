import { theme } from '@/constants/theme';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ForgotPasswordModal from '../components/layout/ForgotPasswordModal';
import LoginModal from '../components/layout/LoginModal';
import RegisterModal from '../components/layout/RegisterModal';

export default function ProfileScreen() {
  const [registerVisible, setRegisterVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);

  const handleRegister = (data) => {
    console.log('Register Data:', data);
    setRegisterVisible(false);
  };

  const handleLogin = (data) => {
    console.log('Login Data:', data);
    setLoginVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.helpText}>Help</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.hint}>Already registered? Please login</Text>
        <Text style={styles.hint}>New user? Please register</Text>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => setRegisterVisible(true)}
          >
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => setLoginVisible(true)}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <RegisterModal
        visible={registerVisible}
        onClose={() => setRegisterVisible(false)}
        onRegister={handleRegister}
      />

      <LoginModal
        visible={loginVisible}
        onClose={() => setLoginVisible(false)}
        onLogin={handleLogin}
        onForgotPassword={() => setForgotPasswordVisible(true)}
      />
      <ForgotPasswordModal
        visible={forgotPasswordVisible}
        onClose={() => setForgotPasswordVisible(false)}
        onResetPassword={(data) => console.log('Reset password for:', data)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: theme.colors.secondary,
  },
  helpText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  hint: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
    textAlign: 'center'
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 25,
    gap: 15
  },
  registerButton: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  registerText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '600'
  },
  loginButton: {
    borderWidth: 2,
    borderColor: theme.colors.secondary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginText: {
    color: theme.colors.secondary,
    fontSize: 16,
    fontWeight: '600'
  },
});