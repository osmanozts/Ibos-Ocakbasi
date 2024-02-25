import { Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator } from "react-native";
import { useAuth } from "../provider/auth-provider";
import HomeDashboard from "./home";

const index = () => {
  const { session, loading } = useAuth();
  console.log("session: ", session);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href={"/sign-in"} />;
  }

  return <HomeDashboard />;
};

export default index;
