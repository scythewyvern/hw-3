export type Ship = {
  model?: string;
  type: string;
  roles: string[];
  imo?: number;
  mmsi?: number;
  abs?: number;
  class?: number;
  mass_kg?: number;
  mass_lbs?: number;
  year_built?: number;
  home_port: string;
  link?: string;
  image?: string;
  name: string;
  active: boolean;
  launches: string[];
  id: string;
};
