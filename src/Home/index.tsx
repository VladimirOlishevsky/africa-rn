import {
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';
import { Divider } from 'react-native-elements';
import React from 'react';
import { styles } from './rawStyles';
import { title } from './config';
import { Slider } from '../Slider'
import { slides } from '../config';
import { TextInput, Button } from 'react-native-paper';


declare function require(path: string): any;
const themePic = require('../../assets/images/theme.jpg');
const theme2Pic = require('../../assets/images/theme2.png')


export const Home = () => {

    return (
        <ScrollView>
            {/* <View
                style={styles.imageContainer}
            >
                <Image source={theme2Pic}
                    style={styles.image}
                />
            </View> */}
            {/* <View style={styles.titleBlock}>
                <Text style={styles.title}> {title.toUpperCase()}</Text>
            </View> */}
            <View style={styles.container}>
                <View
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    <Button
                        style={styles.buttonCountries}
                        labelStyle={styles.buttonCountriesLabel}
                        color='#ff9f0a'
                        mode="contained"
                    // onPress={() => storeInstance.fetchCountries(value)}
                    >
                        Countries
                     </Button>
                    <Button
                        style={styles.buttonCapitals}
                        labelStyle={styles.buttonCapitalsLabel}
                        color='#fff'
                        mode="contained"
                    //onPress={() => storeInstance.fetchCountries(value)}
                    >
                        Capitals
                    </Button>
                </View>
                <Button
                    style={styles.buttonSearch}
                    labelStyle={styles.buttonSearchLabel}
                    color='#313133'
                    icon='magnify'
                    mode="contained"
                // onPress={() => storeInstance.fetchCountries(value)}
                >
                    Search
                 </Button>

                {/* <View>
                    <View >
                        <Text style={styles.contentTitle}>
                            Some Facts about Africa
                    </Text>
                    </View>
                    <View>
                        <Text style={styles.contentText}>
                            Africa is the second-largest continent in the world in both area and population.
                            It is an almost entirely isolated landmass with only a small land bridge in the northeast,
                            connecting the African Mainland with Western Asia.
                        </Text>
                    </View>
                </View>
                <Divider style={styles.divider} />
                <View>
                    <View>
                        <Text style={styles.contentTitle}>
                            How many countries are there in Africa?
                    </Text>
                    </View>
                    <View>
                        <Text style={styles.contentText}>
                            48 countries share the area of mainland Africa, plus six island nations are considered to be part of the continent.
                            All in all, there are 54 sovereign African countries and two disputed areas, namely Somaliland and Western Sahara
                            (see the list of African countries below).
                        </Text>
                    </View>
                </View>

                <Slider slides={slides}/> */}
            </View>
        </ScrollView>
    )
}
