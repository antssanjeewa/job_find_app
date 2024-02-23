import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants';

const Welcome = () => {

  const [searchText, setSearchText] = useState('');

  const jobTypes = ["Full-time", "Part-time", "Remote", "Full-time2", "Part-time2", "Remote2", "Full-time3", "Part-time3", "Remote3"];
  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);

  const searchJob = () => { }

  const changeJobType = (item) => {
    setActiveJobType(item);
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Ants</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      {/* Search input */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            placeholder='What are you looking for?'
            onChangeText={setSearchText}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={searchJob}>
          <Image source={icons.search} resizeMode='cover' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={item => item}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => changeJobType(item)}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )} />
      </View>

    </View>
  )
}

export default Welcome