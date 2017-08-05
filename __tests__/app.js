'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ciberfood-simple:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'css/main.css',
      'img/.gitkeep',
      'js/main.js',
      'package.json',
      'gulpfile.js',
      'index.html',
      'README.md'
    ]);
  });
});
