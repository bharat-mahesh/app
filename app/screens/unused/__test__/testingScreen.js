import { View, StyleSheet, FlatList } from 'react-native';

import { milk, butter, milk_powder, paneer, cheese, butter_milk } from '../../../mock/categoryListData';

import ImporterListItem from '../../../components/ImporterListItem';
import Screen from '../../../components/Screen';
import AppText from '../../../components/ui/Text';

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

const CategoryListingScreen = () => {

    // const itemType = route.params.cardSelected;
    // console.log(itemType);

    const fetchedData = milk;
    // = apiCall and fetch data of cardSelected;

    return (
        <Screen style={styles.container}>
            <AppText>hi</AppText>

            <FlatList
                data={fetchedData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ImporterListItem item={item} />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

export default CategoryListingScreen;
