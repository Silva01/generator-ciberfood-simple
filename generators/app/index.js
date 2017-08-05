'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Bem vindo ' + chalk.red('generator-ciberfood-simple') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'titulo',
      message: 'Qual o Nome do Projeto',
      default: 'Ciberfood Template'
    },
    {
      type: 'input',
      name: 'versao',
      message: 'Qual a Versão do Projeto',
      default: '0.0.1'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('css/main.css'),
      this.destinationPath('css/main.css')
    );

    this.fs.copy(
      this.templatePath('img/.gitkeep'),
      this.destinationPath('img/.gitkeep')
    );

    this.fs.copy(
      this.templatePath('js/main.js'),
      this.destinationPath('js/main.js')
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        titulo: this.props.titulo,
        versao: this.props.versao
      }
    );

    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );

    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );

    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
  }

  install() {
    this.installDependencies();
  }
};
