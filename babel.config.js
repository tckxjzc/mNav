module.exports={
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "android": "4.0",
                "ios":"8.0"
            }
        }],
        "@babel/preset-react"
    ],
    "plugins": [
        ["@babel/plugin-transform-object-assign"],
        ["@babel/plugin-syntax-dynamic-import"]
    ],
    "ignore": [
    ]
}