import { Link } from 'expo-router';
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{marginTop:120, fontWeight: 'bold', color: 'darksalmon', fontSize: 30 }}>MANAGE YOUR TASK</Text>
      </View>

      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <TextInput style={styles.input} placeholder="Enter your name"></TextInput>
        <Link href={"/list"} style={styles.button}>
          GET STARTED
        </Link>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    backgroundColor: 'darkturquoise',
    height: 30,
    width: 150,
    borderRadius: 8
  },
  input:{
    height:40,
    width:400,
    borderWidth:1,
    borderRadius:8, 
    marginBottom:30
  }
});
