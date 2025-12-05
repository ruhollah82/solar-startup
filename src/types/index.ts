export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  location: string;
  capacity: string; // kW
  installationDate: string;
  images: {
    main: string;
    gallery: string[];
    thumbnails: string[];
  };
  stats: {
    energyProduced: string;
    co2Saved: string;
    homesPowered: number;
  };
  features: string[];
  status: "completed" | "ongoing" | "planned";
}
