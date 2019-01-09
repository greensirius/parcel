// @flow
'use strict';
import type {
  Transformer as TransformerOpts,
  Resolver as ResolverOpts,
  Bundler as BundlerOpts,
  Namer as NamerOpts,
  Loader as LoaderOpts,
  Packager as PackagerOpts,
  Optimizer as OptimizerOpts,
  Reporter as ReporterOpts
} from '@parcel/types';

export const CONFIG = Symbol('config');

export class Transformer {
  constructor(opts: TransformerOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Resolver {
  constructor(opts: ResolverOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Bundler {
  constructor(opts: BundlerOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Namer {
  constructor(opts: NamerOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Loader {
  constructor(opts: LoaderOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Packager {
  constructor(opts: PackagerOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Optimizer {
  constructor(opts: OptimizerOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Reporter {
  constructor(opts: ReporterOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}
