const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Guarda el resolver original (puede ser undefined)
const originalResolveRequest = config.resolver.resolveRequest;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  // En web, sustituye 'react-native-maps' por el stub
  if (platform === 'web' && moduleName === 'react-native-maps') {
    return {
      type: 'sourceFile',
      filePath: require.resolve('./stubs/react-native-maps.web.js'),
    };
  }
  // Fallback al resolver original / por defecto
  if (originalResolveRequest) {
    return originalResolveRequest(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
