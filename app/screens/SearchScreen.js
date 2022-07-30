import { useState } from 'react';

import { View, StyleSheet, FlatList, Dimensions } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from '../components/Screen';
import AppText from '../components/Text';
import SearchBox from '../components/SearchBox';
import SearchCard from '../components/SearchCard';
import colors from '../configs/colors';

const fetchedData = [
    {
        id: 1,
        location: "abc",
        rating: 4.5,
        capacity: 10,   // here it is 10 litres
    },
    {
        id: 2,
        location: "abcd",
        rating: 1,
        capacity: 11,   // here it is 10 litres
    },
    {
        id: 3,
        location: "cfff",
        rating: 2,
        capacity: 12,   // here it is 10 litres
    },
    {
        id: 4,
        location: "abc",
        rating: 4.5,
        capacity: 10,   // here it is 10 litres
    },
    {
        id: 5,
        location: "abcd",
        rating: 1,
        capacity: 11,   // here it is 10 litres
    },
    {
        id: 6,
        location: "cfff",
        rating: 2,
        capacity: 12,   // here it is 10 litres
    },
    {
        id: 7,
        location: "abc",
        rating: 4.5,
        capacity: 10,   // here it is 10 litres
    },
    {
        id: 8,
        location: "abcd",
        rating: 1,
        capacity: 11,   // here it is 10 litres
    },
    {
        id: 9,
        location: "cfff",
        rating: 2,
        capacity: 12,   // here it is 10 litres
    },
    {
        id: 10,
        location: "abc",
        rating: 4.5,
        capacity: 10,   // here it is 10 litres
    },
    {
        id: 11,
        location: "abcd",
        rating: 1,
        capacity: 11,   // here it is 10 litres
    },
    {
        id: 12,
        location: "cfff",
        rating: 2,
        capacity: 12,   // here it is 10 litres
    },
    {
        id: 13,
        location: "abc",
        rating: 4.5,
        capacity: 10,   // here it is 10 litres
    },
    {
        id: 14,
        location: "abcd",
        rating: 1,
        capacity: 11,   // here it is 10 litres
    },
    {
        id: 15,
        location: "cfff",
        rating: 2,
        capacity: 12,   // here it is 10 litres
    },
    {
        id: 16,
        location: "abc",
        rating: 4.5,
        capacity: 10,   // here it is 10 litres
    },
    {
        id: 17,
        location: "abcd",
        rating: 1,
        capacity: 11,   // here it is 10 litres
    },
    {
        id: 18,
        location: "cfff",
        rating: 2,
        capacity: 12,   // here it is 10 litres
    },
    {
        id: 19,
        location: "abc",
        rating: 4.5,
        capacity: 10,   // here it is 10 litres
    },
    {
        id: 20,
        location: "abcd",
        rating: 1,
        capacity: 11,   // here it is 10 litres
    }
]

const SearchScreen = ( props ) => {

    const [dispData, setDispData] = useState(fetchedData);

    const handleSearch = (value) => {
      if (value.length === 0) {
        setDispData(fetchedData);
      }
  
      const filteredData = fetchedData.filter((item) =>
        item.location.toLowerCase().includes(value.toLowerCase())
      );
  
      if (filteredData.length === 0) {
        setDispData(null);
      } else {
        setDispData(filteredData);
      }
    };

    return (
        <Screen style={styles.container}>
            <View style={styles.topSection}>
                <MaterialCommunityIcons name="map-marker-radius-outline" size={30} />

                <AppText> {"{"} Collection center - Address {"}"} </AppText>
            </View>

            <View style={styles.middleSection}>
                <SearchBox dummyData={fetchedData} onChangeText={handleSearch} />

                {
                    dispData === null ?
                    (<AppText style={styles.error}>Could Not find the item</AppText>) :
                    (<FlatList
                        style={styles.list}
                        data={dispData}
                        renderItem={({ item }) => <SearchCard item={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />)
                }
            </View>

            <View style={styles.middleSection}>
                {/* <AppText>hi</AppText> */}
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    topSection: {
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
    },

    error: {
        textAlign: "center",
        padding: 20,
        fontSize: 20,
        color: colors.danger,
        fontWeight: "600",
    },

    list: {
        height: Dimensions.get('window').height * 0.8,
    },
});

export default SearchScreen;
