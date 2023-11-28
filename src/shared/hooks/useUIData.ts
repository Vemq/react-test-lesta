import { useQuery } from '@apollo/client';
import { SHIPS_DATA_QUERY } from 'shared/api/gql-queries';
import { RawShipsData} from 'shared/types/types';
import toRoman from 'shared/lib/toRoman';

export default function useUIData() {
  const { data } = useQuery<RawShipsData>(SHIPS_DATA_QUERY);

  const nations =
    data?.nations.map(nation => ({
      name: nation.name,
      title: nation.title,
      icon: nation.icons.tiny,
      image: nation.icons.small,
    })) || [];

  const types =
    data?.vehicleTypes.map(type => ({
      name: type.name,
      title: type.title,
      icon: type.icons.default,
      image: data.vehicles.find(vehicle => vehicle.type.name === type.name)?.icons.contour || ''
    })) || [];

  const levels = Array.from({ length: 11 }, (_, i) => ({
    title: toRoman(i + 1),
    name: String(i + 1),
  }));

  return {
    nations,
    types,
    levels,
  };
}
