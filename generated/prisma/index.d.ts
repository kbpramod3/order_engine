
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderEvent
 * 
 */
export type OrderEvent = $Result.DefaultSelection<Prisma.$OrderEventPayload>
/**
 * Model OrderFailure
 * 
 */
export type OrderFailure = $Result.DefaultSelection<Prisma.$OrderFailurePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderType: {
  market: 'market',
  limit: 'limit',
  sniper: 'sniper'
};

export type OrderType = (typeof OrderType)[keyof typeof OrderType]


export const OrderStatus: {
  pending: 'pending',
  routing: 'routing',
  building: 'building',
  submitted: 'submitted',
  confirmed: 'confirmed',
  failed: 'failed'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const DexType: {
  RAYDIUM: 'RAYDIUM',
  METEORA: 'METEORA'
};

export type DexType = (typeof DexType)[keyof typeof DexType]

}

export type OrderType = $Enums.OrderType

export const OrderType: typeof $Enums.OrderType

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type DexType = $Enums.DexType

export const DexType: typeof $Enums.DexType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.order.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderEvent`: Exposes CRUD operations for the **OrderEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderEvents
    * const orderEvents = await prisma.orderEvent.findMany()
    * ```
    */
  get orderEvent(): Prisma.OrderEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderFailure`: Exposes CRUD operations for the **OrderFailure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderFailures
    * const orderFailures = await prisma.orderFailure.findMany()
    * ```
    */
  get orderFailure(): Prisma.OrderFailureDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Order: 'Order',
    OrderEvent: 'OrderEvent',
    OrderFailure: 'OrderFailure'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "order" | "orderEvent" | "orderFailure"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderEvent: {
        payload: Prisma.$OrderEventPayload<ExtArgs>
        fields: Prisma.OrderEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          findFirst: {
            args: Prisma.OrderEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          findMany: {
            args: Prisma.OrderEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>[]
          }
          create: {
            args: Prisma.OrderEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          createMany: {
            args: Prisma.OrderEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>[]
          }
          delete: {
            args: Prisma.OrderEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          update: {
            args: Prisma.OrderEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          deleteMany: {
            args: Prisma.OrderEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>[]
          }
          upsert: {
            args: Prisma.OrderEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          aggregate: {
            args: Prisma.OrderEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderEvent>
          }
          groupBy: {
            args: Prisma.OrderEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderEventCountArgs<ExtArgs>
            result: $Utils.Optional<OrderEventCountAggregateOutputType> | number
          }
        }
      }
      OrderFailure: {
        payload: Prisma.$OrderFailurePayload<ExtArgs>
        fields: Prisma.OrderFailureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFailureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFailureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload>
          }
          findFirst: {
            args: Prisma.OrderFailureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFailureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload>
          }
          findMany: {
            args: Prisma.OrderFailureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload>[]
          }
          create: {
            args: Prisma.OrderFailureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload>
          }
          createMany: {
            args: Prisma.OrderFailureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderFailureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload>[]
          }
          delete: {
            args: Prisma.OrderFailureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload>
          }
          update: {
            args: Prisma.OrderFailureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload>
          }
          deleteMany: {
            args: Prisma.OrderFailureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderFailureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderFailureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload>[]
          }
          upsert: {
            args: Prisma.OrderFailureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFailurePayload>
          }
          aggregate: {
            args: Prisma.OrderFailureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderFailure>
          }
          groupBy: {
            args: Prisma.OrderFailureGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderFailureGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderFailureCountArgs<ExtArgs>
            result: $Utils.Optional<OrderFailureCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    order?: OrderOmit
    orderEvent?: OrderEventOmit
    orderFailure?: OrderFailureOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    events: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | OrderCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    amount: Decimal | null
    executedPrice: Decimal | null
    limitPrice: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    amount: Decimal | null
    executedPrice: Decimal | null
    limitPrice: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    type: $Enums.OrderType | null
    tokenIn: string | null
    tokenOut: string | null
    amount: Decimal | null
    status: $Enums.OrderStatus | null
    dexUsed: $Enums.DexType | null
    executedPrice: Decimal | null
    txHash: string | null
    limitPrice: Decimal | null
    launchCondition: string | null
    poolAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    type: $Enums.OrderType | null
    tokenIn: string | null
    tokenOut: string | null
    amount: Decimal | null
    status: $Enums.OrderStatus | null
    dexUsed: $Enums.DexType | null
    executedPrice: Decimal | null
    txHash: string | null
    limitPrice: Decimal | null
    launchCondition: string | null
    poolAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    type: number
    tokenIn: number
    tokenOut: number
    amount: number
    status: number
    dexUsed: number
    executedPrice: number
    txHash: number
    limitPrice: number
    launchCondition: number
    poolAddress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    amount?: true
    executedPrice?: true
    limitPrice?: true
  }

  export type OrderSumAggregateInputType = {
    amount?: true
    executedPrice?: true
    limitPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    type?: true
    tokenIn?: true
    tokenOut?: true
    amount?: true
    status?: true
    dexUsed?: true
    executedPrice?: true
    txHash?: true
    limitPrice?: true
    launchCondition?: true
    poolAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    type?: true
    tokenIn?: true
    tokenOut?: true
    amount?: true
    status?: true
    dexUsed?: true
    executedPrice?: true
    txHash?: true
    limitPrice?: true
    launchCondition?: true
    poolAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    type?: true
    tokenIn?: true
    tokenOut?: true
    amount?: true
    status?: true
    dexUsed?: true
    executedPrice?: true
    txHash?: true
    limitPrice?: true
    launchCondition?: true
    poolAddress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    type: $Enums.OrderType
    tokenIn: string
    tokenOut: string
    amount: Decimal
    status: $Enums.OrderStatus
    dexUsed: $Enums.DexType | null
    executedPrice: Decimal | null
    txHash: string | null
    limitPrice: Decimal | null
    launchCondition: string | null
    poolAddress: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    tokenIn?: boolean
    tokenOut?: boolean
    amount?: boolean
    status?: boolean
    dexUsed?: boolean
    executedPrice?: boolean
    txHash?: boolean
    limitPrice?: boolean
    launchCondition?: boolean
    poolAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Order$eventsArgs<ExtArgs>
    failures?: boolean | Order$failuresArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    tokenIn?: boolean
    tokenOut?: boolean
    amount?: boolean
    status?: boolean
    dexUsed?: boolean
    executedPrice?: boolean
    txHash?: boolean
    limitPrice?: boolean
    launchCondition?: boolean
    poolAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    tokenIn?: boolean
    tokenOut?: boolean
    amount?: boolean
    status?: boolean
    dexUsed?: boolean
    executedPrice?: boolean
    txHash?: boolean
    limitPrice?: boolean
    launchCondition?: boolean
    poolAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    type?: boolean
    tokenIn?: boolean
    tokenOut?: boolean
    amount?: boolean
    status?: boolean
    dexUsed?: boolean
    executedPrice?: boolean
    txHash?: boolean
    limitPrice?: boolean
    launchCondition?: boolean
    poolAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "tokenIn" | "tokenOut" | "amount" | "status" | "dexUsed" | "executedPrice" | "txHash" | "limitPrice" | "launchCondition" | "poolAddress" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Order$eventsArgs<ExtArgs>
    failures?: boolean | Order$failuresArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      events: Prisma.$OrderEventPayload<ExtArgs>[]
      failures: Prisma.$OrderFailurePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.OrderType
      tokenIn: string
      tokenOut: string
      amount: Prisma.Decimal
      status: $Enums.OrderStatus
      dexUsed: $Enums.DexType | null
      executedPrice: Prisma.Decimal | null
      txHash: string | null
      limitPrice: Prisma.Decimal | null
      launchCondition: string | null
      poolAddress: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Order$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Order$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    failures<T extends Order$failuresArgs<ExtArgs> = {}>(args?: Subset<T, Order$failuresArgs<ExtArgs>>): Prisma__OrderFailureClient<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly type: FieldRef<"Order", 'OrderType'>
    readonly tokenIn: FieldRef<"Order", 'String'>
    readonly tokenOut: FieldRef<"Order", 'String'>
    readonly amount: FieldRef<"Order", 'Decimal'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly dexUsed: FieldRef<"Order", 'DexType'>
    readonly executedPrice: FieldRef<"Order", 'Decimal'>
    readonly txHash: FieldRef<"Order", 'String'>
    readonly limitPrice: FieldRef<"Order", 'Decimal'>
    readonly launchCondition: FieldRef<"Order", 'String'>
    readonly poolAddress: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.events
   */
  export type Order$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    where?: OrderEventWhereInput
    orderBy?: OrderEventOrderByWithRelationInput | OrderEventOrderByWithRelationInput[]
    cursor?: OrderEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderEventScalarFieldEnum | OrderEventScalarFieldEnum[]
  }

  /**
   * Order.failures
   */
  export type Order$failuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
    where?: OrderFailureWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderEvent
   */

  export type AggregateOrderEvent = {
    _count: OrderEventCountAggregateOutputType | null
    _min: OrderEventMinAggregateOutputType | null
    _max: OrderEventMaxAggregateOutputType | null
  }

  export type OrderEventMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
  }

  export type OrderEventMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
  }

  export type OrderEventCountAggregateOutputType = {
    id: number
    orderId: number
    status: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type OrderEventMinAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    createdAt?: true
  }

  export type OrderEventMaxAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    createdAt?: true
  }

  export type OrderEventCountAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type OrderEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderEvent to aggregate.
     */
    where?: OrderEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderEvents to fetch.
     */
    orderBy?: OrderEventOrderByWithRelationInput | OrderEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderEvents
    **/
    _count?: true | OrderEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderEventMaxAggregateInputType
  }

  export type GetOrderEventAggregateType<T extends OrderEventAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderEvent[P]>
      : GetScalarType<T[P], AggregateOrderEvent[P]>
  }




  export type OrderEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderEventWhereInput
    orderBy?: OrderEventOrderByWithAggregationInput | OrderEventOrderByWithAggregationInput[]
    by: OrderEventScalarFieldEnum[] | OrderEventScalarFieldEnum
    having?: OrderEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderEventCountAggregateInputType | true
    _min?: OrderEventMinAggregateInputType
    _max?: OrderEventMaxAggregateInputType
  }

  export type OrderEventGroupByOutputType = {
    id: string
    orderId: string
    status: $Enums.OrderStatus
    metadata: JsonValue | null
    createdAt: Date
    _count: OrderEventCountAggregateOutputType | null
    _min: OrderEventMinAggregateOutputType | null
    _max: OrderEventMaxAggregateOutputType | null
  }

  type GetOrderEventGroupByPayload<T extends OrderEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderEventGroupByOutputType[P]>
            : GetScalarType<T[P], OrderEventGroupByOutputType[P]>
        }
      >
    >


  export type OrderEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderEvent"]>

  export type OrderEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderEvent"]>

  export type OrderEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderEvent"]>

  export type OrderEventSelectScalar = {
    id?: boolean
    orderId?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type OrderEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "status" | "metadata" | "createdAt", ExtArgs["result"]["orderEvent"]>
  export type OrderEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderEvent"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      status: $Enums.OrderStatus
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["orderEvent"]>
    composites: {}
  }

  type OrderEventGetPayload<S extends boolean | null | undefined | OrderEventDefaultArgs> = $Result.GetResult<Prisma.$OrderEventPayload, S>

  type OrderEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderEventCountAggregateInputType | true
    }

  export interface OrderEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderEvent'], meta: { name: 'OrderEvent' } }
    /**
     * Find zero or one OrderEvent that matches the filter.
     * @param {OrderEventFindUniqueArgs} args - Arguments to find a OrderEvent
     * @example
     * // Get one OrderEvent
     * const orderEvent = await prisma.orderEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderEventFindUniqueArgs>(args: SelectSubset<T, OrderEventFindUniqueArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderEventFindUniqueOrThrowArgs} args - Arguments to find a OrderEvent
     * @example
     * // Get one OrderEvent
     * const orderEvent = await prisma.orderEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderEventFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventFindFirstArgs} args - Arguments to find a OrderEvent
     * @example
     * // Get one OrderEvent
     * const orderEvent = await prisma.orderEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderEventFindFirstArgs>(args?: SelectSubset<T, OrderEventFindFirstArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventFindFirstOrThrowArgs} args - Arguments to find a OrderEvent
     * @example
     * // Get one OrderEvent
     * const orderEvent = await prisma.orderEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderEventFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderEvents
     * const orderEvents = await prisma.orderEvent.findMany()
     * 
     * // Get first 10 OrderEvents
     * const orderEvents = await prisma.orderEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderEventWithIdOnly = await prisma.orderEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderEventFindManyArgs>(args?: SelectSubset<T, OrderEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderEvent.
     * @param {OrderEventCreateArgs} args - Arguments to create a OrderEvent.
     * @example
     * // Create one OrderEvent
     * const OrderEvent = await prisma.orderEvent.create({
     *   data: {
     *     // ... data to create a OrderEvent
     *   }
     * })
     * 
     */
    create<T extends OrderEventCreateArgs>(args: SelectSubset<T, OrderEventCreateArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderEvents.
     * @param {OrderEventCreateManyArgs} args - Arguments to create many OrderEvents.
     * @example
     * // Create many OrderEvents
     * const orderEvent = await prisma.orderEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderEventCreateManyArgs>(args?: SelectSubset<T, OrderEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderEvents and returns the data saved in the database.
     * @param {OrderEventCreateManyAndReturnArgs} args - Arguments to create many OrderEvents.
     * @example
     * // Create many OrderEvents
     * const orderEvent = await prisma.orderEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderEvents and only return the `id`
     * const orderEventWithIdOnly = await prisma.orderEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderEventCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderEvent.
     * @param {OrderEventDeleteArgs} args - Arguments to delete one OrderEvent.
     * @example
     * // Delete one OrderEvent
     * const OrderEvent = await prisma.orderEvent.delete({
     *   where: {
     *     // ... filter to delete one OrderEvent
     *   }
     * })
     * 
     */
    delete<T extends OrderEventDeleteArgs>(args: SelectSubset<T, OrderEventDeleteArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderEvent.
     * @param {OrderEventUpdateArgs} args - Arguments to update one OrderEvent.
     * @example
     * // Update one OrderEvent
     * const orderEvent = await prisma.orderEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderEventUpdateArgs>(args: SelectSubset<T, OrderEventUpdateArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderEvents.
     * @param {OrderEventDeleteManyArgs} args - Arguments to filter OrderEvents to delete.
     * @example
     * // Delete a few OrderEvents
     * const { count } = await prisma.orderEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderEventDeleteManyArgs>(args?: SelectSubset<T, OrderEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderEvents
     * const orderEvent = await prisma.orderEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderEventUpdateManyArgs>(args: SelectSubset<T, OrderEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderEvents and returns the data updated in the database.
     * @param {OrderEventUpdateManyAndReturnArgs} args - Arguments to update many OrderEvents.
     * @example
     * // Update many OrderEvents
     * const orderEvent = await prisma.orderEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderEvents and only return the `id`
     * const orderEventWithIdOnly = await prisma.orderEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderEventUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderEvent.
     * @param {OrderEventUpsertArgs} args - Arguments to update or create a OrderEvent.
     * @example
     * // Update or create a OrderEvent
     * const orderEvent = await prisma.orderEvent.upsert({
     *   create: {
     *     // ... data to create a OrderEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderEvent we want to update
     *   }
     * })
     */
    upsert<T extends OrderEventUpsertArgs>(args: SelectSubset<T, OrderEventUpsertArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventCountArgs} args - Arguments to filter OrderEvents to count.
     * @example
     * // Count the number of OrderEvents
     * const count = await prisma.orderEvent.count({
     *   where: {
     *     // ... the filter for the OrderEvents we want to count
     *   }
     * })
    **/
    count<T extends OrderEventCountArgs>(
      args?: Subset<T, OrderEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderEventAggregateArgs>(args: Subset<T, OrderEventAggregateArgs>): Prisma.PrismaPromise<GetOrderEventAggregateType<T>>

    /**
     * Group by OrderEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderEventGroupByArgs['orderBy'] }
        : { orderBy?: OrderEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderEvent model
   */
  readonly fields: OrderEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderEvent model
   */
  interface OrderEventFieldRefs {
    readonly id: FieldRef<"OrderEvent", 'String'>
    readonly orderId: FieldRef<"OrderEvent", 'String'>
    readonly status: FieldRef<"OrderEvent", 'OrderStatus'>
    readonly metadata: FieldRef<"OrderEvent", 'Json'>
    readonly createdAt: FieldRef<"OrderEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderEvent findUnique
   */
  export type OrderEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter, which OrderEvent to fetch.
     */
    where: OrderEventWhereUniqueInput
  }

  /**
   * OrderEvent findUniqueOrThrow
   */
  export type OrderEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter, which OrderEvent to fetch.
     */
    where: OrderEventWhereUniqueInput
  }

  /**
   * OrderEvent findFirst
   */
  export type OrderEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter, which OrderEvent to fetch.
     */
    where?: OrderEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderEvents to fetch.
     */
    orderBy?: OrderEventOrderByWithRelationInput | OrderEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderEvents.
     */
    cursor?: OrderEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderEvents.
     */
    distinct?: OrderEventScalarFieldEnum | OrderEventScalarFieldEnum[]
  }

  /**
   * OrderEvent findFirstOrThrow
   */
  export type OrderEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter, which OrderEvent to fetch.
     */
    where?: OrderEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderEvents to fetch.
     */
    orderBy?: OrderEventOrderByWithRelationInput | OrderEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderEvents.
     */
    cursor?: OrderEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderEvents.
     */
    distinct?: OrderEventScalarFieldEnum | OrderEventScalarFieldEnum[]
  }

  /**
   * OrderEvent findMany
   */
  export type OrderEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter, which OrderEvents to fetch.
     */
    where?: OrderEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderEvents to fetch.
     */
    orderBy?: OrderEventOrderByWithRelationInput | OrderEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderEvents.
     */
    cursor?: OrderEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderEvents.
     */
    skip?: number
    distinct?: OrderEventScalarFieldEnum | OrderEventScalarFieldEnum[]
  }

  /**
   * OrderEvent create
   */
  export type OrderEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderEvent.
     */
    data: XOR<OrderEventCreateInput, OrderEventUncheckedCreateInput>
  }

  /**
   * OrderEvent createMany
   */
  export type OrderEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderEvents.
     */
    data: OrderEventCreateManyInput | OrderEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderEvent createManyAndReturn
   */
  export type OrderEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * The data used to create many OrderEvents.
     */
    data: OrderEventCreateManyInput | OrderEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderEvent update
   */
  export type OrderEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderEvent.
     */
    data: XOR<OrderEventUpdateInput, OrderEventUncheckedUpdateInput>
    /**
     * Choose, which OrderEvent to update.
     */
    where: OrderEventWhereUniqueInput
  }

  /**
   * OrderEvent updateMany
   */
  export type OrderEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderEvents.
     */
    data: XOR<OrderEventUpdateManyMutationInput, OrderEventUncheckedUpdateManyInput>
    /**
     * Filter which OrderEvents to update
     */
    where?: OrderEventWhereInput
    /**
     * Limit how many OrderEvents to update.
     */
    limit?: number
  }

  /**
   * OrderEvent updateManyAndReturn
   */
  export type OrderEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * The data used to update OrderEvents.
     */
    data: XOR<OrderEventUpdateManyMutationInput, OrderEventUncheckedUpdateManyInput>
    /**
     * Filter which OrderEvents to update
     */
    where?: OrderEventWhereInput
    /**
     * Limit how many OrderEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderEvent upsert
   */
  export type OrderEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderEvent to update in case it exists.
     */
    where: OrderEventWhereUniqueInput
    /**
     * In case the OrderEvent found by the `where` argument doesn't exist, create a new OrderEvent with this data.
     */
    create: XOR<OrderEventCreateInput, OrderEventUncheckedCreateInput>
    /**
     * In case the OrderEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderEventUpdateInput, OrderEventUncheckedUpdateInput>
  }

  /**
   * OrderEvent delete
   */
  export type OrderEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter which OrderEvent to delete.
     */
    where: OrderEventWhereUniqueInput
  }

  /**
   * OrderEvent deleteMany
   */
  export type OrderEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderEvents to delete
     */
    where?: OrderEventWhereInput
    /**
     * Limit how many OrderEvents to delete.
     */
    limit?: number
  }

  /**
   * OrderEvent without action
   */
  export type OrderEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
  }


  /**
   * Model OrderFailure
   */

  export type AggregateOrderFailure = {
    _count: OrderFailureCountAggregateOutputType | null
    _avg: OrderFailureAvgAggregateOutputType | null
    _sum: OrderFailureSumAggregateOutputType | null
    _min: OrderFailureMinAggregateOutputType | null
    _max: OrderFailureMaxAggregateOutputType | null
  }

  export type OrderFailureAvgAggregateOutputType = {
    attempts: number | null
  }

  export type OrderFailureSumAggregateOutputType = {
    attempts: number | null
  }

  export type OrderFailureMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    reason: string | null
    attempts: number | null
    lastAttempt: Date | null
  }

  export type OrderFailureMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    reason: string | null
    attempts: number | null
    lastAttempt: Date | null
  }

  export type OrderFailureCountAggregateOutputType = {
    id: number
    orderId: number
    reason: number
    attempts: number
    lastAttempt: number
    _all: number
  }


  export type OrderFailureAvgAggregateInputType = {
    attempts?: true
  }

  export type OrderFailureSumAggregateInputType = {
    attempts?: true
  }

  export type OrderFailureMinAggregateInputType = {
    id?: true
    orderId?: true
    reason?: true
    attempts?: true
    lastAttempt?: true
  }

  export type OrderFailureMaxAggregateInputType = {
    id?: true
    orderId?: true
    reason?: true
    attempts?: true
    lastAttempt?: true
  }

  export type OrderFailureCountAggregateInputType = {
    id?: true
    orderId?: true
    reason?: true
    attempts?: true
    lastAttempt?: true
    _all?: true
  }

  export type OrderFailureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderFailure to aggregate.
     */
    where?: OrderFailureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFailures to fetch.
     */
    orderBy?: OrderFailureOrderByWithRelationInput | OrderFailureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderFailureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFailures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFailures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderFailures
    **/
    _count?: true | OrderFailureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderFailureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderFailureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderFailureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderFailureMaxAggregateInputType
  }

  export type GetOrderFailureAggregateType<T extends OrderFailureAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderFailure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderFailure[P]>
      : GetScalarType<T[P], AggregateOrderFailure[P]>
  }




  export type OrderFailureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderFailureWhereInput
    orderBy?: OrderFailureOrderByWithAggregationInput | OrderFailureOrderByWithAggregationInput[]
    by: OrderFailureScalarFieldEnum[] | OrderFailureScalarFieldEnum
    having?: OrderFailureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderFailureCountAggregateInputType | true
    _avg?: OrderFailureAvgAggregateInputType
    _sum?: OrderFailureSumAggregateInputType
    _min?: OrderFailureMinAggregateInputType
    _max?: OrderFailureMaxAggregateInputType
  }

  export type OrderFailureGroupByOutputType = {
    id: string
    orderId: string
    reason: string
    attempts: number
    lastAttempt: Date
    _count: OrderFailureCountAggregateOutputType | null
    _avg: OrderFailureAvgAggregateOutputType | null
    _sum: OrderFailureSumAggregateOutputType | null
    _min: OrderFailureMinAggregateOutputType | null
    _max: OrderFailureMaxAggregateOutputType | null
  }

  type GetOrderFailureGroupByPayload<T extends OrderFailureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderFailureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderFailureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderFailureGroupByOutputType[P]>
            : GetScalarType<T[P], OrderFailureGroupByOutputType[P]>
        }
      >
    >


  export type OrderFailureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    reason?: boolean
    attempts?: boolean
    lastAttempt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderFailure"]>

  export type OrderFailureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    reason?: boolean
    attempts?: boolean
    lastAttempt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderFailure"]>

  export type OrderFailureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    reason?: boolean
    attempts?: boolean
    lastAttempt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderFailure"]>

  export type OrderFailureSelectScalar = {
    id?: boolean
    orderId?: boolean
    reason?: boolean
    attempts?: boolean
    lastAttempt?: boolean
  }

  export type OrderFailureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "reason" | "attempts" | "lastAttempt", ExtArgs["result"]["orderFailure"]>
  export type OrderFailureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderFailureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderFailureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderFailurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderFailure"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      reason: string
      attempts: number
      lastAttempt: Date
    }, ExtArgs["result"]["orderFailure"]>
    composites: {}
  }

  type OrderFailureGetPayload<S extends boolean | null | undefined | OrderFailureDefaultArgs> = $Result.GetResult<Prisma.$OrderFailurePayload, S>

  type OrderFailureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFailureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderFailureCountAggregateInputType | true
    }

  export interface OrderFailureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderFailure'], meta: { name: 'OrderFailure' } }
    /**
     * Find zero or one OrderFailure that matches the filter.
     * @param {OrderFailureFindUniqueArgs} args - Arguments to find a OrderFailure
     * @example
     * // Get one OrderFailure
     * const orderFailure = await prisma.orderFailure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFailureFindUniqueArgs>(args: SelectSubset<T, OrderFailureFindUniqueArgs<ExtArgs>>): Prisma__OrderFailureClient<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderFailure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFailureFindUniqueOrThrowArgs} args - Arguments to find a OrderFailure
     * @example
     * // Get one OrderFailure
     * const orderFailure = await prisma.orderFailure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFailureFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFailureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderFailureClient<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderFailure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFailureFindFirstArgs} args - Arguments to find a OrderFailure
     * @example
     * // Get one OrderFailure
     * const orderFailure = await prisma.orderFailure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFailureFindFirstArgs>(args?: SelectSubset<T, OrderFailureFindFirstArgs<ExtArgs>>): Prisma__OrderFailureClient<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderFailure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFailureFindFirstOrThrowArgs} args - Arguments to find a OrderFailure
     * @example
     * // Get one OrderFailure
     * const orderFailure = await prisma.orderFailure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFailureFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFailureFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderFailureClient<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderFailures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFailureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderFailures
     * const orderFailures = await prisma.orderFailure.findMany()
     * 
     * // Get first 10 OrderFailures
     * const orderFailures = await prisma.orderFailure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderFailureWithIdOnly = await prisma.orderFailure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFailureFindManyArgs>(args?: SelectSubset<T, OrderFailureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderFailure.
     * @param {OrderFailureCreateArgs} args - Arguments to create a OrderFailure.
     * @example
     * // Create one OrderFailure
     * const OrderFailure = await prisma.orderFailure.create({
     *   data: {
     *     // ... data to create a OrderFailure
     *   }
     * })
     * 
     */
    create<T extends OrderFailureCreateArgs>(args: SelectSubset<T, OrderFailureCreateArgs<ExtArgs>>): Prisma__OrderFailureClient<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderFailures.
     * @param {OrderFailureCreateManyArgs} args - Arguments to create many OrderFailures.
     * @example
     * // Create many OrderFailures
     * const orderFailure = await prisma.orderFailure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderFailureCreateManyArgs>(args?: SelectSubset<T, OrderFailureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderFailures and returns the data saved in the database.
     * @param {OrderFailureCreateManyAndReturnArgs} args - Arguments to create many OrderFailures.
     * @example
     * // Create many OrderFailures
     * const orderFailure = await prisma.orderFailure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderFailures and only return the `id`
     * const orderFailureWithIdOnly = await prisma.orderFailure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderFailureCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderFailureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderFailure.
     * @param {OrderFailureDeleteArgs} args - Arguments to delete one OrderFailure.
     * @example
     * // Delete one OrderFailure
     * const OrderFailure = await prisma.orderFailure.delete({
     *   where: {
     *     // ... filter to delete one OrderFailure
     *   }
     * })
     * 
     */
    delete<T extends OrderFailureDeleteArgs>(args: SelectSubset<T, OrderFailureDeleteArgs<ExtArgs>>): Prisma__OrderFailureClient<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderFailure.
     * @param {OrderFailureUpdateArgs} args - Arguments to update one OrderFailure.
     * @example
     * // Update one OrderFailure
     * const orderFailure = await prisma.orderFailure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderFailureUpdateArgs>(args: SelectSubset<T, OrderFailureUpdateArgs<ExtArgs>>): Prisma__OrderFailureClient<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderFailures.
     * @param {OrderFailureDeleteManyArgs} args - Arguments to filter OrderFailures to delete.
     * @example
     * // Delete a few OrderFailures
     * const { count } = await prisma.orderFailure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderFailureDeleteManyArgs>(args?: SelectSubset<T, OrderFailureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderFailures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFailureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderFailures
     * const orderFailure = await prisma.orderFailure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderFailureUpdateManyArgs>(args: SelectSubset<T, OrderFailureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderFailures and returns the data updated in the database.
     * @param {OrderFailureUpdateManyAndReturnArgs} args - Arguments to update many OrderFailures.
     * @example
     * // Update many OrderFailures
     * const orderFailure = await prisma.orderFailure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderFailures and only return the `id`
     * const orderFailureWithIdOnly = await prisma.orderFailure.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderFailureUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderFailureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderFailure.
     * @param {OrderFailureUpsertArgs} args - Arguments to update or create a OrderFailure.
     * @example
     * // Update or create a OrderFailure
     * const orderFailure = await prisma.orderFailure.upsert({
     *   create: {
     *     // ... data to create a OrderFailure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderFailure we want to update
     *   }
     * })
     */
    upsert<T extends OrderFailureUpsertArgs>(args: SelectSubset<T, OrderFailureUpsertArgs<ExtArgs>>): Prisma__OrderFailureClient<$Result.GetResult<Prisma.$OrderFailurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderFailures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFailureCountArgs} args - Arguments to filter OrderFailures to count.
     * @example
     * // Count the number of OrderFailures
     * const count = await prisma.orderFailure.count({
     *   where: {
     *     // ... the filter for the OrderFailures we want to count
     *   }
     * })
    **/
    count<T extends OrderFailureCountArgs>(
      args?: Subset<T, OrderFailureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderFailureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderFailure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFailureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderFailureAggregateArgs>(args: Subset<T, OrderFailureAggregateArgs>): Prisma.PrismaPromise<GetOrderFailureAggregateType<T>>

    /**
     * Group by OrderFailure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFailureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderFailureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderFailureGroupByArgs['orderBy'] }
        : { orderBy?: OrderFailureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderFailureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderFailureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderFailure model
   */
  readonly fields: OrderFailureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderFailure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderFailureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderFailure model
   */
  interface OrderFailureFieldRefs {
    readonly id: FieldRef<"OrderFailure", 'String'>
    readonly orderId: FieldRef<"OrderFailure", 'String'>
    readonly reason: FieldRef<"OrderFailure", 'String'>
    readonly attempts: FieldRef<"OrderFailure", 'Int'>
    readonly lastAttempt: FieldRef<"OrderFailure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderFailure findUnique
   */
  export type OrderFailureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
    /**
     * Filter, which OrderFailure to fetch.
     */
    where: OrderFailureWhereUniqueInput
  }

  /**
   * OrderFailure findUniqueOrThrow
   */
  export type OrderFailureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
    /**
     * Filter, which OrderFailure to fetch.
     */
    where: OrderFailureWhereUniqueInput
  }

  /**
   * OrderFailure findFirst
   */
  export type OrderFailureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
    /**
     * Filter, which OrderFailure to fetch.
     */
    where?: OrderFailureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFailures to fetch.
     */
    orderBy?: OrderFailureOrderByWithRelationInput | OrderFailureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderFailures.
     */
    cursor?: OrderFailureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFailures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFailures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderFailures.
     */
    distinct?: OrderFailureScalarFieldEnum | OrderFailureScalarFieldEnum[]
  }

  /**
   * OrderFailure findFirstOrThrow
   */
  export type OrderFailureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
    /**
     * Filter, which OrderFailure to fetch.
     */
    where?: OrderFailureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFailures to fetch.
     */
    orderBy?: OrderFailureOrderByWithRelationInput | OrderFailureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderFailures.
     */
    cursor?: OrderFailureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFailures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFailures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderFailures.
     */
    distinct?: OrderFailureScalarFieldEnum | OrderFailureScalarFieldEnum[]
  }

  /**
   * OrderFailure findMany
   */
  export type OrderFailureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
    /**
     * Filter, which OrderFailures to fetch.
     */
    where?: OrderFailureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFailures to fetch.
     */
    orderBy?: OrderFailureOrderByWithRelationInput | OrderFailureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderFailures.
     */
    cursor?: OrderFailureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFailures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFailures.
     */
    skip?: number
    distinct?: OrderFailureScalarFieldEnum | OrderFailureScalarFieldEnum[]
  }

  /**
   * OrderFailure create
   */
  export type OrderFailureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderFailure.
     */
    data: XOR<OrderFailureCreateInput, OrderFailureUncheckedCreateInput>
  }

  /**
   * OrderFailure createMany
   */
  export type OrderFailureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderFailures.
     */
    data: OrderFailureCreateManyInput | OrderFailureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderFailure createManyAndReturn
   */
  export type OrderFailureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * The data used to create many OrderFailures.
     */
    data: OrderFailureCreateManyInput | OrderFailureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderFailure update
   */
  export type OrderFailureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderFailure.
     */
    data: XOR<OrderFailureUpdateInput, OrderFailureUncheckedUpdateInput>
    /**
     * Choose, which OrderFailure to update.
     */
    where: OrderFailureWhereUniqueInput
  }

  /**
   * OrderFailure updateMany
   */
  export type OrderFailureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderFailures.
     */
    data: XOR<OrderFailureUpdateManyMutationInput, OrderFailureUncheckedUpdateManyInput>
    /**
     * Filter which OrderFailures to update
     */
    where?: OrderFailureWhereInput
    /**
     * Limit how many OrderFailures to update.
     */
    limit?: number
  }

  /**
   * OrderFailure updateManyAndReturn
   */
  export type OrderFailureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * The data used to update OrderFailures.
     */
    data: XOR<OrderFailureUpdateManyMutationInput, OrderFailureUncheckedUpdateManyInput>
    /**
     * Filter which OrderFailures to update
     */
    where?: OrderFailureWhereInput
    /**
     * Limit how many OrderFailures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderFailure upsert
   */
  export type OrderFailureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderFailure to update in case it exists.
     */
    where: OrderFailureWhereUniqueInput
    /**
     * In case the OrderFailure found by the `where` argument doesn't exist, create a new OrderFailure with this data.
     */
    create: XOR<OrderFailureCreateInput, OrderFailureUncheckedCreateInput>
    /**
     * In case the OrderFailure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderFailureUpdateInput, OrderFailureUncheckedUpdateInput>
  }

  /**
   * OrderFailure delete
   */
  export type OrderFailureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
    /**
     * Filter which OrderFailure to delete.
     */
    where: OrderFailureWhereUniqueInput
  }

  /**
   * OrderFailure deleteMany
   */
  export type OrderFailureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderFailures to delete
     */
    where?: OrderFailureWhereInput
    /**
     * Limit how many OrderFailures to delete.
     */
    limit?: number
  }

  /**
   * OrderFailure without action
   */
  export type OrderFailureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFailure
     */
    select?: OrderFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderFailure
     */
    omit?: OrderFailureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFailureInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrderScalarFieldEnum: {
    id: 'id',
    type: 'type',
    tokenIn: 'tokenIn',
    tokenOut: 'tokenOut',
    amount: 'amount',
    status: 'status',
    dexUsed: 'dexUsed',
    executedPrice: 'executedPrice',
    txHash: 'txHash',
    limitPrice: 'limitPrice',
    launchCondition: 'launchCondition',
    poolAddress: 'poolAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderEventScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type OrderEventScalarFieldEnum = (typeof OrderEventScalarFieldEnum)[keyof typeof OrderEventScalarFieldEnum]


  export const OrderFailureScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    reason: 'reason',
    attempts: 'attempts',
    lastAttempt: 'lastAttempt'
  };

  export type OrderFailureScalarFieldEnum = (typeof OrderFailureScalarFieldEnum)[keyof typeof OrderFailureScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'OrderType'
   */
  export type EnumOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderType'>
    


  /**
   * Reference to a field of type 'OrderType[]'
   */
  export type ListEnumOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'DexType'
   */
  export type EnumDexTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DexType'>
    


  /**
   * Reference to a field of type 'DexType[]'
   */
  export type ListEnumDexTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DexType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    type?: EnumOrderTypeFilter<"Order"> | $Enums.OrderType
    tokenIn?: StringFilter<"Order"> | string
    tokenOut?: StringFilter<"Order"> | string
    amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    dexUsed?: EnumDexTypeNullableFilter<"Order"> | $Enums.DexType | null
    executedPrice?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    txHash?: StringNullableFilter<"Order"> | string | null
    limitPrice?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    launchCondition?: StringNullableFilter<"Order"> | string | null
    poolAddress?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    events?: OrderEventListRelationFilter
    failures?: XOR<OrderFailureNullableScalarRelationFilter, OrderFailureWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    tokenIn?: SortOrder
    tokenOut?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dexUsed?: SortOrderInput | SortOrder
    executedPrice?: SortOrderInput | SortOrder
    txHash?: SortOrderInput | SortOrder
    limitPrice?: SortOrderInput | SortOrder
    launchCondition?: SortOrderInput | SortOrder
    poolAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: OrderEventOrderByRelationAggregateInput
    failures?: OrderFailureOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    type?: EnumOrderTypeFilter<"Order"> | $Enums.OrderType
    tokenIn?: StringFilter<"Order"> | string
    tokenOut?: StringFilter<"Order"> | string
    amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    dexUsed?: EnumDexTypeNullableFilter<"Order"> | $Enums.DexType | null
    executedPrice?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    txHash?: StringNullableFilter<"Order"> | string | null
    limitPrice?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    launchCondition?: StringNullableFilter<"Order"> | string | null
    poolAddress?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    events?: OrderEventListRelationFilter
    failures?: XOR<OrderFailureNullableScalarRelationFilter, OrderFailureWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    tokenIn?: SortOrder
    tokenOut?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dexUsed?: SortOrderInput | SortOrder
    executedPrice?: SortOrderInput | SortOrder
    txHash?: SortOrderInput | SortOrder
    limitPrice?: SortOrderInput | SortOrder
    launchCondition?: SortOrderInput | SortOrder
    poolAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    type?: EnumOrderTypeWithAggregatesFilter<"Order"> | $Enums.OrderType
    tokenIn?: StringWithAggregatesFilter<"Order"> | string
    tokenOut?: StringWithAggregatesFilter<"Order"> | string
    amount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    dexUsed?: EnumDexTypeNullableWithAggregatesFilter<"Order"> | $Enums.DexType | null
    executedPrice?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    txHash?: StringNullableWithAggregatesFilter<"Order"> | string | null
    limitPrice?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    launchCondition?: StringNullableWithAggregatesFilter<"Order"> | string | null
    poolAddress?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderEventWhereInput = {
    AND?: OrderEventWhereInput | OrderEventWhereInput[]
    OR?: OrderEventWhereInput[]
    NOT?: OrderEventWhereInput | OrderEventWhereInput[]
    id?: StringFilter<"OrderEvent"> | string
    orderId?: StringFilter<"OrderEvent"> | string
    status?: EnumOrderStatusFilter<"OrderEvent"> | $Enums.OrderStatus
    metadata?: JsonNullableFilter<"OrderEvent">
    createdAt?: DateTimeFilter<"OrderEvent"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderEventOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderEventWhereInput | OrderEventWhereInput[]
    OR?: OrderEventWhereInput[]
    NOT?: OrderEventWhereInput | OrderEventWhereInput[]
    orderId?: StringFilter<"OrderEvent"> | string
    status?: EnumOrderStatusFilter<"OrderEvent"> | $Enums.OrderStatus
    metadata?: JsonNullableFilter<"OrderEvent">
    createdAt?: DateTimeFilter<"OrderEvent"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderEventOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderEventCountOrderByAggregateInput
    _max?: OrderEventMaxOrderByAggregateInput
    _min?: OrderEventMinOrderByAggregateInput
  }

  export type OrderEventScalarWhereWithAggregatesInput = {
    AND?: OrderEventScalarWhereWithAggregatesInput | OrderEventScalarWhereWithAggregatesInput[]
    OR?: OrderEventScalarWhereWithAggregatesInput[]
    NOT?: OrderEventScalarWhereWithAggregatesInput | OrderEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderEvent"> | string
    orderId?: StringWithAggregatesFilter<"OrderEvent"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"OrderEvent"> | $Enums.OrderStatus
    metadata?: JsonNullableWithAggregatesFilter<"OrderEvent">
    createdAt?: DateTimeWithAggregatesFilter<"OrderEvent"> | Date | string
  }

  export type OrderFailureWhereInput = {
    AND?: OrderFailureWhereInput | OrderFailureWhereInput[]
    OR?: OrderFailureWhereInput[]
    NOT?: OrderFailureWhereInput | OrderFailureWhereInput[]
    id?: StringFilter<"OrderFailure"> | string
    orderId?: StringFilter<"OrderFailure"> | string
    reason?: StringFilter<"OrderFailure"> | string
    attempts?: IntFilter<"OrderFailure"> | number
    lastAttempt?: DateTimeFilter<"OrderFailure"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderFailureOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    reason?: SortOrder
    attempts?: SortOrder
    lastAttempt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderFailureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: OrderFailureWhereInput | OrderFailureWhereInput[]
    OR?: OrderFailureWhereInput[]
    NOT?: OrderFailureWhereInput | OrderFailureWhereInput[]
    reason?: StringFilter<"OrderFailure"> | string
    attempts?: IntFilter<"OrderFailure"> | number
    lastAttempt?: DateTimeFilter<"OrderFailure"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId">

  export type OrderFailureOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    reason?: SortOrder
    attempts?: SortOrder
    lastAttempt?: SortOrder
    _count?: OrderFailureCountOrderByAggregateInput
    _avg?: OrderFailureAvgOrderByAggregateInput
    _max?: OrderFailureMaxOrderByAggregateInput
    _min?: OrderFailureMinOrderByAggregateInput
    _sum?: OrderFailureSumOrderByAggregateInput
  }

  export type OrderFailureScalarWhereWithAggregatesInput = {
    AND?: OrderFailureScalarWhereWithAggregatesInput | OrderFailureScalarWhereWithAggregatesInput[]
    OR?: OrderFailureScalarWhereWithAggregatesInput[]
    NOT?: OrderFailureScalarWhereWithAggregatesInput | OrderFailureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderFailure"> | string
    orderId?: StringWithAggregatesFilter<"OrderFailure"> | string
    reason?: StringWithAggregatesFilter<"OrderFailure"> | string
    attempts?: IntWithAggregatesFilter<"OrderFailure"> | number
    lastAttempt?: DateTimeWithAggregatesFilter<"OrderFailure"> | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    type: $Enums.OrderType
    tokenIn: string
    tokenOut: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    dexUsed?: $Enums.DexType | null
    executedPrice?: Decimal | DecimalJsLike | number | string | null
    txHash?: string | null
    limitPrice?: Decimal | DecimalJsLike | number | string | null
    launchCondition?: string | null
    poolAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: OrderEventCreateNestedManyWithoutOrderInput
    failures?: OrderFailureCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    type: $Enums.OrderType
    tokenIn: string
    tokenOut: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    dexUsed?: $Enums.DexType | null
    executedPrice?: Decimal | DecimalJsLike | number | string | null
    txHash?: string | null
    limitPrice?: Decimal | DecimalJsLike | number | string | null
    launchCondition?: string | null
    poolAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: OrderEventUncheckedCreateNestedManyWithoutOrderInput
    failures?: OrderFailureUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    tokenIn?: StringFieldUpdateOperationsInput | string
    tokenOut?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dexUsed?: NullableEnumDexTypeFieldUpdateOperationsInput | $Enums.DexType | null
    executedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    limitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    launchCondition?: NullableStringFieldUpdateOperationsInput | string | null
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: OrderEventUpdateManyWithoutOrderNestedInput
    failures?: OrderFailureUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    tokenIn?: StringFieldUpdateOperationsInput | string
    tokenOut?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dexUsed?: NullableEnumDexTypeFieldUpdateOperationsInput | $Enums.DexType | null
    executedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    limitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    launchCondition?: NullableStringFieldUpdateOperationsInput | string | null
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: OrderEventUncheckedUpdateManyWithoutOrderNestedInput
    failures?: OrderFailureUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    type: $Enums.OrderType
    tokenIn: string
    tokenOut: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    dexUsed?: $Enums.DexType | null
    executedPrice?: Decimal | DecimalJsLike | number | string | null
    txHash?: string | null
    limitPrice?: Decimal | DecimalJsLike | number | string | null
    launchCondition?: string | null
    poolAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    tokenIn?: StringFieldUpdateOperationsInput | string
    tokenOut?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dexUsed?: NullableEnumDexTypeFieldUpdateOperationsInput | $Enums.DexType | null
    executedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    limitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    launchCondition?: NullableStringFieldUpdateOperationsInput | string | null
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    tokenIn?: StringFieldUpdateOperationsInput | string
    tokenOut?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dexUsed?: NullableEnumDexTypeFieldUpdateOperationsInput | $Enums.DexType | null
    executedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    limitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    launchCondition?: NullableStringFieldUpdateOperationsInput | string | null
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderEventCreateInput = {
    id?: string
    status: $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutEventsInput
  }

  export type OrderEventUncheckedCreateInput = {
    id?: string
    orderId: string
    status: $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutEventsNestedInput
  }

  export type OrderEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderEventCreateManyInput = {
    id?: string
    orderId: string
    status: $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFailureCreateInput = {
    id?: string
    reason: string
    attempts?: number
    lastAttempt?: Date | string
    order: OrderCreateNestedOneWithoutFailuresInput
  }

  export type OrderFailureUncheckedCreateInput = {
    id?: string
    orderId: string
    reason: string
    attempts?: number
    lastAttempt?: Date | string
  }

  export type OrderFailureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutFailuresNestedInput
  }

  export type OrderFailureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFailureCreateManyInput = {
    id?: string
    orderId: string
    reason: string
    attempts?: number
    lastAttempt?: Date | string
  }

  export type OrderFailureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFailureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeFilter<$PrismaModel> | $Enums.OrderType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumDexTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DexType | EnumDexTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DexType[] | ListEnumDexTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DexType[] | ListEnumDexTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDexTypeNullableFilter<$PrismaModel> | $Enums.DexType | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderEventListRelationFilter = {
    every?: OrderEventWhereInput
    some?: OrderEventWhereInput
    none?: OrderEventWhereInput
  }

  export type OrderFailureNullableScalarRelationFilter = {
    is?: OrderFailureWhereInput | null
    isNot?: OrderFailureWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    tokenIn?: SortOrder
    tokenOut?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dexUsed?: SortOrder
    executedPrice?: SortOrder
    txHash?: SortOrder
    limitPrice?: SortOrder
    launchCondition?: SortOrder
    poolAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    amount?: SortOrder
    executedPrice?: SortOrder
    limitPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    tokenIn?: SortOrder
    tokenOut?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dexUsed?: SortOrder
    executedPrice?: SortOrder
    txHash?: SortOrder
    limitPrice?: SortOrder
    launchCondition?: SortOrder
    poolAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    tokenIn?: SortOrder
    tokenOut?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dexUsed?: SortOrder
    executedPrice?: SortOrder
    txHash?: SortOrder
    limitPrice?: SortOrder
    launchCondition?: SortOrder
    poolAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    amount?: SortOrder
    executedPrice?: SortOrder
    limitPrice?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumDexTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DexType | EnumDexTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DexType[] | ListEnumDexTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DexType[] | ListEnumDexTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDexTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DexType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDexTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDexTypeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderEventCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderEventMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderEventMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OrderFailureCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    reason?: SortOrder
    attempts?: SortOrder
    lastAttempt?: SortOrder
  }

  export type OrderFailureAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type OrderFailureMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    reason?: SortOrder
    attempts?: SortOrder
    lastAttempt?: SortOrder
  }

  export type OrderFailureMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    reason?: SortOrder
    attempts?: SortOrder
    lastAttempt?: SortOrder
  }

  export type OrderFailureSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OrderEventCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput> | OrderEventCreateWithoutOrderInput[] | OrderEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderEventCreateOrConnectWithoutOrderInput | OrderEventCreateOrConnectWithoutOrderInput[]
    createMany?: OrderEventCreateManyOrderInputEnvelope
    connect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
  }

  export type OrderFailureCreateNestedOneWithoutOrderInput = {
    create?: XOR<OrderFailureCreateWithoutOrderInput, OrderFailureUncheckedCreateWithoutOrderInput>
    connectOrCreate?: OrderFailureCreateOrConnectWithoutOrderInput
    connect?: OrderFailureWhereUniqueInput
  }

  export type OrderEventUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput> | OrderEventCreateWithoutOrderInput[] | OrderEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderEventCreateOrConnectWithoutOrderInput | OrderEventCreateOrConnectWithoutOrderInput[]
    createMany?: OrderEventCreateManyOrderInputEnvelope
    connect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
  }

  export type OrderFailureUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<OrderFailureCreateWithoutOrderInput, OrderFailureUncheckedCreateWithoutOrderInput>
    connectOrCreate?: OrderFailureCreateOrConnectWithoutOrderInput
    connect?: OrderFailureWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumOrderTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrderType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableEnumDexTypeFieldUpdateOperationsInput = {
    set?: $Enums.DexType | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderEventUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput> | OrderEventCreateWithoutOrderInput[] | OrderEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderEventCreateOrConnectWithoutOrderInput | OrderEventCreateOrConnectWithoutOrderInput[]
    upsert?: OrderEventUpsertWithWhereUniqueWithoutOrderInput | OrderEventUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderEventCreateManyOrderInputEnvelope
    set?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    disconnect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    delete?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    connect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    update?: OrderEventUpdateWithWhereUniqueWithoutOrderInput | OrderEventUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderEventUpdateManyWithWhereWithoutOrderInput | OrderEventUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderEventScalarWhereInput | OrderEventScalarWhereInput[]
  }

  export type OrderFailureUpdateOneWithoutOrderNestedInput = {
    create?: XOR<OrderFailureCreateWithoutOrderInput, OrderFailureUncheckedCreateWithoutOrderInput>
    connectOrCreate?: OrderFailureCreateOrConnectWithoutOrderInput
    upsert?: OrderFailureUpsertWithoutOrderInput
    disconnect?: OrderFailureWhereInput | boolean
    delete?: OrderFailureWhereInput | boolean
    connect?: OrderFailureWhereUniqueInput
    update?: XOR<XOR<OrderFailureUpdateToOneWithWhereWithoutOrderInput, OrderFailureUpdateWithoutOrderInput>, OrderFailureUncheckedUpdateWithoutOrderInput>
  }

  export type OrderEventUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput> | OrderEventCreateWithoutOrderInput[] | OrderEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderEventCreateOrConnectWithoutOrderInput | OrderEventCreateOrConnectWithoutOrderInput[]
    upsert?: OrderEventUpsertWithWhereUniqueWithoutOrderInput | OrderEventUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderEventCreateManyOrderInputEnvelope
    set?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    disconnect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    delete?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    connect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    update?: OrderEventUpdateWithWhereUniqueWithoutOrderInput | OrderEventUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderEventUpdateManyWithWhereWithoutOrderInput | OrderEventUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderEventScalarWhereInput | OrderEventScalarWhereInput[]
  }

  export type OrderFailureUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<OrderFailureCreateWithoutOrderInput, OrderFailureUncheckedCreateWithoutOrderInput>
    connectOrCreate?: OrderFailureCreateOrConnectWithoutOrderInput
    upsert?: OrderFailureUpsertWithoutOrderInput
    disconnect?: OrderFailureWhereInput | boolean
    delete?: OrderFailureWhereInput | boolean
    connect?: OrderFailureWhereUniqueInput
    update?: XOR<XOR<OrderFailureUpdateToOneWithWhereWithoutOrderInput, OrderFailureUpdateWithoutOrderInput>, OrderFailureUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutEventsInput = {
    create?: XOR<OrderCreateWithoutEventsInput, OrderUncheckedCreateWithoutEventsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutEventsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<OrderCreateWithoutEventsInput, OrderUncheckedCreateWithoutEventsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutEventsInput
    upsert?: OrderUpsertWithoutEventsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutEventsInput, OrderUpdateWithoutEventsInput>, OrderUncheckedUpdateWithoutEventsInput>
  }

  export type OrderCreateNestedOneWithoutFailuresInput = {
    create?: XOR<OrderCreateWithoutFailuresInput, OrderUncheckedCreateWithoutFailuresInput>
    connectOrCreate?: OrderCreateOrConnectWithoutFailuresInput
    connect?: OrderWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateOneRequiredWithoutFailuresNestedInput = {
    create?: XOR<OrderCreateWithoutFailuresInput, OrderUncheckedCreateWithoutFailuresInput>
    connectOrCreate?: OrderCreateOrConnectWithoutFailuresInput
    upsert?: OrderUpsertWithoutFailuresInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutFailuresInput, OrderUpdateWithoutFailuresInput>, OrderUncheckedUpdateWithoutFailuresInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeFilter<$PrismaModel> | $Enums.OrderType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumDexTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DexType | EnumDexTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DexType[] | ListEnumDexTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DexType[] | ListEnumDexTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDexTypeNullableFilter<$PrismaModel> | $Enums.DexType | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumDexTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DexType | EnumDexTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DexType[] | ListEnumDexTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DexType[] | ListEnumDexTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDexTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DexType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDexTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDexTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrderEventCreateWithoutOrderInput = {
    id?: string
    status: $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderEventUncheckedCreateWithoutOrderInput = {
    id?: string
    status: $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderEventCreateOrConnectWithoutOrderInput = {
    where: OrderEventWhereUniqueInput
    create: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput>
  }

  export type OrderEventCreateManyOrderInputEnvelope = {
    data: OrderEventCreateManyOrderInput | OrderEventCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderFailureCreateWithoutOrderInput = {
    id?: string
    reason: string
    attempts?: number
    lastAttempt?: Date | string
  }

  export type OrderFailureUncheckedCreateWithoutOrderInput = {
    id?: string
    reason: string
    attempts?: number
    lastAttempt?: Date | string
  }

  export type OrderFailureCreateOrConnectWithoutOrderInput = {
    where: OrderFailureWhereUniqueInput
    create: XOR<OrderFailureCreateWithoutOrderInput, OrderFailureUncheckedCreateWithoutOrderInput>
  }

  export type OrderEventUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderEventWhereUniqueInput
    update: XOR<OrderEventUpdateWithoutOrderInput, OrderEventUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput>
  }

  export type OrderEventUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderEventWhereUniqueInput
    data: XOR<OrderEventUpdateWithoutOrderInput, OrderEventUncheckedUpdateWithoutOrderInput>
  }

  export type OrderEventUpdateManyWithWhereWithoutOrderInput = {
    where: OrderEventScalarWhereInput
    data: XOR<OrderEventUpdateManyMutationInput, OrderEventUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderEventScalarWhereInput = {
    AND?: OrderEventScalarWhereInput | OrderEventScalarWhereInput[]
    OR?: OrderEventScalarWhereInput[]
    NOT?: OrderEventScalarWhereInput | OrderEventScalarWhereInput[]
    id?: StringFilter<"OrderEvent"> | string
    orderId?: StringFilter<"OrderEvent"> | string
    status?: EnumOrderStatusFilter<"OrderEvent"> | $Enums.OrderStatus
    metadata?: JsonNullableFilter<"OrderEvent">
    createdAt?: DateTimeFilter<"OrderEvent"> | Date | string
  }

  export type OrderFailureUpsertWithoutOrderInput = {
    update: XOR<OrderFailureUpdateWithoutOrderInput, OrderFailureUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderFailureCreateWithoutOrderInput, OrderFailureUncheckedCreateWithoutOrderInput>
    where?: OrderFailureWhereInput
  }

  export type OrderFailureUpdateToOneWithWhereWithoutOrderInput = {
    where?: OrderFailureWhereInput
    data: XOR<OrderFailureUpdateWithoutOrderInput, OrderFailureUncheckedUpdateWithoutOrderInput>
  }

  export type OrderFailureUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFailureUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutEventsInput = {
    id?: string
    type: $Enums.OrderType
    tokenIn: string
    tokenOut: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    dexUsed?: $Enums.DexType | null
    executedPrice?: Decimal | DecimalJsLike | number | string | null
    txHash?: string | null
    limitPrice?: Decimal | DecimalJsLike | number | string | null
    launchCondition?: string | null
    poolAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    failures?: OrderFailureCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutEventsInput = {
    id?: string
    type: $Enums.OrderType
    tokenIn: string
    tokenOut: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    dexUsed?: $Enums.DexType | null
    executedPrice?: Decimal | DecimalJsLike | number | string | null
    txHash?: string | null
    limitPrice?: Decimal | DecimalJsLike | number | string | null
    launchCondition?: string | null
    poolAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    failures?: OrderFailureUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutEventsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutEventsInput, OrderUncheckedCreateWithoutEventsInput>
  }

  export type OrderUpsertWithoutEventsInput = {
    update: XOR<OrderUpdateWithoutEventsInput, OrderUncheckedUpdateWithoutEventsInput>
    create: XOR<OrderCreateWithoutEventsInput, OrderUncheckedCreateWithoutEventsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutEventsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutEventsInput, OrderUncheckedUpdateWithoutEventsInput>
  }

  export type OrderUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    tokenIn?: StringFieldUpdateOperationsInput | string
    tokenOut?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dexUsed?: NullableEnumDexTypeFieldUpdateOperationsInput | $Enums.DexType | null
    executedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    limitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    launchCondition?: NullableStringFieldUpdateOperationsInput | string | null
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    failures?: OrderFailureUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    tokenIn?: StringFieldUpdateOperationsInput | string
    tokenOut?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dexUsed?: NullableEnumDexTypeFieldUpdateOperationsInput | $Enums.DexType | null
    executedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    limitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    launchCondition?: NullableStringFieldUpdateOperationsInput | string | null
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    failures?: OrderFailureUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateWithoutFailuresInput = {
    id?: string
    type: $Enums.OrderType
    tokenIn: string
    tokenOut: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    dexUsed?: $Enums.DexType | null
    executedPrice?: Decimal | DecimalJsLike | number | string | null
    txHash?: string | null
    limitPrice?: Decimal | DecimalJsLike | number | string | null
    launchCondition?: string | null
    poolAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: OrderEventCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutFailuresInput = {
    id?: string
    type: $Enums.OrderType
    tokenIn: string
    tokenOut: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    dexUsed?: $Enums.DexType | null
    executedPrice?: Decimal | DecimalJsLike | number | string | null
    txHash?: string | null
    limitPrice?: Decimal | DecimalJsLike | number | string | null
    launchCondition?: string | null
    poolAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: OrderEventUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutFailuresInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutFailuresInput, OrderUncheckedCreateWithoutFailuresInput>
  }

  export type OrderUpsertWithoutFailuresInput = {
    update: XOR<OrderUpdateWithoutFailuresInput, OrderUncheckedUpdateWithoutFailuresInput>
    create: XOR<OrderCreateWithoutFailuresInput, OrderUncheckedCreateWithoutFailuresInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutFailuresInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutFailuresInput, OrderUncheckedUpdateWithoutFailuresInput>
  }

  export type OrderUpdateWithoutFailuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    tokenIn?: StringFieldUpdateOperationsInput | string
    tokenOut?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dexUsed?: NullableEnumDexTypeFieldUpdateOperationsInput | $Enums.DexType | null
    executedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    limitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    launchCondition?: NullableStringFieldUpdateOperationsInput | string | null
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: OrderEventUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutFailuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    tokenIn?: StringFieldUpdateOperationsInput | string
    tokenOut?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dexUsed?: NullableEnumDexTypeFieldUpdateOperationsInput | $Enums.DexType | null
    executedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    limitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    launchCondition?: NullableStringFieldUpdateOperationsInput | string | null
    poolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: OrderEventUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderEventCreateManyOrderInput = {
    id?: string
    status: $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderEventUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderEventUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderEventUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}