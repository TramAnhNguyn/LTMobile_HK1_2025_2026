import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

function Screen2() {
  const [selectedColor, setSelectedColor] = useState('blue');

  const colorImage = {
    blue: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0c1db1933789874cc01d81fefb8e5599',
    black:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4d4e75b852e4be58f2158f32df5688cb',
    white:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4d67abc7429571b40da208a07fc764e0',
    red: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/943883d5113f52c63defcba290eb6258',
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={{ uri: colorImage[selectedColor] }}
          style={{ height: 150, width: 120, marginRight: 10 }}
        />
        <Text>Điện thoại Vsmart Joy3 - Hàng chính hãng</Text>
      </View>

      {/* KHUNG CHỌN MÀU */}
      <View
        style={{
          backgroundColor: 'lightgrey',
          width: '100%',
          alignItems: 'center',
          flex:3
        }}>
        <Text>Chọn một màu bên dưới</Text>
        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
          {['blue', 'red', 'white', 'black'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.colorBox,
                {
                  backgroundColor: item,
                  borderWidth: selectedColor === item ? 3 : 1,
                  borderColor: selectedColor === item ? 'black' : 'gray',
                },
              ]}
              onPress={() => setSelectedColor(item)}
            />
          ))}
        </View>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.btnXong}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Screen2;

const styles = StyleSheet.create({
  btnXong: {
    height: 40,
    width: 300,
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  colorBox: {
    height: 60,
    width: 60,
    margin: 10,
    borderRadius: 8,
  },
});
