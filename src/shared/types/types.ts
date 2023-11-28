export type SortField = 'nation' | 'type' | 'title' | 'level';
export enum Layout {Grid , Table};

export interface SortUIData {
  title: string;
  sortFildName?: SortField;
};

export interface RawShipsData extends UIData {
  vehicles: ShipData[];
}

export interface ShipData {
  id: string;
  title: string;
  description: string;
  icons: {
    large: string;
    small: string;
    contour: string;
  };
  level: number;
  type: {
    name: string;
    title: string;
    icons: {
      default: string;
    };
  };
  nation: {
    name: string;
    title: string;
    icons: {
      large: string;
      tiny: string;
    };
  };
}

export interface UIData {
  vehicleTypes: {
    name: string;
    title: string;
    icons: {
      default: string;
    };
  }[];

  nations: {
    name: string;
    title: string;
    color: string;
    icons: {
      tiny: string;
      small: string;
    };
  }[];
}

export type FilterData = {
  name: string;
  title: string;
  icon?: string;
  image?: string;
};


export interface ItemProps {
  title: string;
  nation: string;
  type: string;
  level: number;
  flagIconLink: string;
  typeIconLink: string;
  shipImageLink: string;
  shipImageBigLink: string;
  flagImageLink: string;
  description: string;
}
