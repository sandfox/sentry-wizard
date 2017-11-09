import { Answers } from 'inquirer';
import { green, nl } from '../Helper';
import { BaseStep } from './Step';

export class Result extends BaseStep {
  public async emit(answers: Answers) {
    this.debug(JSON.stringify(answers, null, '\t'));
    nl();
    if (this.argv.uninstall) {
      green('😢  Successfully removed Sentry for your project 😢');
    } else {
      green('🎉  Successfully setup Sentry for your project 🎉');
    }
    return {};
  }
}
