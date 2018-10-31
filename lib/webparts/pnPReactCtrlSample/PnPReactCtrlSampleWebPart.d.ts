import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IPnPReactCtrlSampleWebPartProps {
    description: string;
    lists: string | string[];
}
export default class PnPReactCtrlSampleWebPart extends BaseClientSideWebPart<IPnPReactCtrlSampleWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
