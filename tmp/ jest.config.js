/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    // This is necessary because next.js forces { "jsx": "preserve" }, but ts-jest appears to require { "jsx": "react" }
    'ts-jest': {
      tsconfig: {
        "tsconfig": "./tsconfig.test.json"
      },
    },
  },
};