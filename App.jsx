import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const WhiteLogo = require('./assets/images/1.png');

const { width, height } = Dimensions.get('window');

// Responsive utility for scaling font/buttons
const scale = (size: number) => {
  if (width >= 1024) return size * 1.2; // iPad Pro, big tablets
  if (width >= 800) return size * 1.1;  // iPad, large Android tablets
  if (width < 360) return size * 0.93;  // small phones
  return size;
};

const BUTTON_WIDTH = Math.min(width * 0.85, 440);
const IMAGE_SIZE = Math.min(width * 0.62, 260);

export default function Welcome() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/register');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <View style={styles.logoWrapper}>
          <Image 
            source={WhiteLogo} 
            style={styles.logo} 
            resizeMode="contain"
          />
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.tagline}> Build muscles, Improve health. </Text>

          <TouchableOpacity
            style={[styles.primaryButton, { width: BUTTON_WIDTH }]}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.secondaryButton, { width: BUTTON_WIDTH }]}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Full vertical centering for all heights
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
    paddingBottom: scale(20),
    width: '100%',
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: Math.max(IMAGE_SIZE + 30, height * 0.35),
  },
  logo: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    maxWidth: 320,
    maxHeight: 320,
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: scale(24),
    marginBottom: scale(12),
  },
  tagline: {
    fontSize: scale(18),
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: scale(28),
    color: '#E85B03',
    maxWidth: 400,
  },
  primaryButton: {
    backgroundColor: '#1E1E1E',
    paddingVertical: scale(15),
    borderRadius: 28,
    marginBottom: scale(18),
    alignItems: 'center',
    shadowColor: '#1E1E1E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  primaryButtonText: {
    color: '#E85B03',
    backgroundColor: '#ffff',
    padding: 20,
    borderRadius: 10,
    width: 250,
    textAlign: 'center',
    fontSize: scale(17),
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#E85B03',
    borderRadius: 10,
    maxWidth: 250,



  },
  secondaryButtonText: {
    color: '#ffff',
    fontSize: scale(17),
    fontWeight: '600',
    textAlign: 'center',
    padding: 20,
  },
});