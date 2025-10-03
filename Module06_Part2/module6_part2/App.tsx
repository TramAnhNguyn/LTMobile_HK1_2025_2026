import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListBike from './ListBike';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}>
        <Text style={{ fontSize: 20 }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Image
          source={{
            uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1cf7c96a6b59bdc195f09e600ae9106a',
          }}
          style={{ width: '290px', height: '290px', borderRadius: 30 }}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 80,
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>POWER BIKE</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>SHOP</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'center',
              fontSize: 17,
            }}
            // When click this button, it navigate to other page
            onPress={() => navigation.navigate('ListBike')}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ListBike" component={ListBike} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  btn: {
    borderRadius: 20,
    height: '50px',
    width: '300px',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});
