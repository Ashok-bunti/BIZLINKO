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

const ForgotPasswordModal = ({ visible, onClose, onResetPassword }) => {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        onResetPassword({ email });
        setEmail('');
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.topCloseButton} onPress={onClose}>
                        <Ionicons name="close" size={24} color={theme.colors.gray} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Forgot Password</Text>
                    
                    <Text style={styles.subtitle}>
                        Enter your email address and we'll send you instructions to reset your password.
                    </Text>
                    
                    <View style={styles.inputWrapper}>
                        <MaterialIcons name="email" size={20} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email Address"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                        />
                    </View>

                    <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
                        <Text style={styles.resetButtonText}>Send Reset Instructions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.backToLogin} onPress={onClose}>
                        <Text style={styles.backToLoginText}>Back to Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ForgotPasswordModal;

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
        marginBottom: 15,
        color: theme.colors.secondary,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '100%',
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
    },
    resetButton: {
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        paddingVertical: 14,
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
    },
    resetButtonText: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    backToLogin: {
        paddingVertical: 10,
    },
    backToLoginText: {
        color: theme.colors.primary,
        fontSize: 14,
        fontWeight: '500',
    },
});