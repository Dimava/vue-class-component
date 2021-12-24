/**
 * Public APIs
 */

export { Vue, ClassComponentHooks } from './vue'

export { Options, createDecorator, mixins, setup } from './helpers'

export { prop } from './props'

export { makePropClass } from './props-definition'

/**
 * Other types
 */

export {
  VueBase,
  VueMixin,
  VueStatic,
  VueConstructor,
  PublicProps,
} from './vue'

export {
  PropOptions,
  PropOptionsWithDefault,
  PropOptionsWithRequired,
  WithDefault,
  VueWithProps,
  DefaultFactory,
  DefaultKeys,
  ExtractDefaultProps,
  ExtractProps,
} from './props'

export {
  VueDecorator,
  MixedVueBase,
  UnionToIntersection,
  ExtractInstance,
  UnwrapSetupValue,
  UnwrapPromise,
} from './helpers'

export {
  ConstructPropClass,
  PropsDefinition,
  ValidPropDefinition,
  Constructor,
  ExtractPropDefault,
  ExtractPropType,
  ExtractPropTypeSingle,
  SimpleType,
} from './props-definition'
