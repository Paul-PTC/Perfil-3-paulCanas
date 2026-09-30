import { useCallback, useEffect, useState } from 'react';
import { fetch as expoFetch } from 'expo/fetch';

import { fallbackShows } from '@/data/fallbackShows';
import type { Show } from '@/types/show';

const SHOWS_ENDPOINT = 'https://api.tvmaze.com/shows?page=0';

export function useShows() {
  const [shows, setShows] = useState<Show[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [requestVersion, setRequestVersion] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let isCurrentRequest = true;

    const fetchShows = async () => {
      setError(null);

      try {
        const response = await expoFetch(SHOWS_ENDPOINT, {
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('La API no respondió correctamente.');
        }

        const data: unknown = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('La API devolvió un formato inesperado.');
        }

        if (isCurrentRequest) {
          setShows(data as Show[]);
        }
      } catch (cause) {
        const requestWasCancelled = cause instanceof Error && cause.name === 'AbortError';

        if (isCurrentRequest && !requestWasCancelled) {
          console.warn('No fue posible obtener TVMaze:', cause);
          setShows(fallbackShows);
          setError('Sin conexión con TVMaze. Se muestra un catálogo de respaldo; desliza para reintentar.');
        }
      } finally {
        if (isCurrentRequest) {
          setIsLoading(false);
        }
      }
    };

    fetchShows();

    return () => {
      isCurrentRequest = false;
      controller.abort();
    };
  }, [requestVersion]);

  const refresh = useCallback(() => {
    setIsLoading(true);
    setRequestVersion((currentVersion) => currentVersion + 1);
  }, []);

  return {
    shows,
    error,
    isLoading,
    isRefreshing: isLoading && shows.length > 0,
    refresh,
  };
}
