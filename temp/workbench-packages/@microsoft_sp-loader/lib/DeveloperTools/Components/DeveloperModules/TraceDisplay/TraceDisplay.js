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
import styles from './TraceDisplay.module.scss';
import TraceDisplayStore from './../../../Stores/TraceDisplayStore';
import TraceList from './TraceList/TraceList';
var TraceDisplay = (function (_super) {
    __extends(TraceDisplay, _super);
    function TraceDisplay(props) {
        var _this = _super.call(this, props) || this;
        _this._setState = function () {
            _this.setState({
                filter: TraceDisplayStore.currentFilter
            });
        };
        _this.state = {
            filter: TraceDisplayStore.currentFilter
        };
        return _this;
    }
    TraceDisplay.prototype.componentDidMount = function () {
        TraceDisplayStore.addListener(this._setState);
    };
    TraceDisplay.prototype.componentWillUnmount = function () {
        TraceDisplayStore.removeListener(this._setState);
    };
    TraceDisplay.prototype.render = function () {
        return (React.createElement("div", { className: styles.container },
            React.createElement("div", { className: styles.traceListContainer },
                React.createElement(TraceList, { allTraces: TraceDisplayStore.traces, filters: this.state.filter }))));
    };
    return TraceDisplay;
}(React.Component));
export default TraceDisplay;
