// type AssertTypeEqual<T, V extends T, Z extends V> = T & V & Z;

// type Test4 = {
// 	// solid ideas
// 	strA: [StringConstructor], // required string
// 	strB: [StringConstructor, null], // optional string
// 	strC: [StringConstructor, 'wasd'], // string with default
// 	strD: [null, StringConstructor], // required nullable string

// 	enuA: ['a', 'b', 'c'], // required enum
// 	enuB: ['a', 'b', 'c', null], // optional enum
// 	enuC: ['a', 'b', 'c', undefined, 'c'], // enum with default, written as ['a', 'b', 'c', , 'c']
// 	enuD: [null, 'a', 'b', 'c'], // required nullable enum
// }
// type Test4_types = ExtractTypesIn<Test4>;
// type Test4_types_planned = {
// 	strA: string, // required string
// 	strB: string | null, // optional string
// 	strC: string, // string with default
// 	strD: string | null, // required nullable string

// 	enuA: 'a' | 'b' | 'c', // required enum
// 	enuB: 'a' | 'b' | 'c' | null, // optional enum
// 	enuC: 'a' | 'b' | 'c', // enum with default, written as ['a', 'b', 'c', , 'c']
// 	enuD: null | 'a' | 'b' | 'c', // required nullable enum
// };
// type Test4_def = ExtractDefaultsIn<Test4>;
// type Test4_def_planned = {
// 	strA: never, // required string
// 	strB: null, // optional string
// 	strC: 'wasd', // string with default
// 	strD: never, // required nullable string

// 	enuA: never, // required enum
// 	enuB: null, // optional enum
// 	enuC: 'c', // enum with default, written as ['a', 'b', 'c', , 'c']
// 	enuD: never, // required nullable enum
// };
// type _4t = AssertTypeEqual<Test4_types, Test4_types_planned, Test4_types>
// type _4d = AssertTypeEqual<Test4_def, Test4_def_planned, Test4_def>

// type Test4_unknown = {
// 	wutA: StringConstructor, // an optional string?
// 	wutB: 'wasd', // a string with default?
// 	wutC: ['wasd'], // a required const?
// 	wutD: () => {}, //
// 	wutE: [() => {}], // will this be treated as a constructor?
// 	wurF: [], // any?
// }
// type Test4_unknown_types = ExtractTypesIn<Test4_unknown>;
// type Test4_unknown_def = ExtractDefaultsIn<Test4_unknown>;

// type _4c = ConstructPropClass<Test4>;

// let test4: Test4 = {
// 	strA: [String], // required string
// 	strB: [String, null], // optional string
// 	strC: [String, 'wasd'], // string with default
// 	strD: [null, String], // required nullable string

// 	enuA: ['a', 'b', 'c'], // required enum
// 	enuB: ['a', 'b', 'c', null], // optional enum
// 	enuC: ['a', 'b', 'c', , 'c'], // enum with default, written as ['a', 'b', 'c', , 'c']
// 	enuD: [null, 'a', 'b', 'c'], // required nullable enum
// }
