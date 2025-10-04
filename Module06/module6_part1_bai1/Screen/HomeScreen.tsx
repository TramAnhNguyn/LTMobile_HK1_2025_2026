import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Define the images in one place
const colorImages = {
  blue: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0c1db1933789874cc01d81fefb8e5599',
  black: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4d4e75b852e4be58f2158f32df5688cb',
  white: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4d67abc7429571b40da208a07fc764e0',
  red: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/943883d5113f52c63defcba290eb6258',
};

const HomeScreen = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState('blue');

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <Image
          source={{ uri: colorImages[selectedColor] }}
          style={{ height: 300, width: 300 }}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Điện thoại Vsmart Joy3 - Hàng chính hãng</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star" size={30} color="#FFD700" />
          <Icon name="star" size={30} color="#FFD700" />
          <Icon name="star" size={30} color="#FFD700" />
          <Icon name="star" size={30} color="#FFD700" />
          <Icon name="star" size={30} color="#FFD700" />
          <Text> (Xem 828 đánh giá)</Text>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 23 }}>1.790.000 đ</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', color: 'red', marginRight: 20 }}>
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
            <Icon name="question" size={16} />
          </View>

          {/* ✅ Navigate and pass params to Screen2 */}
          <View>
            <TouchableOpacity
              style={styles.btnChose}
              onPress={() =>
                navigation.navigate('Screen2', {
                  // Pass the state setter function as a callback
                  onSelectColor: (color) => setSelectedColor(color),
                  // Pass the current color to initialize Screen2's state
                  currentColor: selectedColor,
                })
              }>
              <Text style={{ fontWeight: 'bold' }}>4 MÀU - CHỌN MÀU ➤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.btnBuy}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  btnBuy: {
    backgroundColor: 'red',
    height: 30,
    width: 300,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnChose: {
    borderRadius: 5,
    borderColor: 'black',
    height: 30,
    width: 300,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
});