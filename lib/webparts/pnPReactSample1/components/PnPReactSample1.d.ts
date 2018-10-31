/// <reference types="react" />
import * as React from 'react';
import { IPnPReactSample1Props } from './IPnPReactSample1Props';
import { IPnPReactSample1State } from './IPnPReactSample1State';
export default class PnPReactSample1 extends React.Component<IPnPReactSample1Props, IPnPReactSample1State> {
    private _viewFields;
    constructor(props: IPnPReactSample1Props);
    onInit(): Promise<void>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IPnPReactSample1Props, prevState: IPnPReactSample1State): void;
    private getListItems();
    render(): React.ReactElement<IPnPReactSample1Props>;
}
