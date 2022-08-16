import { FlatList, StyleSheet, View } from 'react-native';

import CategoryCard from '../../components/CategoryCard';
import Header from '../../components/ui/Header';
import Screen from '../../components/Screen';

import { categories } from '../../mock/categoryTypeData';
import routes from '../../navigation/routes';


const CategoryScreen = ( { navigation } ) => {

    const fetchedCategories = categories;

    return (
        <Screen style={styles.container}>
            <Header title="Home" />

            <FlatList
                data={fetchedCategories}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <CategoryCard
                        categoryItem={item}
                        onImagePress={() => {
                            // setCardSelected(item.cardName)
                            navigation.navigate( routes.CATEGORY_ITEM_LISTINGS , { cardSelected: item.cardName })
                        }}
                        onIconPress={() => {
                            console.log("Filter", item.title, "selected")
                        }}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

    categoryContainer: {
        flex: 1,
    },
});

export default CategoryScreen;