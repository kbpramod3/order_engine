const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/__tests__"],
  moduleFileExtensions: ["ts", "js"],
  setupFilesAfterEnv: ["<rootDir>/__tests__/setup.ts"],
  globalTeardown: "<rootDir>/__tests__/teardown.ts",
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/__tests__/setup.ts",
    "<rootDir>/__tests__/teardown.ts",
    "<rootDir>/__tests__/worker/"
  ]
};