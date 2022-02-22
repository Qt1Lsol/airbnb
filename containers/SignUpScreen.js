import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";

export default function SignUpScreen({ setToken }) {
  const navigation = useNavigation();
  const [sTextEntry, setSTextEntry] = useState(true);
  return (

    <KeyboardAwareScrollView>

      <View style={styles.blocBackground}>

        <View style={styles.blocLogo}>
          <Image
            style={styles.logo}
            resizeMode="cover"
            source={require("../assets/logo.png")}
          />
        </View>

        <View style={styles.blocInput}>
          <View style={styles.blocPassword}>
            <TextInput style={styles.input} placeholder="email" />
          </View>
          <View style={styles.blocPassword}>
            <TextInput style={styles.input} placeholder="username" />
          </View>
          <View style={styles.blocPassword}>
            <TextInput style={styles.txtInput}
              multiline={true}
              numberOfLines={4}
              placeholder="describe yourself in a few words..."
              onChangeText={(text) => this.setState({ text })}
              value="" />
          </View>

          <View style={styles.blocPassword}>
            <TextInput style={styles.input} placeholder="password" secureTextEntry={sTextEntry} />
            <TouchableOpacity
              onPress={() => {
                setSTextEntry(!sTextEntry);
              }}
            >
              <FontAwesome name="eye-slash" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.blocPassword}>
            <TextInput style={styles.input} placeholder="confirm password" secureTextEntry={sTextEntry} />
            <TouchableOpacity
              onPress={() => {
                setSTextEntry(!sTextEntry);
              }}
            >
              <FontAwesome name="eye-slash" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              const userToken = "secret-token";
              setToken(userToken);
            }}
          >
            <Text>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text>Already have an account? SIgn in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView >
  );
}

const styles = StyleSheet.create({

  blocBackground: {
    backgroundColor: "white",
  },

  blocLogo: {
    backgroundColor: "white",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "white",
    borderBottomColor: "rgb(235,95,102)",
    flex: 1
  },

  txtInput: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "rgb(235,95,102)",
    flex: 1
  },

  button: {
    borderRadius: 50,
    height: 40,
    backgroundColor: "white",
    color: "grey",
    marginTop: 60,
    margin: 30,
    borderWidth: 3,
    borderColor: "rgb(235,95,102)",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
  },

  blocPassword: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flex: 1,
  },

  blocInput: {
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "1%",
    margin: 20,
    width: "80%",
    flex: 1,
  },

  logo: {
    width: 150,
    height: 150,
  },


});