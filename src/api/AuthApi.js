import { AsyncStorage } from "react-native";

async function setUser(user) {
  try {
    return await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
async function getUser() {
  try {
    let userData = await AsyncStorage.getItem("user");
    let data = JSON.parse(userData);
    return data;
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

const AuthApi = { getUser, setUser };

export default AuthApi;
