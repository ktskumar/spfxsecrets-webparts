import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './ChartExampleWebPart.module.scss';
import * as strings from 'ChartExampleWebPartStrings';
import MockupClient from './MockupClient';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import * as Highcharts from 'highcharts';
import { sp } from '@pnp/sp';

export interface IChartExampleWebPartProps {
  description: string;
}

export default class ChartExampleWebPart extends BaseClientSideWebPart<IChartExampleWebPartProps> {

  public async onInit(): Promise<void>{
    sp.setup({
      spfxContext: this.context
    });
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.chartExample}">
      <div class="${styles.container}">
      <div class="${styles.row}">
      <div class="${styles.column}">
      <div id="container">
      </div>
      </div>
      </div>
      </div>
      </div>`;
    this.getDataASync();
  }

  private getDataASync() {
    if (Environment.type === EnvironmentType.Local) {
      MockupClient.get().then((response) => {
        this.renderData(response.value);
      });
    } else {
      this.getSPData().then((response) => {
        this.renderData(response);
      });
    }
  }

  private getSPData(): Promise<any> {
    return sp.web.lists.filter('Hidden eq false').get().then(response =>{      
      return response;
    });
   /* return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists?$filter=Hidden eq false`, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      })
      */
  }

  private renderData(values) {
    var htmlele = [];
    values.forEach(element => {
      htmlele.push([element.Title, element.ItemCount]);
    });

    var jsonValue = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'column'
      },
      title: {
        text: 'Largest Items Count'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        type: 'category',

      },
      yAxis: {
        min: 0,
        title: {
          text: 'List Items'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Items in List: <b>{point.y:.1f}</b>'
      },
      series: [<Highcharts.IndividualSeriesOptions>{
        name: 'Items',
        data: htmlele,
        dataLabels: {
          enabled: true,
        }
      }]
    };
    Highcharts.chart('container', jsonValue);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
