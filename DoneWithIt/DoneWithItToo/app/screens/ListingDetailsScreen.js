import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/chair.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Listing</AppText>
        <AppText style={styles.price}>$100</AppText> 
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/chair.jpg")} 
            title="Person Listing Item"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary, 
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    font: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  }
})

export default ListingDetailsScreen