// import { PropType } from 'vue'
// import { makePropClass, prop, PropsDefinition, Vue } from '../src'
// import { ConstructPropClass, ConstructSingleOption, ExtractPropDefault, ExtractPropType, ExtractPropTypeSingle } from '../src/props-definition';

// describe('props-definitions', () => {
// 	it('types definitions correctly', () => {
// 		const Props = {
// 			strA!: [String], // required string
// 			strB: [String, null], // optional string
// 			strC: [String, 'wasd'], // string with default
// 			strD!: [null, String], // required nullable string

// 			// enuA: ['a', 'b', 'c'], // required enum
// 			// enuB: ['a', 'b', 'c', null], // optional enum
// 			// enuC: ['a', 'b', 'c', , 'c'], // enum with default, written as ['a', 'b', 'c', , 'c']
// 			// enuD: [null, 'a', 'b', 'c'], // required nullable enum

// 			// somA: [String, Boolean, Number, Date],
// 			// somB: [Date],
// 			// somC: [Date, null],
// 			// somD: [null, Date],
// 		} as const;
// 		type J = typeof Props.strC;
// 		type _ = J extends readonly (infer V)[] ? V : 0;
// 		type _t = [ExtractPropType<J>, ExtractPropDefault<J>, ExtractPropTypeSingle<any>];
// 		equals<ConstructSingleOption<typeof Props.strB>, null>(true);

// 		type X = readonly [1, 2, 3];
// 		type Y = 123;
// 		type Q = [1, 2, 3];
// 		type Z<T> = T extends readonly (infer V)[] ? V : unknown;
// 		type _X = Z<X>;
// 		type _Y = Z<Y>;
// 		type _Q = Z<Q>;

// 		type _C = ConstructPropClass<typeof Props>

// 	})
// 	it('types component props', () => {

// 		class Person {
// 			name = 'wasd';
// 			age?: number;
// 		}

// 		const Props = {
// 			strA: [String], // required string
// 			strB: [String, null], // optional string
// 			strC: [String, 'wasd'], // string with default
// 			strD: [null, String], // required nullable string

// 			enuA: ['a', 'b', 'c'], // required enum
// 			enuB: ['a', 'b', 'c', null], // optional enum
// 			enuC: ['a', 'b', 'c', , 'c'], // enum with default, written as ['a', 'b', 'c', , 'c']
// 			enuD: [null, 'a', 'b', 'c'], // required nullable enum

// 			somA: [String, Boolean, Number, Date],
// 			somB: [Person],
// 			somC: [Person, null],
// 			somD: [null, Person],
// 		} as const;

// 		class App extends Vue.with(makePropClass(Props)) {
// 			mounted() {
// 				const vm = this

// 				equals<typeof vm.strA, string>(true);
// 				equals<typeof vm.strB, string>(true);
// 				equals<typeof vm.strC, string>(true);
// 				equals<typeof vm.strD, string>(true);
// 				equals<typeof vm.enuA, string>(true);
// 				equals<typeof vm.enuB, string>(true);
// 				equals<typeof vm.enuC, string>(true);
// 				equals<typeof vm.enuD, string>(true);

// 				equals<typeof vm.foo, string>(true)
// 				equals<typeof vm.bar, number | undefined>(true)
// 				equals<typeof vm.baz, boolean>(true)
// 				equals<typeof vm.qux, Person>(true)
// 				equals<typeof vm.optional, Person | undefined>(true)
// 				equals<typeof vm.required, string>(true)
// 				equals<typeof vm.$props.foo, string>(true)
// 				equals<typeof vm.$props.bar, number | undefined>(true)
// 				equals<typeof vm.$props.baz, boolean | undefined>(true)
// 				equals<typeof vm.$props.qux, Person | undefined>(true)
// 				equals<typeof vm.$props.optional, Person | undefined>(true)
// 				equals<typeof vm.$props.required, string>(true)

// 				// @ts-expect-error
// 				vm.notExists
// 				// @ts-expect-error
// 				vm.$props.notExists
// 			}
// 		}
// 	})
// })

// // type AssertTypeEqual<T, V extends T, Z extends V> = T & V & Z;

// // type Test4 = {
// // 	// solid ideas
// // 	strA: [StringConstructor], // required string
// // 	strB: [StringConstructor, null], // optional string
// // 	strC: [StringConstructor, 'wasd'], // string with default
// // 	strD: [null, StringConstructor], // required nullable string

// // 	enuA: ['a', 'b', 'c'], // required enum
// // 	enuB: ['a', 'b', 'c', null], // optional enum
// // 	enuC: ['a', 'b', 'c', undefined, 'c'], // enum with default, written as ['a', 'b', 'c', , 'c']
// // 	enuD: [null, 'a', 'b', 'c'], // required nullable enum
// // }
// // type Test4_types = ExtractTypesIn<Test4>;
// // type Test4_types_planned = {
// // 	strA: string, // required string
// // 	strB: string | null, // optional string
// // 	strC: string, // string with default
// // 	strD: string | null, // required nullable string

// // 	enuA: 'a' | 'b' | 'c', // required enum
// // 	enuB: 'a' | 'b' | 'c' | null, // optional enum
// // 	enuC: 'a' | 'b' | 'c', // enum with default, written as ['a', 'b', 'c', , 'c']
// // 	enuD: null | 'a' | 'b' | 'c', // required nullable enum
// // };
// // type Test4_def = ExtractDefaultsIn<Test4>;
// // type Test4_def_planned = {
// // 	strA: never, // required string
// // 	strB: null, // optional string
// // 	strC: 'wasd', // string with default
// // 	strD: never, // required nullable string

// // 	enuA: never, // required enum
// // 	enuB: null, // optional enum
// // 	enuC: 'c', // enum with default, written as ['a', 'b', 'c', , 'c']
// // 	enuD: never, // required nullable enum
// // };
// // type _4t = AssertTypeEqual<Test4_types, Test4_types_planned, Test4_types>
// // type _4d = AssertTypeEqual<Test4_def, Test4_def_planned, Test4_def>

// // type Test4_unknown = {
// // 	wutA: StringConstructor, // an optional string?
// // 	wutB: 'wasd', // a string with default?
// // 	wutC: ['wasd'], // a required const?
// // 	wutD: () => {}, //
// // 	wutE: [() => {}], // will this be treated as a constructor?
// // 	wurF: [], // any?
// // }
// // type Test4_unknown_types = ExtractTypesIn<Test4_unknown>;
// // type Test4_unknown_def = ExtractDefaultsIn<Test4_unknown>;

// // type _4c = ConstructPropClass<Test4>;

// // let test4: Test4 = {
// // 	strA: [String], // required string
// // 	strB: [String, null], // optional string
// // 	strC: [String, 'wasd'], // string with default
// // 	strD: [null, String], // required nullable string

// // 	enuA: ['a', 'b', 'c'], // required enum
// // 	enuB: ['a', 'b', 'c', null], // optional enum
// // 	enuC: ['a', 'b', 'c', , 'c'], // enum with default, written as ['a', 'b', 'c', , 'c']
// // 	enuD: [null, 'a', 'b', 'c'], // required nullable enum
// // }
