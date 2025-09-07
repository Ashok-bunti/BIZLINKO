// LoginModal.js
import { theme } from '@/constants/theme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const LoginModal = ({ visible, onClose, onLogin, onForgotPassword }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        onLogin({ email, password });
        setEmail('');
        setPassword('');
        setShowPassword(false);
    };

    const handleForgotPassword = () => {
        onForgotPassword();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.topCloseButton} onPress={onClose}>
                        <Ionicons name="close" size={24} color={theme.colors.gray} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Login</Text>
                    
                    <View style={styles.inputWrapper}>
                        <MaterialIcons name="email" size={20} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email or Username"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
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
                            autoCapitalize="none"
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

                    {/* Forgot Password positioned to the right below password field */}
                    <View style={styles.forgotPasswordContainer}>
                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default LoginModal;

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
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginBottom: 15,
        marginTop: -5,
    },
    forgotPasswordText: {
        color: theme.colors.primary,
        fontSize: 14,
        fontWeight: '500',
    },
    loginButton: {
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        paddingVertical: 14,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
});