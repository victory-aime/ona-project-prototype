import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../hooks';

interface FilteredListProps {
  filteredItems: string[];
  onPressItem: (item: string) => void;
}

const FilterCity: React.FC<FilteredListProps> = ({
  filteredItems,
  onPressItem,
}) => {
  const { Fonts, Gutters } = useTheme();
  return (
    <ScrollView style={[Gutters.regularTMargin]}>
      {filteredItems.map((item: string) => (
        <TouchableOpacity
          style={[Gutters.smallTMargin, Gutters.smallLMargin]}
          key={item}
          onPress={() => onPressItem(item)}
        >
          <Text style={[Fonts.textRegularBlack, Fonts.textLeft]}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FilterCity;
