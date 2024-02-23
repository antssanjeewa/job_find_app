import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { COLORS, SIZES } from '../../../constants'

const PopularJobs = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>

        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went Wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5]}
            keyExtractor={item => item}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
            renderItem={({ item }) => (
              <PopularJobCard item={item} />
            )} />
        )}
      </View>

    </View>
  )
}

export default PopularJobs