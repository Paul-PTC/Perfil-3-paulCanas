import { router } from 'expo-router';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ShowCard } from '@/components/ShowCard';
import { useShows } from '@/hooks/useShows';
import { colors } from '@/theme/colors';
import type { Show } from '@/types/show';

export default function ShowsScreen() {
  const { error, isLoading, isRefreshing, refresh, shows } = useShows();

  if (isLoading && shows.length === 0) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator color={colors.primary} size="large" />
        <Text style={styles.loadingText}>Cargando las series de TVMaze…</Text>
      </SafeAreaView>
    );
  }

  if (error && shows.length === 0) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.errorTitle}>No se pudo cargar el catálogo</Text>
        <Text style={styles.errorText}>{error}</Text>
        <Pressable onPress={refresh} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Intentar de nuevo</Text>
        </Pressable>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Volver al perfil</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={shows}
        keyExtractor={(show) => String(show.id)}
        ListHeaderComponent={
          <View style={styles.header}>
            <Pressable accessibilityRole="button" onPress={() => router.back()} style={styles.backLink}>
              <Text style={styles.backLinkText}>← Perfil</Text>
            </Pressable>
            <Text style={styles.title}>Series populares</Text>
            <Text style={styles.subtitle}>Datos obtenidos de la API pública TVMaze</Text>
            {error ? (
              <View style={styles.offlineNotice}>
                <Text style={styles.offlineNoticeTitle}>Modo sin conexión</Text>
                <Text style={styles.inlineError}>{error}</Text>
              </View>
            ) : null}
          </View>
        }
        onRefresh={refresh}
        refreshing={isRefreshing}
        renderItem={({ item }: { item: Show }) => <ShowCard show={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    padding: 12,
  },
  backButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  backLink: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
  },
  backLinkText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '800',
  },
  centered: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    gap: 14,
    justifyContent: 'center',
    padding: 28,
  },
  errorText: {
    color: colors.mutedText,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  errorTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  header: {
    gap: 7,
    paddingBottom: 20,
  },
  inlineError: {
    color: colors.danger,
    fontSize: 13,
    marginTop: 6,
  },
  listContent: {
    padding: 20,
    paddingBottom: 32,
  },
  offlineNotice: {
    backgroundColor: '#FFF4D6',
    borderColor: '#F4C96B',
    borderRadius: 12,
    borderWidth: 1,
    gap: 3,
    marginTop: 8,
    padding: 12,
  },
  offlineNoticeTitle: {
    color: '#6F4100',
    fontSize: 13,
    fontWeight: '800',
  },
  loadingText: {
    color: colors.mutedText,
    fontSize: 15,
  },
  retryButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginTop: 4,
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  separator: {
    height: 12,
  },
  subtitle: {
    color: colors.mutedText,
    fontSize: 14,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
});
