/// <reference types="react" />
/**
 * @file ManifestDetails.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
import * as React from 'react';
import { IManifestStoreEntry } from './../../../../../stores/ManifestStore';
export interface IManifestDetailsProps {
    manifest: IManifestStoreEntry;
}
export default class ManifestDetails extends React.Component<IManifestDetailsProps, {}> {
    render(): React.ReactElement<IManifestDetailsProps>;
}
