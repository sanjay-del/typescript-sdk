import { AxiosRequestConfig, AxiosInstance, AxiosPromise } from 'axios';
import { RequestArgs } from '../../base';
import { DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction } from '../../common';
import { Configuration } from '../../configuration';
import {
    TimestampedChainTip,
    TimestampedEraSummaries,
    TimestampedProtocolParameters,
    TimestampedSystemStart,
} from '../type';

/**
 * GeneralApi - axios parameter creator
 * @export
 */
export const GeneralApiAxiosParamCreator = (configuration: Configuration) => ({
    /**
     * Returns the identifier of the most recently processed block on the network
     * @summary Chain tip
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    chainTip: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
        const localVarPath = `/chain-tip`;
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        const { baseOptions } = configuration;

        const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
        const localVarHeaderParameter = {} as Record<string, string>;
        const localVarQueryParameter = {} as Record<string, string>;

        // authentication api-key required
        setApiKeyToObject(localVarHeaderParameter, 'api-key', configuration);

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
            ...localVarHeaderParameter,
            ...headersFromBaseOptions,
            ...options.headers,
        };

        return {
            url: toPathString(localVarUrlObj),
            options: localVarRequestOptions,
        };
    },
    /**
     * Returns the blockchain era history
     * @summary Era history
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eraHistory: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
        const localVarPath = `/era-history`;
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        const { baseOptions } = configuration;

        const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
        const localVarHeaderParameter = {} as Record<string, string>;
        const localVarQueryParameter = {} as Record<string, string>;

        // authentication api-key required
        setApiKeyToObject(localVarHeaderParameter, 'api-key', configuration);

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
            ...localVarHeaderParameter,
            ...headersFromBaseOptions,
            ...options.headers,
        };

        return {
            url: toPathString(localVarUrlObj),
            options: localVarRequestOptions,
        };
    },
    /**
     * Returns the current blockchain protocol parameters
     * @summary Protocol parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    protocolParams: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
        const localVarPath = `/protocol-params`;
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        const { baseOptions } = configuration;

        const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
        const localVarHeaderParameter = {} as Record<string, string>;
        const localVarQueryParameter = {} as Record<string, string>;

        // authentication api-key required
        setApiKeyToObject(localVarHeaderParameter, 'api-key', configuration);

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
            ...localVarHeaderParameter,
            ...headersFromBaseOptions,
            ...options.headers,
        };

        return {
            url: toPathString(localVarUrlObj),
            options: localVarRequestOptions,
        };
    },
    /**
     * Returns the blockchain system start time
     * @summary Blockchain system start
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    systemStart: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
        const localVarPath = `/system-start`;
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        const { baseOptions } = configuration;

        const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
        const localVarHeaderParameter = {} as Record<string, string>;
        const localVarQueryParameter = {} as Record<string, string>;

        // authentication api-key required
        setApiKeyToObject(localVarHeaderParameter, 'api-key', configuration);

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
            ...localVarHeaderParameter,
            ...headersFromBaseOptions,
            ...options.headers,
        };

        return {
            url: toPathString(localVarUrlObj),
            options: localVarRequestOptions,
        };
    },
});

/**
 * GeneralApi - functional programming interface
 * @export
 */
export const GeneralApiFp = (configuration: Configuration) => {
    const localVarAxiosParamCreator = GeneralApiAxiosParamCreator(configuration);
    return {
        /**
         * Returns the identifier of the most recently processed block on the network
         * @summary Chain tip
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async chainTip(
            options?: AxiosRequestConfig,
        ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimestampedChainTip>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.chainTip(options);
            return createRequestFunction(localVarAxiosArgs, configuration);
        },
        /**
         * Returns the blockchain era history
         * @summary Era history
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eraHistory(
            options?: AxiosRequestConfig,
        ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimestampedEraSummaries>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eraHistory(options);
            return createRequestFunction(localVarAxiosArgs, configuration);
        },
        /**
         * Returns the current blockchain protocol parameters
         * @summary Protocol parameters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async protocolParams(
            options?: AxiosRequestConfig,
        ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimestampedProtocolParameters>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.protocolParams(options);
            return createRequestFunction(localVarAxiosArgs, configuration);
        },
        /**
         * Returns the blockchain system start time
         * @summary Blockchain system start
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async systemStart(
            options?: AxiosRequestConfig,
        ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimestampedSystemStart>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.systemStart(options);
            return createRequestFunction(localVarAxiosArgs, configuration);
        },
    };
};
