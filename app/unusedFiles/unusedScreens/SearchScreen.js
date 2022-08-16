import { useState } from 'react';

import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";

import AppText from '../../components/ui/Text';
import SearchBox from '../unusedComponents/SearchBox';
import SearchCard from '../unusedComponents/SearchCard';
import Screen from '../../components/Screen';

import colors from '../../configs/colors';
import navigationTheme from '../../navigation/navigationTheme';

// Dummy Data
const fetchedData = [
    {
        id: 1,
        location: "Mumbai",
        rating: 4.1,
        capacity: 10,   // here it is 10 litres
    },
    {
        id: 2,
        location: "Thane",
        rating: 4.3,
        capacity: 30,   // here it is 10 litres
    },
    {
        id: 3,
        location: "Pune",
        rating: 4.5,
        capacity: 50,   // here it is 10 litres
    },
    {
        id: 4,
        location: "Nasik",
        rating: 4.7,
        capacity: 70,   // here it is 10 litres
    },
    {
        id: 5,
        location: "Nerul",
        rating: 4.9,
        capacity: 90,   // here it is 10 litres
    },
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
            {/* <View style={styles.topSection}>
                <MaterialCommunityIcons name="map-marker-radius-outline" size={30} />

                <AppText> {"{"} Collection center - Address {"}"} </AppText>

                <TouchableOpacity onPress={() => {
                    // navigationTheme.navigate("Help")
                    }}>
                    <Ionicons style={styles.wallet} name="wallet-outline" size={30} />
                </TouchableOpacity>
            </View> */}

            <View>
                <SearchBox dummyData={fetchedData} onChangeText={handleSearch} />
            </View>

            {
                dispData === null
                ?
                (<AppText style={styles.error}>Could Not find the item</AppText>)
                :
                (<FlatList
                    data={dispData}
                    renderItem={({ item }) => <SearchCard item={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />)
            }
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    topSection: {
        alignItems: "center",
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between"
    },

    error: {
        textAlign: "center",
        padding: 20,
        fontSize: 20,
        color: colors.danger,
        fontWeight: "600",
    },
});

export default SearchScreen;