import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

// You can use the same image map here
const colorImages = {
  blue: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0c1db1933789874cc01d81fefb8e5599',
  black: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4d4e75b852e4be58f2158f32df5688cb',
  white: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4d67abc7429571b40da208a07fc764e0',
  red: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/943883d5113f52c63defcba290eb6258',
};

function Screen2({ navigation, route }) {
  const [selectedColor, setSelectedColor] = useState(route.params.currentColor);

  const handleDone = () => {
    // Call the callback function from HomeScreen's params
    route.params?.onSelectColor?.(selectedColor);
    // Go back to HomeScreen
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Image
          source={{ uri: colorImages[selectedColor] }}
          style={{ height: 150, width: 120, marginRight: 10 }}
        />
        <Text>Điện thoại Vsmart Joy3 - Hàng chính hãng</Text>
      </View>

      {/* KHUNG CHỌN MÀU */}
      <View
        style={{
          backgroundColor: '#C4C4C4',
          width: '100%',
          alignItems: 'center',
          flex: 4,
          paddingTop: 10,
        }}>
        <Text>Chọn một màu bên dưới</Text>
        <View style={{ justifyContent: 'center' }}>
          {['blue', 'red', 'white', 'black'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.colorBox,
                {
                  backgroundColor: item,
                  // ✅ Use conditional border to show selection
                  borderWidth: selectedColor === item ? 3 : 0,
                  borderColor: 'navy',
                },
              ]}
              onPress={() => setSelectedColor(item)}
            />
          ))}
        </View>

        {/* ✅ Wire the "XONG" button to the handleDone function */}
        <TouchableOpacity style={styles.btnXong} onPress={handleDone}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Screen2;

const styles = StyleSheet.create({
  btnXong: {
    height: 40,
    width: 320,
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 20, // Added margin for spacing
  },
  colorBox: {
    height: 60,
    width: 60,
    margin: 10, // Added margin for spacing
  },
});