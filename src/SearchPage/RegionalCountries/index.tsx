import React from 'react';
import { View, Image, Text, ScrollView } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { observer } from 'mobx-react';
import { BackButton } from '../../Navigation/BackButton/index';
import { styles } from './rawStyles';
import { useNavigation } from '@react-navigation/native';
import { getRootStore } from '../../store';


export const RegionalCountries = observer(({ route }: any): JSX.Element => {

    const { countryStore, regionalBlocksStore } = getRootStore()
    const navigation = useNavigation();

    const actionByClick = (code: string) => {
        countryStore.fetchCountryByCode(code);
        navigation.navigate("Country", { name: code });
    }
    return (

        <View style={styles.scrollView}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.mainTitle}>
                    {route.params.name}
                </Text>
            </View>
            <ScrollView>
               
                {regionalBlocksStore.countries.map((el, index: number) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => actionByClick(el.alpha2Code)}
                            style={styles.imageWrapper}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: el.flag
                                }}
                            />
                            <Text style={styles.titles}>
                                {el.name}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
})
