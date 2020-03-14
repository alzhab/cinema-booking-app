import React, { useEffect } from "react";
import { Slider } from "organisms";
import AuthHOC from "../AuthHOC";

const Welcome = ({ infoList, setFirstRun }) => {
  const goToSignIn = () => {
    setFirstRun(false);
  };

  // Находим последнию страницу
  // В ней должа быть кнопка для перехда на страницу авторизации
  infoList[infoList.length - 1].button.onPress = goToSignIn;

  return <Slider data={infoList} />;
};

export default AuthHOC(Welcome, null, true);
