import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';

const bikes = [
  {
    id: 1,
    name: 'Pinarello',
    price: '1800',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1cf7c96a6b59bdc195f09e600ae9106a',
  },
  {
    id: 2,
    name: 'Pina Mountai',
    price: '1700',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/61eeb12686a442fe332ba3839a9328e4',
  },
  {
    id: 3,
    name: 'Pina Bike',
    price: '1500',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9968367521cc6846554d34557add3dd4',
  },
  {
    id: 4,
    name: 'Pinarello',
    price: '1900',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/65dc1e1d1789b151d8ea01a892e3918f',
  },
  {
    id: 5,
    name: 'Pinarello',
    price: '$2700',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9968367521cc6846554d34557add3dd4',
  },
  {
    id: 6,
    name: 'Pinarello',
    price: '1350',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/444b59e4afd614ea15a0870ff906c286',
  },
];
const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2; // 2 columns, with padding

function ListBike() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>
          The world's Best Bike
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}>
        <TouchableOpacity>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.filterText}>Roadbike</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 12,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <FlatList
          data={bikes}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.img }} style={styles.image} />
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
          )}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  filterText: {
    color: 'red',
    borderColor: 'red',
    borderWidth: 1.5,
    borderRadius: 7,
    fontSize: 16,
    paddingRight: 15,
    paddingLeft: 15,
  },
  card:{
    backgroundColor:'lightpink',
    padding:10,
    alignItems:'center',
    borderRadius:8,
    margin:20
  },
  image:{
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
export default ListBike;
