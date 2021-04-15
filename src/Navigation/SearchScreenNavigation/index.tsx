import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { Home } from '../../Home';
// import { ContinentCountries } from '../../Home/ContinentCountries';
// import { SeparatePage } from '../../sepa';
// import { Country } from './../../Home/Country/index';
import { SearchScreen } from '../../SearchPage';
import { RegionalCountries } from '../../SearchPage/RegionalCountries';


const Stack = createStackNavigator();

export const SearchScreenNavigation = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="SearchPage" component={SearchScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RegionalCountries" component={RegionalCountries} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="Country" component={Country} options={{ headerShown: false }}/>
        <Stack.Screen name="Test" component={SeparatePage} /> */}
      </Stack.Navigator>
    );
  }