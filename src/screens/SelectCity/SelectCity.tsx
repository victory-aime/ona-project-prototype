import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useTheme } from '../../hooks';
import { useSelector } from 'react-redux';
import { CarretLeft, Add, Minus } from '../../theme/assets/svg';
import { selectZoneNames } from '../../store/Regions/regionsSlice';
import FilterCity from '../../components/FilterCity/FilterCity'; // Assurez-vous de mettre le bon chemin

const SelectCity = ({ navigation }: any) => {
  // Hooks for theme
  const { Colors, Fonts, Layout, Gutters, Common } = useTheme();

  // selector for the zone names and regions displayed
  const regions = useSelector((state: any) => state.regions);
  const zoneNames = useSelector(selectZoneNames);

  const [isAdded, setIsAdded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [searchText, setSearchText] = useState('');

  // Filtrer les noms de zones basés sur le texte de recherche
  const filteredZoneNames = zoneNames.filter(zoneName =>
    zoneName.toLowerCase().includes(searchText.toLowerCase()),
  );

  const toggleExpansion = (category: string) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category],
    });

    setIsAdded(!expandedCategories[category]);

    if (!expandedCategories[category]) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }
  };

  const handleZonePress = (zoneName: string) => {
    setSelectedRegion(zoneName);
    navigation.navigate('SplashScreen', { zoneName });
  };

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.textBeige }]}>
      <View style={[Layout.dflex]}>
        <View
          style={[
            Layout.dflex,
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.smallMargin,
          ]}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Localisation')}>
            <CarretLeft fillColor="black" />
          </TouchableOpacity>
          <Text style={[Fonts.textSmallBlack]}>Pick a city</Text>
          <View />
        </View>
        <View style={[Gutters.smallLMargin, Gutters.smallRMargin]}>
          <TextInput
            style={[
              Gutters.smallBMargin,
              Gutters.smallTMargin,
              {
                borderRadius: 99,
                height: 48,
                padding: 16,
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'white',
              },
            ]}
            placeholder="Search..."
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
        <>
          {searchText.length > 0 && (
            <FilterCity
              filteredItems={filteredZoneNames}
              onPressItem={handleZonePress}
            />
          )}

          {searchText.length === 0 && (
            <View style={[Gutters.regularTMargin]}>
              {['Europe', 'North America', 'Asia', 'Africa / Middle East'].map(
                category => (
                  <View
                    key={category}
                    style={[
                      Layout.dflex,
                      Layout.col,
                      Gutters.smallTMargin,
                      Gutters.smallLMargin,
                      Gutters.smallRMargin,

                      {
                        borderRadius: 12,
                        backgroundColor: Colors.beige,
                        paddingVertical: 16,
                        paddingHorizontal: 24,
                      },
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        toggleExpansion(category);
                        setSelectedCategory(
                          expandedCategories[category] ? null : category,
                        );
                      }}
                      style={[
                        Layout.dflex,
                        Layout.row,
                        Gutters.smallHPadding,
                        Layout.justifyContentBetween,
                      ]}
                    >
                      <Text
                        style={[Fonts.textRegularBlack, { fontWeight: '100' }]}
                      >
                        {category}
                      </Text>

                      {isAdded ? <Minus /> : <Add />}
                    </TouchableOpacity>

                    <ScrollView
                      style={[
                        {
                          maxHeight: expandedCategories[category] ? 250 : 0,
                          overflow: 'hidden',
                        },
                      ]}
                      showsVerticalScrollIndicator={true}
                    >
                      {regions.map((region: any) => {
                        if (
                          (selectedCategory === 'North America' &&
                            region.overall_category === 'AMERICAS') ||
                          (selectedCategory === 'Asia' &&
                            region.overall_category === 'ASIA') ||
                          (selectedCategory === 'Africa / Middle East' &&
                            region.overall_category ===
                              'MIDDLE EAST / AFRICA') ||
                          (selectedCategory === 'Europe' &&
                            region.overall_category === 'EUROPE')
                        ) {
                          return (
                            <TouchableOpacity
                              style={[
                                Gutters.smallTMargin,
                                Gutters.smallLMargin,
                              ]}
                              key={region.zone_name}
                              onPress={() => handleZonePress(region.zone_name)}
                            >
                              <Text
                                style={[Fonts.textRegularBlack, Fonts.textLeft]}
                              >
                                {region.zone_name}
                              </Text>
                            </TouchableOpacity>
                          );
                        }
                        return null;
                      })}
                    </ScrollView>
                  </View>
                ),
              )}
            </View>
          )}
        </>
      </View>
      <View
        style={{
          bottom: 20,
          left: 0,
          right: 0,
          position: 'absolute',
        }}
      >
        <TouchableOpacity
          style={[
            Gutters.regularMargin,
            Common.button.rounded,
            Common.backgroundSecond,
          ]}
        >
          <Text style={[Fonts.textRegularWhite, Fonts.textCenter]}>
            Enable my Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectCity;
