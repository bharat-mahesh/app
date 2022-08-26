import { FlatList, StyleSheet } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import Header from '../../components/ui/Header';
import Screen from '../../components/Screen';

import { categories } from '../../mock/categoryTypeData';
import routes from '../../navigation/routes';
import { Milk } from '../../../src/models';
import React, { useEffect } from 'react';



const CategoryScreen = ( { navigation } ) => {
    // const[milk,setMilk]=React.useState<Milk>([])
    // try {

    //     const getmilk=async()=>{
    //         const results = await DataStore.query(Milk)
    //         setMilk(results)
    //         useEffect(()=>{
    //             getmilk();
    //             }
    //         ,[])
    //     }
        
    // } catch (error) {
    //     console.log(error);
    // }
   

    
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