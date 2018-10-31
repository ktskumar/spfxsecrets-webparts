/// <reference types="react" />
import * as React from 'react';
import { IPnPReactCtrlSampleProps } from './IPnPReactCtrlSampleProps';
import { IPnPReactCtrlSampleState } from './IPnPReactCtrlSampleState';
export default class PnPReactCtrlSample extends React.Component<IPnPReactCtrlSampleProps, IPnPReactCtrlSampleState> {
    private _viewFields;
    constructor(props: IPnPReactCtrlSampleProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IPnPReactCtrlSampleProps, prevState: IPnPReactCtrlSampleState): void;
    private getListItems();
    private _onConfigure();
    render(): React.ReactElement<IPnPReactCtrlSampleProps>;
}
