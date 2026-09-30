import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StudentProfile } from '@/components/StudentProfile';
import { student } from '@/data/student';
import { colors } from '@/theme/colors';

export default function StudentScreen() {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image source={require('../../assets/master-ball.png')} style={styles.icon} />
          <Text style={styles.eyebrow}>ACTIVIDAD EVALUADA</Text>
          <Text style={styles.title}>Perfil del estudiante</Text>
          <Text style={styles.subtitle}>React Native · Expo · TVMaze API</Text>
        </View>

        <StudentProfile student={student} />

        <Pressable
          accessibilityHint="Abre el catálogo de series obtenido desde TVMaze"
          accessibilityRole="button"
          onPress={() => router.push('/shows')}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Ver catálogo de series</Text>
          <Text style={styles.buttonArrow}>→</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  buttonArrow: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 24,
  },
  buttonPressed: {
    backgroundColor: colors.primaryDark,
    transform: [{ scale: 0.99 }],
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  container: {
    flex: 1,
    gap: 28,
    padding: 24,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  hero: {
    gap: 6,
  },
  icon: {
    height: 68,
    marginBottom: 8,
    width: 68,
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  subtitle: {
    color: colors.mutedText,
    fontSize: 15,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
});
