import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "normalize.css";
import "@aws-amplify/ui-react/styles.css";
import "./index.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const theme = {
  name: "my-theme",
  tokens: {},
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AmplifyProvider theme={theme}>
      <App />
    </AmplifyProvider>
  </React.StrictMode>
);
