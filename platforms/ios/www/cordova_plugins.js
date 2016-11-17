cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.procoders.deezer.DeezerPlugin",
        "file": "plugins/com.procoders.deezer/www/DeezerPlugin.js",
        "pluginId": "com.procoders.deezer",
        "clobbers": [
            "cordova.plugins.DeezerPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "com.procoders.deezer": "0.0.3"
};
// BOTTOM OF METADATA
});