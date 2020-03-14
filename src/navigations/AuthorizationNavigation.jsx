import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome, SignIn, SignUp, ResetPassword } from "screens";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";
import { AuthActions } from "screens/Authorization/AuthHOC/duck";

const Stack = createStackNavigator();

function AuthorizationNavigation({ isFirstRun, setFirstRun }) {
  // Проверка открывать ли Welcome page
  useEffect(() => {
    const asyncFunctionData = async () => {
      try {
        const isNotFirstRun = await AsyncStorage.getItem("isNotFirstRun");
        // Если isNotFirstRun === null значит его еще не задали
        // что значит это первый запуск
        if (isNotFirstRun === null) {
          setFirstRun(true);
        }
      } catch {}
    };
    asyncFunctionData();
  }, []);

  return (
    <Stack.Navigator headerMode="none">
      {isFirstRun ? (
        <Stack.Screen name="Welcome" component={Welcome} />
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </>
      )}
    </Stack.Navigator>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { isFirstRun } = state.authReducer;

  return {
    isFirstRun
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFirstRun: val => dispatch(AuthActions.AuthSetFirstRun(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizationNavigation);
