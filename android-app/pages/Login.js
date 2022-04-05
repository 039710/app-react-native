import {
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-web";
import tw from "twrnc";
function Login() {
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
          <Text style={tw`inline-block mr-2`}>Username</Text>
          <TextInput
            style={tw`border p-2 rounded w-full`}
            placeholder="Enter your username"
          />
        </View>
        <View style={tw`p-2 flex flex-row items-center w-[100%]`}>
          <Text style={tw`inline-block mr-2`}>Password</Text>
          <TextInput
            style={tw`border p-2 rounded w-full`}
            placeholder="Enter your password"
          />
        </View>
        <View style={tw`w-[100%] flex flex-row justify-end pr-2`}>
          <TouchableOpacity
            onPress={() => {
              console.log("pressed");
            }}
            style={tw`border w-[100px] p-1 px-4 items-center rounded bg-green-400 text-white mb-2 mr-4`}
          >
            <Text style={tw`inline-block mr-2`}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("pressed");
            }}
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
