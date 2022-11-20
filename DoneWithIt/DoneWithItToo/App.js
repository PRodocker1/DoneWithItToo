import { View} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';


const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    // image: require('../assets/chair.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    // image: require('../assets/chair.jpg')
  }
] 


export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreen />
    <MessagesScreen/>
  )
}
  