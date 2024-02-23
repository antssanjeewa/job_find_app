import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hook/useFetch'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

const Nearbyjobs = () => {
  const { data, isLoading, error } = useFetch('search', {
    query: "nae",
    num_pages: 1
  });

  const [selectedJob, setSelectedJob] = useState();


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>NearBy Jobs</Text>

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
          data?.map((job) => (
            <NearbyJobCard
              item={job}
              key={`near_by-${job.job_id}`}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs