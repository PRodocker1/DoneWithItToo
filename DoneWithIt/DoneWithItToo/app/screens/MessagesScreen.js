import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants';

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import colors from '../config/colors';

function MessagesScreen() {
  const messages = [
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/chair.jpg')
    },
    {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assets/chair.jpg')
    }
  ];
  return (
    <Screen >
      <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()} 
        renderItem={({ item }) => (
          <ListItem 
              title={item.title} 
              subTitle={item.description}
              image={item.image} 
              onPress={() => console.log('List Item Pressed', item)}
          /> 
        )} 
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({ 
  screen: {
    paddingTop: Constants.statusBarHeight 
  }
})

export default MessagesScreen; 