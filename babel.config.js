module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        { envName: "ENVFILE", moduleName: "@env" },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
