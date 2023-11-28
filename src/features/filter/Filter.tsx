import Checkbox from 'shared/ui/Checkbox';
import Icon from 'shared/ui/Icon';

import { RootState } from 'app/store';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { switchFilter, FilterCategory } from './filterSlice';

interface FilterProps {
  name: string;
  title: string;
  groupName: FilterCategory;
  iconLink?: string;
  extraAction?: () => void;
}

export default function Filter({
  name,
  title,
  groupName,
  iconLink,
  extraAction,
}: FilterProps) {
  const dispatch = useAppDispatch();

  const filterGroup = useAppSelector(
    (state: RootState) => state.filters[groupName]
  );

  const toggleHandler = (filterName: string, groupName: FilterCategory) => {
    dispatch(
      switchFilter({
        filterGroup: groupName,
        filterName: filterName,
        isRemoving: isChecked(filterName),
      })
    );
    extraAction && extraAction();
  };

  const isChecked = (filterName: string) => filterGroup.includes(filterName);

  return (
    <Checkbox
      key={name}
      checked={isChecked(name)}
      onToggle={() => toggleHandler(name, groupName)}
    >
      <>
        {iconLink && <Icon imageLink={iconLink} />}
        {title}
      </>
    </Checkbox>
  );
}
