export interface TransportInfo {
    type: "flight" | "bus" | "taxi" | "train" | "other";
    from: string;
    to: string;
    departureTime: string;
    arrivalTime: string;
    price?: number;
  }
  
  export interface AccommodationInfo {
    name: string;
    address: string;
    checkInDate: string;
    checkOutDate: string;
    pricePerNight?: number;
    totalCost?: number;
  }
  
  export interface WeatherInfo {
    date: string;
    temperature: number;
    description: string;
  }
  
  export interface VacationPlanInfo {
    id: string;
    title: string;
    transports: TransportInfo[];
    accommodations: AccommodationInfo[];
    weather: WeatherInfo[];
    totalCost?: number;
    createdAt: string;
    updatedAt?: string;
  }
  