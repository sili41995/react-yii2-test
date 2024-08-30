import { ChangeEvent, FC, useEffect, useState } from 'react';
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSistrix,
  FaTimes,
} from 'react-icons/fa';
import { makeBlur } from '@/utils';
import IconButton from '@/components/IconButton';
import Input from '@/components/Input';
import {
  AriaLabels,
  FormTypes,
  IconBtnType,
  IconSizes,
  InputTypes,
  SearchParamsKeys,
  SortTypes,
} from '@/constants';
import { FilterContainer, ButtonsList, Item } from './Filter.styled';
import { useSetSearchParams } from '@/hooks';
import { BtnClickEvt } from '@/types/types';

const Filter: FC = () => {
  const { searchParams, updateSearchParams, setSearchParams } =
    useSetSearchParams();
  const filter = searchParams.get(SearchParamsKeys.filter) ?? '';
  const [showFilter, setShowFilter] = useState<boolean>(() => Boolean(filter));
  const descSortType =
    searchParams.get(SearchParamsKeys.sort) === SortTypes.desc;
  const clearFilterBtnIcon = Boolean(filter) && (
    <FaTimes size={IconSizes.primaryIconSize} />
  );
  const sortBtnIcon = descSortType ? (
    <FaSortAlphaDown size={IconSizes.primaryIconSize} />
  ) : (
    <FaSortAlphaUp size={IconSizes.primaryIconSize} />
  );

  useEffect(() => {
    if (!showFilter) {
      searchParams.delete(SearchParamsKeys.filter);
      setSearchParams(searchParams);
    }
  }, [showFilter]);

  const onSortBtnClick = ({ currentTarget }: BtnClickEvt) => {
    makeBlur(currentTarget);
    const value = descSortType ? SortTypes.asc : SortTypes.desc;
    updateSearchParams({ key: SearchParamsKeys.sort, value });
  };

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateSearchParams({ key: SearchParamsKeys.filter, value });
  };

  const onFilterBtnClick = (e: BtnClickEvt) => {
    makeBlur(e.currentTarget);
    setShowFilter((showFilter) => !showFilter);
  };

  const onClearFilterBtnClick = () => {
    updateSearchParams({ key: SearchParamsKeys.filter });
  };

  return (
    <FilterContainer>
      {showFilter && (
        <Input
          type={InputTypes.text}
          value={filter}
          onChange={onFilterChange}
          formType={FormTypes.filter}
          autoFocus
          inputWrap
          btnIcon={clearFilterBtnIcon}
          btnType={IconBtnType.clearFilter}
          action={onClearFilterBtnClick}
        />
      )}
      <ButtonsList>
        <Item>
          <IconButton
            btnType={IconBtnType.filter}
            onBtnClick={onFilterBtnClick}
            aria-label={AriaLabels.filter}
            icon={<FaSistrix size={IconSizes.otherIconSize} />}
          />
        </Item>
        <Item>
          <IconButton
            btnType={IconBtnType.filter}
            onBtnClick={onSortBtnClick}
            aria-label={AriaLabels.sort}
            icon={sortBtnIcon}
          />
        </Item>
      </ButtonsList>
    </FilterContainer>
  );
};

export default Filter;
