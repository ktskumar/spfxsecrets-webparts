import { LogLevel } from '../../../../Stores/TraceDisplayStore';
import { formatTimestamp } from './traceFormatting';
import strings from './../TraceDisplay.resx';
var HEADER = 'data:text/csv;charset=utf-8';
var NEWLINE = '\n';
var FILENAME = 'spfx_trace_logs.csv';
export function triggerCsvDownload(traces) {
    var tracesLength = traces.length;
    if (tracesLength === 0) {
        return;
    }
    var csvContent = _generateCsvContent(traces);
    var link = document.createElement('a');
    link.setAttribute('href', encodeURI(HEADER + "," + csvContent));
    link.setAttribute('download', FILENAME);
    link.setAttribute('data-automation-id', 'trace-csv-download-anchor');
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link);
}
function _generateCsvContent(traces) {
    var headerLine = [
        strings.TimestampHeaderLabel,
        strings.LevelHeaderLabel,
        strings.ScopeHeaderLabel,
        strings.SourceHeaderLabel,
        strings.MessageHeaderLabel
    ].map(_escapeCsvField).join(',');
    return "" + headerLine + NEWLINE + traces.map(_generateCsvLine).join(NEWLINE);
}
function _generateCsvLine(trace) {
    var logEventArray = [
        formatTimestamp(trace.timestamp),
        (trace.level) ? LogLevel[trace.level] : ' ',
        trace.source,
        (trace.message) ? trace.message : ((trace.error) ? trace.error.message : ' ')
    ];
    return logEventArray.map(_escapeCsvField).join(',');
}
function _escapeCsvField(rawField) {
    if (!rawField) {
        return ''; 
    }
    var escapedField = rawField.replace(/(")/g, '""'); 
    if (escapedField.match(/([,"\n])/)) {
        escapedField = "\"" + escapedField + "\""; 
    }
    return escapedField;
}
