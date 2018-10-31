import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'PnPReactCtrlSampleWebPartStrings';
import PnPReactCtrlSample from './components/PnPReactCtrlSample';
import { IPnPReactCtrlSampleProps } from './components/IPnPReactCtrlSampleProps';

//Import PnP Field Controls
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';

export interface IPnPReactCtrlSampleWebPartProps {
  description: string;
  lists: string | string[];
}

export default class PnPReactCtrlSampleWebPart extends BaseClientSideWebPart<IPnPReactCtrlSampleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPnPReactCtrlSampleProps > = React.createElement(
      PnPReactCtrlSample,
      {
        description: this.properties.description,
        list: this.properties.lists,
        context: this.context,
        displayMode: this.displayMode,
        updateProperty: (value: string) => {
          this.properties.description = value;
        },
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
                }),
                PropertyFieldListPicker('lists', {
                  label: 'Select a list',
                  selectedList: this.properties.lists,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  baseTemplate: 101,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
