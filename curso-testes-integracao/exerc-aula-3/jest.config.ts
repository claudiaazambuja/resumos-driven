module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleDirectories: ["node_modules", "src"],
    transform: {
        ".+\\.ts$": "ts-jest"
    },
    testMathc: ["<rootDir>/testes/*.(test|spec).ts"],
}
