/**
 * @export
 */
export const AssetTxsOrderEnum = {
    Asc: 'asc',
    Desc: 'desc',
} as const;
export type AssetTxsOrderEnum = (typeof AssetTxsOrderEnum)[keyof typeof AssetTxsOrderEnum];
/**
 * @export
 */
export const AssetUpdatesOrderEnum = {
    Asc: 'asc',
    Desc: 'desc',
} as const;
export type AssetUpdatesOrderEnum = (typeof AssetUpdatesOrderEnum)[keyof typeof AssetUpdatesOrderEnum];
/**
 * @export
 */
export const AssetUtxosOrderEnum = {
    Asc: 'asc',
    Desc: 'desc',
} as const;
export type AssetUtxosOrderEnum = (typeof AssetUtxosOrderEnum)[keyof typeof AssetUtxosOrderEnum];
/**
 * @export
 */
export const PolicyTxsOrderEnum = {
    Asc: 'asc',
    Desc: 'desc',
} as const;
export type PolicyTxsOrderEnum = (typeof PolicyTxsOrderEnum)[keyof typeof PolicyTxsOrderEnum];
/**
 * @export
 */
export const PolicyUtxosOrderEnum = {
    Asc: 'asc',
    Desc: 'desc',
} as const;
export type PolicyUtxosOrderEnum = (typeof PolicyUtxosOrderEnum)[keyof typeof PolicyUtxosOrderEnum];

/**
 * Query parameters for assetAccounts.
 * @export
 * @interface AssetAccountsQueryParams
 *
 */
export interface AssetAccountsQueryParams {
    /**
     * The max number of results per page.
     * @type {number | null}
     * @memberof AssetAccountsQueryParams
     */
    count?: number | null;
    /**
     * Pagination cursor string, use the cursor included in a page of results to fetch the next page.
     * @type {string | null}
     * @memberof AssetAccountsQueryParams
     */
    cursor?: string | null;
}

/**
 * Query parameters for assetAddresses.
 * @export
 * @interface AssetAddressesQueryParams
 *
 */
export interface AssetAddressesQueryParams {
    /**
     * The max number of results per page.
     * @type {number | null}
     * @memberof AssetAddressesQueryParams
     */
    count?: number | null;
    /**
     * Pagination cursor string, use the cursor included in a page of results to fetch the next page.
     * @type {string | null}
     * @memberof AssetAddressesQueryParams
     */
    cursor?: string | null;
}

/**
 * Query parameters for assetTxs.
 * @export
 * @interface AssetTxsQueryParams
 *
 */
export interface AssetTxsQueryParams {
    /**
     * Return only transactions after supplied block height
     * @type {number | null}
     * @memberof AssetTxsQueryParams
     */
    fromHeight?: number | null;
    /**
     * The max number of results per page.
     * @type {number | null}
     * @memberof AssetTxsQueryParams
     */
    count?: number | null;
    /**
     * The order in which the results are sorted (by block height)
     * @type {AssetTxsOrderEnum}
     * @memberof AssetTxsQueryParams
     */
    order?: AssetTxsOrderEnum;
    /**
     * Pagination cursor string, use the cursor included in a page of results to fetch the next page.
     * @type {string | null}
     * @memberof AssetTxsQueryParams
     */
    cursor?: string | null;
}

/**
 * Query parameters for assetUpdates.
 * @export
 * @interface AssetUpdatesQueryParams
 *
 */
export interface AssetUpdatesQueryParams {
    /**
     * The max number of results per page.
     * @type {number | null}
     * @memberof AssetUpdatesQueryParams
     */
    count?: number | null;
    /**
     * The order in which the results are sorted (by block height)
     * @type {AssetUpdatesOrderEnum}
     * @memberof AssetUpdatesQueryParams
     */
    order?: AssetUpdatesOrderEnum;
    /**
     * Pagination cursor string, use the cursor included in a page of results to fetch the next page.
     * @type {string | null}
     * @memberof AssetUpdatesQueryParams
     */
    cursor?: string | null;
}

/**
 * Query parameters for assetUtxos.
 * @export
 * @interface AssetUtxosQueryParams
 *
 */
export interface AssetUtxosQueryParams {
    /**
     * Return only UTxOs controlled by a specific address (bech32 encoding)
     * @type {string | null}
     * @memberof AssetUtxosQueryParams
     */
    address?: string | null;
    /**
     * The max number of results per page.
     * @type {number | null}
     * @memberof AssetUtxosQueryParams
     */
    count?: number | null;
    /**
     * The order in which the results are sorted (by slot at which UTxO was produced)
     * @type {AssetUtxosOrderEnum}
     * @memberof AssetUtxosQueryParams
     */
    order?: AssetUtxosOrderEnum;
    /**
     * Return only UTxOs created on or after a specific slot
     * @type {number | null}
     * @memberof AssetUtxosQueryParams
     */
    from?: number | null;
    /**
     * Return only UTxOs created before a specific slot
     * @type {number | null}
     * @memberof AssetUtxosQueryParams
     */
    to?: number | null;
    /**
     * Pagination cursor string, use the cursor included in a page of results to fetch the next page.
     * @type {string | null}
     * @memberof AssetUtxosQueryParams
     */
    cursor?: string | null;
}
