var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'PnPReactCtrlSampleWebPartStrings';
import PnPReactCtrlSample from './components/PnPReactCtrlSample';
//Import PnP Field Controls
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
var PnPReactCtrlSampleWebPart = (function (_super) {
    __extends(PnPReactCtrlSampleWebPart, _super);
    function PnPReactCtrlSampleWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PnPReactCtrlSampleWebPart.prototype.render = function () {
        var _this = this;
        var element = React.createElement(PnPReactCtrlSample, {
            description: this.properties.description,
            list: this.properties.lists,
            context: this.context,
            displayMode: this.displayMode,
            updateProperty: function (value) {
                _this.properties.description = value;
            },
        });
        ReactDom.render(element, this.domElement);
    };
    PnPReactCtrlSampleWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(PnPReactCtrlSampleWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    PnPReactCtrlSampleWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return PnPReactCtrlSampleWebPart;
}(BaseClientSideWebPart));
export default PnPReactCtrlSampleWebPart;
//# sourceMappingURL=PnPReactCtrlSampleWebPart.js.map