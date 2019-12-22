import { EXECUTE_METADATA_KEY } from './execute.decorator';
import { ExecuteSample } from './execute.sample';
import 'reflect-metadata';

function exec(): void {
  const obj = new ExecuteSample();

  for (const key of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))) {
    if (typeof obj[key] !== 'function') {
      continue;
    }
    if (!Reflect.getMetadataKeys(obj, key).some(m => m === EXECUTE_METADATA_KEY)) {
      continue;
    }
    obj[key]();
  }
}


exec();
