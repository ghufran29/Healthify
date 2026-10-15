import "react-native";

declare module "react-native" {
  interface ViewProps {
    /** React Native Web maps these values to HTML data attributes. */
    dataSet?: Record<string, string>;
  }
}
