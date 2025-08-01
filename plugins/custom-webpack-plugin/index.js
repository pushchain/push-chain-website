// /* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

module.exports = function () {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {},
          fallback: {
            assert: require.resolve('assert'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            stream: require.resolve('stream-browserify'),
            os: require.resolve('os-browserify/browser'),
            url: require.resolve('url'),
            zlib: require.resolve('browserify-zlib'),
            crypto: require.resolve('crypto-browserify'),
            vm: require.resolve('vm-browserify'),
            File: isServer ? false : require.resolve('form-data'),
          },
        },
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
        plugins: isServer
          ? [
              new webpack.ProvidePlugin({
                File: ['form-data', 'FormData'],
              }),
            ]
          : [],
      };
    },
  };
};
