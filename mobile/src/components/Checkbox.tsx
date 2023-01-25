import { View, TouchableOpacity, TouchableOpacityProps,Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps{
  title: string;
  checked?: boolean;
}

export function Checkbox({checked = false, title, ...rest}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    > 
      {
        checked 
          ?
          <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
            <Feather
              name="check"
              size={30}
              color={colors.white}
            />
          </View>
          : 
          <View className="h-8 w-8 bg-zinc-900 rounded-lg border-2 border-zinc-800"/>
      }
      <Text className="text-white text-semibold text-base ml-3">
        {title}
      </Text>
    </TouchableOpacity>
  )
}