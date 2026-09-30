import { StyleSheet, Text, View } from 'react-native';

import type { Student } from '@/data/student';
import { colors } from '@/theme/colors';

type StudentProfileProps = {
  student: Student;
};

export function StudentProfile({ student }: StudentProfileProps) {
  const details = [
    { label: 'Paul Melquisidec Cañas Palacios', value: student.name },
    { label: '20210103', value: student.carnet },
    { label: '2A Grupo 2', value: student.sectionAndGroup },
  ];

  return (
    <View style={styles.card}>
      {details.map((detail) => (
        <View key={detail.label} style={styles.row}>
          <Text style={styles.label}>{detail.label}</Text>
          <Text style={styles.value}>{detail.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 20,
    borderWidth: 1,
    gap: 18,
    padding: 22,
    shadowColor: '#24102F',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 3,
  },
  row: {
    gap: 4,
  },
  label: {
    color: colors.mutedText,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  value: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '600',
  },
});
