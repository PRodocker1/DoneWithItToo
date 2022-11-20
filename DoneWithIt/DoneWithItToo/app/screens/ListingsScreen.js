import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'

import Screen from '../components/Screen'
import colors from '../config/colors'

const listings = [
  {
    id: 1,
    title: 'In the Loudest Way',
    price: 15,
    image: require('../assets/ts.jpg')
  },
  {
    id: 2,
    title: 'Catch and Release',
    price: 15,
    image: require('../assets/catch-and-release.jpg')
  },
  {
    id: 3,
    title: 'Come Spring',
    price: 15,
    image: require('../assets/come-spring.jpg')
  },
  {
    id: 4,
    title: 'Kites',
    price: 15,
    image: require('../assets/kites.jpg')
  },
  {
    id: 5,
    title: 'Reckless',
    price: 15,
    image: require('../assets/reckless.jpg')
  },
]

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image} />
      }
      />
    </Screen>
  )
}

export default ListingsScreen

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  }
})