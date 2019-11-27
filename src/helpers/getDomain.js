import { isProduction } from "./isProduction";

export const getDomain = () => {
  const prodUrl = "https://esn-server.herokuapp.com";
  const devUrl = "http://localhost:8080";
  if (isProduction()) {
    return prodUrl;
  }
  return devUrl;
};