import { View } from "react-native";
import SpriteAnimator from "./src/lib";

import IdleSheet from "./src/assets/idle_sheet.png";

export default function App() {
  return (
    <View>
      <SpriteAnimator sheet={IdleSheet} columns={16} size={32} />
    </View>
  );
}
