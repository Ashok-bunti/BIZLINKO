
import { theme } from '@/constants/theme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import googleLogo from '../../assets/images/google.png';

WebBrowser.maybeCompleteAuthSession();

const RegisterModal = ({ visible, onClose, onRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: 'YOUR_EXPO_CLIENT_ID',
        iosClientId: 'YOUR_IOS_CLIENT_ID',
        androidClientId: 'YOUR_ANDROID_CLIENT_ID',
        webClientId: 'YOUR_WEB_CLIENT_ID',
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            handleGoogleSignIn(authentication.accessToken);
        }
    }, [response]);

    const handleRegister = () => {
        onRegister({ name, email, password });
        setName('');
        setEmail('');
        setPassword('');
        setShowPassword(false);
    };

    const handleGoogleSignIn = async (accessToken) => {
        try {
            const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const userInfo = await response.json();

            console.log('Google user info:', userInfo);

            Alert.alert('Success', 'Google login successful!');

        } catch (error) {
            console.error('Google sign-in error:', error);
            Alert.alert('Error', 'Failed to sign in with Google');
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await promptAsync();
        } catch (error) {
            console.error('Google prompt error:', error);
            Alert.alert('Error', 'Failed to start Google login');
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.topCloseButton} onPress={onClose}>
                        <Ionicons name="close" size={24} color={theme.colors.gray} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Create Account</Text>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <MaterialIcons name="email" size={20} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity
                            style={styles.passwordToggle}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Ionicons
                                name={showPassword ? 'eye' : 'eye-off'}
                                size={20}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                        <Text style={styles.registerButtonText}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.googleButton}
                        onPress={handleGoogleLogin}
                        disabled={!request}
                    >
                        <Image source={googleLogo} style={styles.googleLogo} />
                        <Text style={styles.googleButtonText}>Login with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default RegisterModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: theme.colors.white,
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
    },
    topCloseButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20,
        color: theme.colors.secondary,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 12,
        width: '100%',
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
    },
    passwordToggle: {
        paddingHorizontal: 5,
    },
    registerButton: {
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        paddingVertical: 14,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    registerButtonText: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    googleButton: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 10,
        paddingVertical: 12,
        marginTop: 12,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleLogo: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    googleButtonText: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: '600',
    },
});