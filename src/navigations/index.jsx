import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthorizationNavigation from "./AuthorizationNavigation";
import AppNavigator from "./AppNavigation";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";
import { AppActions } from "screens/App/AppHOC/duck";

const Stack = createStackNavigator();

function Navigator({ user, setUser }) {
  // Проверка есть ли в AsyncStorage
  useEffect(() => {
    const asyncFunctionData = async () => {
      try {
        let user = await AsyncStorage.getItem("user");
        user = JSON.parse(user);
        // Если user есть, перенаправляем на Main
        if (user) {
          setUser(user);
        }
      } catch (e) {}
    };
    asyncFunctionData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {user ? (
          <Stack.Screen
            name="Main"
            component={AppNavigator}
            options={{
              animationEnabled: false
            }}
          />
        ) : (
          <Stack.Screen
            name="Authorization"
            options={{
              animationEnabled: false
            }}
            component={AuthorizationNavigation}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state.appReducer;

  return {
    user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUser: user => dispatch(AppActions.AppSetUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
