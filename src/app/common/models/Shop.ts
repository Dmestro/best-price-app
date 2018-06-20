
export class Shop {
  id: string;
  name: string;
  description: string;
  icon?: string = 'other';
  coords: {lat: number, lon: number};
}
