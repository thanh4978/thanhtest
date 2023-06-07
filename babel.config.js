module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ts', '.tsx', '.js', '.json'],
                alias: {
                    '@': './src',
                },
            },
        ],
        [
            'react-native-reanimated/plugin',
            {
                globals: ['__scanCodes'],
            },
        ],
    ],
};
