import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {Star} from '../assets/svg/Star';
import {Search} from '../assets/svg/Search';
import {ExploreScreen} from '../screens/ExploreScreen';
import {FavoritesScreen} from '../screens/FavoritesScreen';

export type FavoritesTabStackParamList = {
  Favorites: undefined;
};

export type ExploreTabParamList = {
  Explore: undefined;
};

export type MainTabsParamList = {
  FavoritesTab: NavigatorScreenParams<FavoritesTabStackParamList> | undefined;
  ExploreTab: NavigatorScreenParams<ExploreTabParamList> | undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: COLORS.darkGreen,
      tabBarInactiveTintColor: COLORS.black,
      tabBarLabelStyle: styles.tabBarLabelStyle,
    }}>
    <Tab.Screen
      name="FavoritesTab"
      component={FavoritesScreen}
      options={{tabBarIcon: Star, title: 'Favorites'}}
    />
    <Tab.Screen
      name="ExploreTab"
      component={ExploreScreen}
      options={{
        tabBarIcon: Search,
        title: 'Explore',
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {flex: 1},
  tabBarLabelStyle: {
    fontWeight: '600',
    lineHeight: 16,
    fontSize: 12,
  },
});
