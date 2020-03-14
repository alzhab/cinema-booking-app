/* TODO Main Navigation (BottomTabBar): 

*/

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthorizationNavigation from "./AuthorizationNavigation";
import MainNavigator from "./MainNavigation";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";
import { AuthActions } from "screens/Authorization/AuthHOC/duck";

const Stack = createStackNavigator();

function Navigator({ user, setUser }) {
  useEffect(() => {
    const asyncFunctionData = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        console.log(user);
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
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen
            name="Authorization"
            component={AuthorizationNavigation}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state.authReducer;

  return {
    user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUser: user => dispatch(AuthActions.AuthSetUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
