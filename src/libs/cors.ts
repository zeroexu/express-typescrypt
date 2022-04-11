import { CorsOptions } from "cors";

export default (): CorsOptions => {
  const { SETTINGS } = require("../libs/constants/keys");
  return {
    origin: function (origin: any, callback: any) {
      console.log("ORIGINI", origin);
      if (
        SETTINGS.WHITELIST.indexOf(origin) !== -1 ||
        (SETTINGS.NODE_ENV === "development" && (!origin || origin === "http://localhost:3001"))
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };
};
