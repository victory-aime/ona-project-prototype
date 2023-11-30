import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';

const ModalComponent = ({ isVisible, onClose }: any) => {
  const { Colors, Fonts, Layout, Gutters } = useTheme();

  return (
    <View style={[Layout.fill, Layout.center, Gutters.smallTMargin]}>
      <Modal
        animationType="slide"
        visible={isVisible}
        onRequestClose={onClose}
        presentationStyle="pageSheet"
      >
        <View style={[Layout.fill, Layout.center, Gutters.smallTMargin]}>
          <View
            style={[
              Gutters.regularMargin,
              {
                backgroundColor: Colors.white,
                borderRadius: 20,
                padding: 30,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              },
            ]}
          >
            <Text style={[Fonts.textSmallBold, Fonts.textCenter]}>
              Allow “The Chef’s Guide” to use your position ?
            </Text>
            <Text style={[Fonts.textSmallBlack, Fonts.textCenter]}>
              We will use your position to load the closest guide
            </Text>
            <View style={[Layout.colHCenter, Gutters.smallTMargin]}>
              <View style={styles.divider} />
              <TouchableOpacity onPress={onClose}>
                <Text
                  style={[
                    Fonts.textSmallBold,
                    Fonts.textCenter,
                    Fonts.textBlue,
                  ]}
                >
                  Always allow
                </Text>
              </TouchableOpacity>
              <View style={[styles.divider]} />
              <TouchableOpacity onPress={onClose}>
                <Text
                  style={[
                    Fonts.textSmallBlack,
                    Fonts.textCenter,
                    Fonts.textBlue,
                  ]}
                >
                  Only while using the app
                </Text>
              </TouchableOpacity>
              <View style={[styles.divider]} />
              <TouchableOpacity onPress={onClose}>
                <Text
                  style={[
                    Fonts.textSmallBlack,
                    Fonts.textCenter,
                    Fonts.textBlue,
                  ]}
                >
                  Don’t allow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '100%',
  },
});

export default ModalComponent;
