"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[65251],{

/***/ 765251
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ useQuery)
});

// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/focusManager.js
var focusManager = __webpack_require__(329658);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/environmentManager.js
var environmentManager = __webpack_require__(711381);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/notifyManager.js
var notifyManager = __webpack_require__(226261);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/query.js + 1 modules
var modern_query = __webpack_require__(846913);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/subscribable.js
var subscribable = __webpack_require__(266500);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/thenable.js
var thenable = __webpack_require__(594658);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/utils.js
var utils = __webpack_require__(924880);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/timeoutManager.js
var timeoutManager = __webpack_require__(252775);
;// ./node_modules/@tanstack/query-core/build/modern/queryObserver.js
// src/queryObserver.ts








var QueryObserver = class extends subscribable/* Subscribable */.Q {
  constructor(client, options) {
    super();
    this.options = options;
    this.#client = client;
    this.#selectError = null;
    this.#currentThenable = (0,thenable/* pendingThenable */.T)();
    this.bindMethods();
    this.setOptions(options);
  }
  #client;
  #currentQuery = void 0;
  #currentQueryInitialState = void 0;
  #currentResult = void 0;
  #currentResultState;
  #currentResultOptions;
  #currentThenable;
  #selectError;
  #selectFn;
  #selectResult;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #lastQueryWithDefinedData;
  #staleTimeoutId;
  #refetchIntervalId;
  #currentRefetchInterval;
  #trackedProps = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.#currentQuery, this.options)) {
        this.#executeFetch();
      } else {
        this.updateResult();
      }
      this.#updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#clearStaleTimeout();
    this.#clearRefetchInterval();
    this.#currentQuery.removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = this.#currentQuery;
    this.options = this.#client.defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0,utils/* resolveQueryBoolean */.nU)(this.options.enabled, this.#currentQuery) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    this.#updateQuery();
    this.#currentQuery.setOptions(this.options);
    if (prevOptions._defaulted && !(0,utils/* shallowEqualObjects */.f8)(this.options, prevOptions)) {
      this.#client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.#currentQuery,
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      this.#currentQuery,
      prevQuery,
      this.options,
      prevOptions
    )) {
      this.#executeFetch();
    }
    this.updateResult();
    if (mounted && (this.#currentQuery !== prevQuery || (0,utils/* resolveQueryBoolean */.nU)(this.options.enabled, this.#currentQuery) !== (0,utils/* resolveQueryBoolean */.nU)(prevOptions.enabled, this.#currentQuery) || (0,utils/* resolveStaleTime */.d2)(this.options.staleTime, this.#currentQuery) !== (0,utils/* resolveStaleTime */.d2)(prevOptions.staleTime, this.#currentQuery))) {
      this.#updateStaleTimeout();
    }
    const nextRefetchInterval = this.#computeRefetchInterval();
    if (mounted && (this.#currentQuery !== prevQuery || (0,utils/* resolveQueryBoolean */.nU)(this.options.enabled, this.#currentQuery) !== (0,utils/* resolveQueryBoolean */.nU)(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
      this.#updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.#client.getQueryCache().build(this.#client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      this.#currentResult = result;
      this.#currentResultOptions = this.options;
      this.#currentResultState = this.#currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked?.(key);
        if (key === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
            this.#currentThenable.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            );
          }
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    this.#trackedProps.add(key);
  }
  getCurrentQuery() {
    return this.#currentQuery;
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.#client.defaultQueryOptions(options);
    const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return this.#executeFetch({
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return this.#currentResult;
    });
  }
  #executeFetch(fetchOptions) {
    this.#updateQuery();
    let promise = this.#currentQuery.fetch(
      this.options,
      fetchOptions
    );
    if (!fetchOptions?.throwOnError) {
      promise = promise.catch(utils/* noop */.lQ);
    }
    return promise;
  }
  #updateStaleTimeout() {
    this.#clearStaleTimeout();
    const staleTime = (0,utils/* resolveStaleTime */.d2)(
      this.options.staleTime,
      this.#currentQuery
    );
    if (environmentManager/* environmentManager */.H.isServer() || this.#currentResult.isStale || !(0,utils/* isValidTimeout */.gn)(staleTime)) {
      return;
    }
    const time = (0,utils/* timeUntilStale */.j3)(this.#currentResult.dataUpdatedAt, staleTime);
    const timeout = time + 1;
    this.#staleTimeoutId = timeoutManager/* timeoutManager */.zs.setTimeout(() => {
      if (!this.#currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  #computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
  }
  #updateRefetchInterval(nextInterval) {
    this.#clearRefetchInterval();
    this.#currentRefetchInterval = nextInterval;
    if (environmentManager/* environmentManager */.H.isServer() || (0,utils/* resolveQueryBoolean */.nU)(this.options.enabled, this.#currentQuery) === false || !(0,utils/* isValidTimeout */.gn)(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
      return;
    }
    this.#refetchIntervalId = timeoutManager/* timeoutManager */.zs.setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager/* focusManager */.m.isFocused()) {
        this.#executeFetch();
      }
    }, this.#currentRefetchInterval);
  }
  #updateTimers() {
    this.#updateStaleTimeout();
    this.#updateRefetchInterval(this.#computeRefetchInterval());
  }
  #clearStaleTimeout() {
    if (this.#staleTimeoutId !== void 0) {
      timeoutManager/* timeoutManager */.zs.clearTimeout(this.#staleTimeoutId);
      this.#staleTimeoutId = void 0;
    }
  }
  #clearRefetchInterval() {
    if (this.#refetchIntervalId !== void 0) {
      timeoutManager/* timeoutManager */.zs.clearInterval(this.#refetchIntervalId);
      this.#refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    const prevQuery = this.#currentQuery;
    const prevOptions = this.options;
    const prevResult = this.#currentResult;
    const prevResultState = this.#currentResultState;
    const prevResultOptions = this.#currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...(0,modern_query/* fetchState */.k)(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          this.#lastQueryWithDefinedData?.state.data,
          this.#lastQueryWithDefinedData
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = (0,utils/* replaceData */.pl)(
          prevResult?.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
        data = this.#selectResult;
      } else {
        try {
          this.#selectFn = options.select;
          data = options.select(data);
          data = (0,utils/* replaceData */.pl)(prevResult?.data, data, options);
          this.#selectResult = data;
          this.#selectError = null;
        } catch (selectError) {
          this.#selectError = selectError;
        }
      }
    }
    if (this.#selectError) {
      error = this.#selectError;
      data = this.#selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: query.isFetched(),
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: this.#currentThenable,
      isEnabled: (0,utils/* resolveQueryBoolean */.nU)(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const hasResultData = nextResult.data !== void 0;
      const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
      const finalizeThenableIfPossible = (thenable) => {
        if (isErrorWithoutData) {
          thenable.reject(nextResult.error);
        } else if (hasResultData) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = this.#currentThenable = nextResult.promise = (0,thenable/* pendingThenable */.T)();
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = this.#currentThenable;
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = this.#currentResult;
    const nextResult = this.createResult(this.#currentQuery, this.options);
    this.#currentResultState = this.#currentQuery.state;
    this.#currentResultOptions = this.options;
    if (this.#currentResultState.data !== void 0) {
      this.#lastQueryWithDefinedData = this.#currentQuery;
    }
    if ((0,utils/* shallowEqualObjects */.f8)(nextResult, prevResult)) {
      return;
    }
    this.#currentResult = nextResult;
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? this.#trackedProps
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(this.#currentResult).some((key) => {
        const typedKey = key;
        const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    this.#notify({ listeners: shouldNotifyListeners() });
  }
  #updateQuery() {
    const query = this.#client.getQueryCache().build(this.#client, this.options);
    if (query === this.#currentQuery) {
      return;
    }
    const prevQuery = this.#currentQuery;
    this.#currentQuery = query;
    this.#currentQueryInitialState = query.state;
    if (this.hasListeners()) {
      prevQuery?.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      this.#updateTimers();
    }
  }
  #notify(notifyOptions) {
    notifyManager/* notifyManager */.jG.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      }
      this.#client.getQueryCache().notify({
        query: this.#currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
};
function shouldLoadOnMount(query, options) {
  return (0,utils/* resolveQueryBoolean */.nU)(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && (0,utils/* resolveQueryBoolean */.nU)(options.retryOnMount, query) === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if ((0,utils/* resolveQueryBoolean */.nU)(options.enabled, query) !== false && (0,utils/* resolveStaleTime */.d2)(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || (0,utils/* resolveQueryBoolean */.nU)(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return (0,utils/* resolveQueryBoolean */.nU)(options.enabled, query) !== false && query.isStaleByTime((0,utils/* resolveStaleTime */.d2)(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!(0,utils/* shallowEqualObjects */.f8)(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}

//# sourceMappingURL=queryObserver.js.map
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(497665);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
/* unused harmony import specifier */ var React;
/* unused harmony import specifier */ var jsx;
"use client";

// src/QueryErrorResetBoundary.tsx


function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = react.createContext(createValue());
var useQueryErrorResetBoundary = () => react.useContext(QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({
  children
}) => {
  const [value] = React.useState(() => createValue());
  return /* @__PURE__ */ jsx(QueryErrorResetBoundaryContext.Provider, { value, children: typeof children === "function" ? children(value) : children });
};

//# sourceMappingURL=QueryErrorResetBoundary.js.map
;// ./node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
"use client";

// src/errorBoundaryUtils.ts


var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
  const throwOnError = query?.state.error && typeof options.throwOnError === "function" ? (0,utils/* shouldThrowError */.GU)(options.throwOnError, [query.state.error, query]) : options.throwOnError;
  if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  react.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0,utils/* shouldThrowError */.GU)(throwOnError, [result.error, query]));
};

//# sourceMappingURL=errorBoundaryUtils.js.map
;// ./node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js
"use client";

// src/IsRestoringProvider.ts

var IsRestoringContext = react.createContext(false);
var useIsRestoring = () => react.useContext(IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;

//# sourceMappingURL=IsRestoringProvider.js.map
;// ./node_modules/@tanstack/react-query/build/modern/suspense.js
// src/suspense.ts
var defaultThrowOnError = (_error, query) => query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});

//# sourceMappingURL=suspense.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
"use client";

// src/useBaseQuery.ts







function useBaseQuery(options, Observer, queryClient) {
  if (false) // removed by dead control flow
{}
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const client = (0,QueryClientProvider/* useQueryClient */.jE)(queryClient);
  const defaultedOptions = client.defaultQueryOptions(options);
  client.getDefaultOptions().queries?._experimental_beforeQuery?.(
    defaultedOptions
  );
  const query = client.getQueryCache().get(defaultedOptions.queryHash);
  if (false) // removed by dead control flow
{}
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = react.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  react.useSyncExternalStore(
    react.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager/* notifyManager */.jG.batchCalls(onStoreChange)) : utils/* noop */.lQ;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  react.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query,
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  ;
  client.getDefaultOptions().queries?._experimental_afterQuery?.(
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !environmentManager/* environmentManager */.H.isServer() && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      query?.promise
    );
    promise?.catch(utils/* noop */.lQ).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}

//# sourceMappingURL=useBaseQuery.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useQuery.js
"use client";

// src/useQuery.ts


function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver, queryClient);
}

//# sourceMappingURL=useQuery.js.map

/***/ }

}]);