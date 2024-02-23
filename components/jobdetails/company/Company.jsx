import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>

      <View style={styles.logoBox}>
        <Image style={styles.logoImage} source={companyLogo} />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>

        <View style={styles.locationBox}>
          <Image style={styles.locationImage} source={icons.location} />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>

    </View>
  )
}

export default Company