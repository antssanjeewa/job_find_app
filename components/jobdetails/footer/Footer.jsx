import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image style={styles.likeBtnImage} resizeMode='contain' source={icons.heart} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer