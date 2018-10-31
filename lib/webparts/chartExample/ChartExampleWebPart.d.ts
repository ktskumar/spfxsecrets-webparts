import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IChartExampleWebPartProps {
    description: string;
}
export default class ChartExampleWebPart extends BaseClientSideWebPart<IChartExampleWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    private getDataASync();
    private getSPData();
    private renderData(values);
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
