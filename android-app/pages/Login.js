import { Text, View, SafeAreaView, TextInput, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-web";
import { login } from "../redux";
import { useNavigate } from "react-router-dom";
import tw from "twrnc";
function Login() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const data = {
      username,
      password,
    };
    dispatch(login(data));
  };
  useEffect(() => {
    if (user.name) {
      navigator("/success");
    }
  }, [user]);

  return (
    <SafeAreaView
      style={tw`h-full flex flex-col justify-center items-center bg-indigo-200`}
    >
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
        }}
        style={tw`h-64 w-64 rounded-full`}
      />
      <View
        style={tw`relative p-10 w-[80%] mt-[10%] items-center rounded border`}
      >
        <View style={tw`p-2 flex flex-row items-center w-[100%]`}>
          <Text style={tw`inline-block mr-2 w-1/3`}>Username</Text>
          <TextInput
            style={tw`border p-2 rounded w-full`}
            placeholder="Enter your username"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={tw`p-2 flex flex-row items-center w-[100%]`}>
          <Text style={tw`inline-block mr-2 w-1/3`}>Password</Text>
          <TextInput
            style={tw`border p-2 rounded w-full`}
            placeholder="Enter your password"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={tw`w-[100%] flex flex-row justify-end pr-2`}>
          <TouchableOpacity
            onPress={() => {
              handleLogin();
            }}
            style={tw`border w-[100px] p-1 px-4 items-center rounded bg-green-400 text-white mb-2 mr-4`}
          >
            <Text style={tw`inline-block mr-2`}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={tw`border w-[100px] p-1 px-4 items-center rounded bg-green-400 text-white mb-2`}
          >
            <Text style={tw`inline-block mr-2`}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
