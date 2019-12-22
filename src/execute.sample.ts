import { Execute } from './execute.decorator';

export class ExecuteSample {
  @Execute()
  exec(): void {
    console.log('ExecuteSample - exec');
  }
}
