import type { Show } from '@/types/show';

// Respaldo local para que la pantalla siga siendo útil si el dispositivo no tiene Internet.
export const fallbackShows: Show[] = [
  {
    id: 1,
    name: 'Under the Dome',
    premiered: '2013-06-24',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    rating: { average: 6.6 },
    network: { name: 'CBS' },
    summary: 'Un pequeño pueblo queda aislado del resto del mundo por una cúpula invisible.',
  },
  {
    id: 2,
    name: 'Person of Interest',
    premiered: '2011-09-22',
    genres: ['Action', 'Crime', 'Science-Fiction'],
    rating: { average: 8.8 },
    network: { name: 'CBS' },
    summary: 'Un sistema secreto detecta crímenes antes de que ocurran.',
  },
  {
    id: 4,
    name: 'Arrow',
    premiered: '2012-10-10',
    genres: ['Drama', 'Action', 'Science-Fiction'],
    rating: { average: 7.4 },
    network: { name: 'The CW' },
    summary: 'Un sobreviviente regresa a su ciudad y combate el crimen como un vigilante.',
  },
  {
    id: 5,
    name: 'True Detective',
    premiered: '2014-01-12',
    genres: ['Drama', 'Crime', 'Thriller'],
    rating: { average: 8.1 },
    network: { name: 'HBO' },
    summary: 'Una antología sobre detectives y los casos que los llevan al límite.',
  },
  {
    id: 6,
    name: 'The 100',
    premiered: '2014-03-19',
    genres: ['Action', 'Adventure', 'Science-Fiction'],
    rating: { average: 7.7 },
    network: { name: 'The CW' },
    summary: 'Cien jóvenes regresan a una Tierra devastada para comprobar si es habitable.',
  },
  {
    id: 10,
    name: 'Grimm',
    premiered: '2011-10-28',
    genres: ['Drama', 'Crime', 'Supernatural'],
    rating: { average: 8.4 },
    network: { name: 'NBC' },
    summary: 'Un detective descubre que debe proteger a la humanidad de criaturas de leyenda.',
  },
];
