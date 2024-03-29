import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { router } from 'expo-router'

const NearbyJobCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => router.push(`job-details/${item.job_id}`)}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image style={styles.logoImage} source={item.employer_logo} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.jobType}>{item.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard