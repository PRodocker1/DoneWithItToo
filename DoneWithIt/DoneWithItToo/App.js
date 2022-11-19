import { Text, View, Platform} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';



export default function App() {
  return (
    <WelcomeScreen />
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   padding: 20,
    //   paddingTop: 100,
    // }}>
    // <Card
    //   title="Red jacket for sale"
    //   price="$100"
    //   image="./app/assets/jacket.jpg" />
    // </View>
 
  )
}
  