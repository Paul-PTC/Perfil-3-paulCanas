import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import type { Show } from '@/types/show';

type ShowCardProps = {
  show: Show;
};

function plainText(html?: string | null) {
  return html?.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() || 'Sin descripción disponible.';
}

export function ShowCard({ show }: ShowCardProps) {
  const channel = show.network?.name ?? show.webChannel?.name ?? 'Sin canal';
  const genres = show.genres.length ? show.genres.join(' · ') : 'Sin género';
  const premiereYear = show.premiered?.slice(0, 4) ?? '—';
  const imageUri = show.image?.medium ?? show.image?.original;

  return (
    <View style={styles.card}>
      {imageUri ? (
        <Image accessibilityLabel={`Póster de ${show.name}`} source={{ uri: imageUri }} style={styles.poster} />
      ) : (
        <View accessibilityLabel={`Sin póster para ${show.name}`} style={styles.posterPlaceholder}>
          <Text style={styles.placeholderText}>TV</Text>
        </View>
      )}

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text numberOfLines={2} style={styles.title}>
            {show.name}
          </Text>
          <Text style={styles.rating}>★ {show.rating?.average?.toFixed(1) ?? 'N/A'}</Text>
        </View>
        <Text numberOfLines={1} style={styles.metadata}>
          {premiereYear} · {channel}
        </Text>
        <Text numberOfLines={1} style={styles.genre}>
          {genres}
        </Text>
        <Text numberOfLines={3} style={styles.summary}>
          {plainText(show.summary)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'stretch',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 14,
    overflow: 'hidden',
    padding: 12,
  },
  content: {
    flex: 1,
    gap: 5,
    paddingVertical: 2,
  },
  genre: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  metadata: {
    color: colors.mutedText,
    fontSize: 13,
  },
  placeholderText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '800',
  },
  poster: {
    backgroundColor: colors.softPurple,
    borderRadius: 12,
    height: 150,
    width: 100,
  },
  posterPlaceholder: {
    alignItems: 'center',
    backgroundColor: colors.softPurple,
    borderRadius: 12,
    height: 150,
    justifyContent: 'center',
    width: 100,
  },
  rating: {
    color: '#8D5200',
    fontSize: 12,
    fontWeight: '800',
  },
  summary: {
    color: colors.mutedText,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
  title: {
    color: colors.text,
    flex: 1,
    fontSize: 16,
    fontWeight: '800',
  },
  titleRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 8,
  },
});
