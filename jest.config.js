module.exports = {
  clearMocks: true,
  preset: "ts-jest",
  setupFilesAfterEnv: ["setupTests.ts"],
  testEnvironment: "jsdom",
};
