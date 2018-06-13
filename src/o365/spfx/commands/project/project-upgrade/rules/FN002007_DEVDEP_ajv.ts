import { DependencyRule } from "./DependencyRule";

export class FN002007_DEVDEP_ajv extends DependencyRule {
  constructor(packageVersion: string) {
    /* istanbul ignore next */
    super('ajv', packageVersion, true);
  }

  get id(): string {
    return 'FN002007';
  }
}