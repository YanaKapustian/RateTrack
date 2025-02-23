This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# App Overview

RateTrack enables users to:

- View exchange rates for multiple currencies with respect to a base currency (EUR), as API doesn't allow to change base currency for free subscription.
- Save favorite currencies for quick reference.
- Search and filter currencies.
- Use offline mode to access previously fetched exchange rates.

The app’s key goal is to provide users with a smooth experience when tracking their favorite currencies, whether online or offline.

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

Install dependencies:

```sh
# Using npm
npm i
# OR using Yarn
yarn
```

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

# Technical Description

The app follows a simple architecture with the main focus on React Native components and Redux for state management. The architecture is designed to be scalable and maintainable by separating different concerns, such as:

- Components for UI rendering (CurrencyRow, SearchInput)
- Screens for logical separation (ExploreScreen, FavoritesScreen)
- Redux for managing the app’s global state (favorites list)
- Utils for storage and error handling
- API calls to fetch and store exchange rates

There two bottom tabs: Favorites and Explore for simple use.The core components of the app include:

- SearchInput: A component that allows users to search for currencies.
- CurrencyRow: A component that displays exchange rate information for a single currency.
- ExploreScreen: Displays a list of currencies and their exchange rates with the ability to search and filter.
- FavoritesScreen: Shows a list of favorite currencies and their current exchange rates.

_Redux Toolkit (RTK) Query_ is used for API fetching because:

- Automatic State Management: RTK Query manages API state without needing to write reducers or actions.
- Caching: It automatically caches data and reuses it, reducing unnecessary requests.
- Error and Loading States: Built-in support for managing loading, success, and error states.
- Declarative Syntax: Simple and clear API calls with minimal boilerplate.

# Offline Mode Implementation

Offline mode is implemented by using **MMKV**, which is the fastest key/value storage for React Native. It allows the app to store exchange rates in the local storage of the device. The app can fetch rates when online and display the last known rates when offline.

# The app uses several libraries, including:

- React Navigation: For navigation between screens.
- Redux: For state management, specifically to manage the favorites list.
- React Native SVG: For displaying SVG icons, such as the star for favoriting currencies.
- React Native Dotenv: To manage sensitive API keys securely.
- MMKV: Sync storage.
- React-native-bootsplash: To add custom bootsplash with the name of the application.

For fetching real-time exchange rates used _Fixer.io API_
