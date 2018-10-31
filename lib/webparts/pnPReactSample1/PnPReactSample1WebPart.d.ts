import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IPnPReactSample1WebPartProps {
    description: string;
    lists: string | string[];
}
export default class PnPReactSample1WebPart extends BaseClientSideWebPart<IPnPReactSample1WebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
