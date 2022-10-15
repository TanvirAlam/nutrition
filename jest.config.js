module.exports = {
    global: {
        "ts-jest": {
            tsConfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    testMatch: [
        "**/src/**/*.spec.ts"
    ],
    testEnvironment: "node"
}