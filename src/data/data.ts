import carouselfirst from "/public/carouselfirst.png";
import carouselSec from "/public/carouselsec.png";

export const links = [
  {
    name: '01. History',
    hash: '#history'
  },
  {
    name: '02. Team',
    hash: '#team'
  }
] as const;

export const carouselImages = [
  {
    id: 1,
    title: carouselfirst,
    imageUrl: carouselfirst
  },
  {
    id: 2,
    title: carouselSec,
    imageUrl: carouselSec
  }
] as const;

export interface Mountain {
  name: string;
  schedule: { date: string; description: string }[];
}

export const mountains: Mountain[] = [
  {
    name: 'MOUNTAIN 1',
    schedule: [
      { date: '25 Nov 2016', description: 'Vestibulum viverra' },
      { date: '28 Nov 2016', description: 'Vestibulum viverra' },
      { date: '18 Dec 2016', description: 'Vestibulum viverra' },
      { date: '7 Jan 2017', description: 'Vestibulum viverra' },
    ],
  },
  {
    name: 'MOUNTAIN 2',
    schedule: [
      { date: '10 Feb 2017', description: 'Nullam accumsan' },
      { date: '14 Feb 2017', description: 'Maecenas tincidunt' },
      { date: '20 Feb 2017', description: 'Proin eget tortor' },
      { date: '25 Feb 2017', description: 'Lorem ipsum dolor' },
    ],
  },
] as const;