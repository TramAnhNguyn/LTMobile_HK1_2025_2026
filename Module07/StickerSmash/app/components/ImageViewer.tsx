import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';


type Props = {
  imgSource: ImageSourcePropType;
};

// nhận imgSource làm prop,hiển thị ảnh với style định sẵn
export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
