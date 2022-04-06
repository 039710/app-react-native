import { Text, View, SafeAreaView, TextInput, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-web";
import { login } from "../redux";
import { useNavigate } from "react-router-dom";
import tw from "twrnc";
function Home() {
  const dispatch = useDispatch();
  const [serialKey, setSerialKey] = useState("");
  const [input, setInput] = useState("");
  const [cracked, setCracked] = useState(false);
  const flag = "1xYs947dD0231";
  const handleCrack = () => {
    if (input == serialKey) {
      setCracked(true);
    }
  };
  const generateKey = () => {
    let temp =
      Math.round(Math.random() * 9999).toString() +
      "-" +
      Math.round(Math.random() * 9999).toString() +
      "-" +
      Math.round(Math.random() * 9999).toString() +
      "-" +
      Math.round(Math.random() * 9999).toString();
    setSerialKey(temp);
  };
  useEffect(() => {
    generateKey();
  }, []);

  return (
    <SafeAreaView
      style={tw`h-full flex flex-col justify-center items-center bg-indigo-200`}
    >
      {/* {serialKey} */}
      <Text style={tw`mb-5 font-semibold text-lg`}>
        Cracked - {cracked ? "✅" : "❌"}
      </Text>
      {cracked && (
        <Text style={tw`mb-5 font-semibold text-lg`}>Flag - {flag}</Text>
      )}
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
          <Text style={tw`inline-block mr-2 w-[100px]`}>Serial Key</Text>
          <TextInput
            style={tw`border p-2 rounded w-full`}
            placeholder="xxxx-xxxx-xxxx-xxxx-xxxx"
            onChangeText={(text) => setInput(text)}
          />
        </View>

        <View style={tw`w-[100%] flex flex-row justify-end pr-2`}>
          <TouchableOpacity
            onPress={() => {
              handleCrack();
            }}
            style={tw`border w-[150px] p-2 px-3 items-center rounded bg-blue-400 mb-2`}
          >
            <Text style={tw`inline-block mr-2 text-white text-lg`}>
              Crack Me!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
