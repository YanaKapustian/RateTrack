import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TabNavigator} from './src/navigation/Router';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  const onReady = useCallback(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer onReady={onReady}>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
