import { FlatList, StyleSheet } from 'react-native';
import {DataStore}   from 'aws-amplify';

import AppText from '../../components/ui/Text';
import ExcludeStatusBar from '../../components/ui/ExcludeStatusBar';
import CategoryListItem from '../../components/CategoryListItem';
import ListItemSeparator from '../../components/ui/ListItemSeparator';
import Screen from '../../components/Screen';
import { payDetails } from '../../../src/models';

import colors from '../../configs/colors';
import { useEffect, useState } from 'react';

// import { milk } from '../../mock/categoryListData';
// import useApi from '../../hooks/useApi';
// import { useEffect } from 'react';
// import listingsApi from '../../api/listingsApi';

// garbage
//     itemType == "milk" ? milk :
//     (
//         itemType === "butter" ? butter :
//         (
//             itemType === "milk_powder" ? milk_powder :
//             (
//                 itemType === "paneer" ? paneer :
//                 (
//                     itemType === "cheese" ? cheese : butter_milk
//                 )
//             )
//         )
//     )
// }


const CategoryItemListingsScreen = ( { route } ) => {
    const{listings, setListing}=useState<payDetails>([])

    

    useEffect(()=>{
       DataStore.query(payDetails).then(setListing)
        }
    ,[]);

    const fetchListings = listings;

    // const fetchCat = useApi(listingsApi.getListings);

    // useEffect(() => {
    //     fetchCat.request();
    // }, []);

    return (
        <Screen>
            <ExcludeStatusBar />
            
            <AppText style={styles.itemName}>
                {route.params.cardSelected}
            </AppText>

            <FlatList
                data={fetchListings}
                ItemSeparatorComponent={ListItemSeparator}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CategoryListItem item={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

    itemName: {
        color: colors.primary,
        fontSize: 30,
        fontFamily: "Nunito_Bold",
        padding: 20,
    },
});

export default CategoryItemListingsScreen;