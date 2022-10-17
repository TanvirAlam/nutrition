module.exports = {
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    transform: {
        "^.+\\.ts$": ["ts-jest", {"ts-jest": { tsconfig: "tsconfig.json"}}]
    },
    testMatch: [
        "**/src/**/*.spec.ts"
    ],
    testEnvironment: "node"
}