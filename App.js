import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TopHeadlines from './screens/TopHeadlines'
import NewsPage from './screens/NewsPage'
import CategoryPage from './screens/CategorySelect'
import SearchNews from './screens/SearchNews'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          style={{ margin: 40 }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline'
              } else if (route.name === 'Search') {
                iconName = focused ? 'ios-list-box' : 'ios-list'
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            activeBackgroundColor: 'black',
            inactiveBackgroundColor: 'black',
            style: { paddingBottom: 0 },
            tabStyle: { paddingBottom: 34 },
          }}
        >
          <Tab.Screen name='Home' component={HomeStack} />
          <Tab.Screen name='Search' component={SearchStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
      }}
    >
      <Stack.Screen name='Main' component={TopHeadlines} />
      <Stack.Screen name='News' component={NewsPage} />
      <Stack.Screen name='Category' component={CategoryPage} />
    </Stack.Navigator>
  )
}

function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 0,
        },
      }}
    >
      <Stack.Screen name='Main' component={SearchNews} />
      <Stack.Screen name='News' component={NewsPage} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40,
  },
})

export default App

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
