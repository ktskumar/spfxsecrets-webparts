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
import styles from './PnPReactCtrlSample.module.scss';
//Import PnP JS
import { sp } from '@pnp/sp';
//Import PnP React Controls
import { ListView } from "@pnp/spfx-controls-react/lib/ListView";
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
var PnPReactCtrlSample = (function (_super) {
    __extends(PnPReactCtrlSample, _super);
    function PnPReactCtrlSample(props) {
        var _this = _super.call(this, props) || this;
        _this._viewFields = [
            {
                name: "Id",
                displayName: "ID",
                maxWidth: 25,
                minWidth: 25,
                sorting: true
            },
            {
                name: "File.Name",
                linkPropertyName: "File.ServerRelativeUrl",
                displayName: "Name",
                sorting: true
            },
            {
                name: "File.TimeCreated",
                displayName: "Created",
                minWidth: 150,
                render: function (item) {
                    var created = item["File.TimeCreated"];
                    if (created) {
                        var createdDate = created;
                        return React.createElement("span", null, createdDate);
                    }
                }
            }
        ];
        sp.setup({
            spfxContext: _this.props.context
        });
        _this.state = {
            items: []
        };
        return _this;
    }
    PnPReactCtrlSample.prototype.componentDidMount = function () {
        if (this.props.list != null && this.props.list != "") {
            this.getListItems();
        }
    };
    PnPReactCtrlSample.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.props.list != prevProps.list) {
            if (this.props.list != null && this.props.list != "") {
                this.getListItems();
            }
            else {
                this.setState({
                    items: []
                });
            }
        }
    };
    PnPReactCtrlSample.prototype.getListItems = function () {
        var _this = this;
        sp.web.lists.getById(this.props.list.toString()).items.filter('FSObjType eq 0').expand('File').get()
            .then(function (resp) { return resp; })
            .then(function (items) {
            _this.setState({
                items: items ? items : []
            });
        });
    };
    PnPReactCtrlSample.prototype._onConfigure = function () {
        // Context of the web part    
        this.props.context.propertyPane.open();
    };
    PnPReactCtrlSample.prototype.render = function () {
        if (this.props.list == null || this.props.list == "") {
            return (React.createElement(Placeholder, { iconName: 'Edit', iconText: 'List view web part configuration', description: 'Please configure the web part before you can show the list view', buttonLabel: 'Configure', onConfigure: this._onConfigure.bind(this) }));
        }
        else {
            return (React.createElement("div", { className: styles.pnPReactCtrlSample }, this.state.items.length === 0 ?
                React.createElement(Placeholder, { iconName: "InfoSolid", iconText: "No items found", description: "The list or library you selected does not contain items." })
                :
                    React.createElement("div", null,
                        React.createElement(WebPartTitle, { displayMode: this.props.displayMode, title: this.props.description, updateProperty: this.props.updateProperty }),
                        React.createElement(ListView, { items: this.state.items, viewFields: this._viewFields, iconFieldName: "File.ServerRelativeUrl", compact: true }))));
        }
    };
    return PnPReactCtrlSample;
}(React.Component));
export default PnPReactCtrlSample;
//# sourceMappingURL=PnPReactCtrlSample.js.map