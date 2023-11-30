import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const BottomModal = (props: any) => {
  const BottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChange = useCallback((index: any) => {
    console.log(index);
  }, []);
  return (
    <View>
      <BottomSheet
        ref={BottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <View>
          <Text style={{ fontSize: 36 }}>{props.text}</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
  },
  contentContainer : {
    
  }
});
