import { Filters, FiltersEnumType } from '@/enums/Filters'
import { FilterTypeState } from '@/store/Filters'

export const getFilterArray = (type: FiltersEnumType) =>
  Object.keys(Filters[type]).map<FilterTypeState>((key, index) => ({
    id: index + '',
    name: key,
    checked: false,
  }))

export const capitalizeFirstLetter = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1)
