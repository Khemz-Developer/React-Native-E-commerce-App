import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { useCart } from './../providers/CartProvider';
export default function cart() {
    
const { items } = useCart();

  return (
    <View>
      <Text>cart items length :{items.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})