import { FlatList, StyleSheet } from 'react-native';

import AppText from '../../components/ui/Text';
import ExcludeStatusBar from '../../components/ui/ExcludeStatusBar';
import CategoryListItem from '../../components/CategoryListItem';
import ListItemSeparator from '../../components/ui/ListItemSeparator';
import Screen from '../../components/Screen';

import colors from '../../configs/colors';

import { milk } from '../../mock/categoryListData';

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

    const fetchedData = milk // change 'fetchedData' to api call when backend is connected
    // = apiCall and fetch data of cardSelected;

    return (
        <Screen>
            <ExcludeStatusBar />
            
            <AppText style={styles.itemName}>
                {route.params.cardSelected}
            </AppText>

            <FlatList
                data={fetchedData}
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