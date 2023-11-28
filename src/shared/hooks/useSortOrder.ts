import useUIData from 'shared/hooks/useUIData';

export default function useSortOrder() {
  const { nations, types } = useUIData();

  return {
    nation: nations.map(field => field.name),
    type: types.map(field => field.name),
  };
}
