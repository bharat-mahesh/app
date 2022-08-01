module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],    // added by Sushil on 01-08-2022 at 10:08pm IST. This line is necessary to be added in babel.config.js to remove the error: "Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated's babel plugin?". Also, this plugin must be present in the very bottom in the babel file.
  };
};
