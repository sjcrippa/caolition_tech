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
] as const