module.exports = {
  roots: ['<rootDir>/test', '<rootDir>/src'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: 'test\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
}
