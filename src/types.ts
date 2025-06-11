export interface MapPoint {
  id: number;
  name: string;
  title: string;
  description: string;
  phone: string;
  address: string;
  coordinates: [number, number];
  email: string;
  openingHours: string;
  image: string;
}

export interface NewsArticle {
  id: number;
  date: string;
  name: string;
  shortDescription: string;
  image: string;
  eventData: {
    id: number;
    title: string;
    description: string;
  }[];
}
