define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Die Anwendung auf dieser Seite kann nicht geladen werden. Verwenden Sie die Schaltfläche \"Zurück\" des Browsers, um es noch mal zu versuchen. Wenn das Problem weiterhin besteht, wenden Sie sich an den Administrator der Website, und teilen Sie ihm die Informationen unter \"Technische Details\" mit.",
      "platformFailedToLoadError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\".\r\nError: {2}",
      "applicationFailedToInitializeError": "***Error initializing application. Error: {0}",
      "invalidPreloadedDataError": "***Invalid preloaded data.",
      "manifestNotFoundByIdError": "***Manifest not found for component id \"{0}\".",
      "manifestNotFoundError": "***Manifest not found for component id \"{0}\" and version \"{1}\".",
      "systemConfigDisabledError": "***System.config() is not supported. Use a manifest to specify the configuration.",
      "loadComponentLog": "***Loading component \"{0}\" ({1}).",
      "loadComponentEndLog": "***Component \"{0}\" ({1}) loaded.",
      "loadComponentRetryLog": "***Loading component \"{0}\" ({1}). Attempt {2} of {3}.",
      "loadComponentError": "***Failed to load component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentMaxRetriesError": "***Attempted to load component \"{0}\" ({1}) {2} times without success.",
      "loadComponentDependencyError": "***Failed to load component dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadComponentDependencyFailoverPathError": "***Failed to load component dependency \"{0}\" with failover path \"{1}\" from component \"{2}\" ({3}).\r\nOriginal error: {4}",
      "loadPathDependencyLog": "***Loading path dependency \"{0}\" from component \"{1}\" ({2})",
      "loadPathDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}) due to another dependency that failed to load.",
      "loadEntryPointError": "***Failed to load entry point from component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentReturnsEmptyError": "***loadComponent() returned an empty object for component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "***loadComponent() returned an object with an empty default property for component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "***The entry point for component \"{0}\" ({1}) has a dependency on \"{2}\" that is not declared in the manifest.",
      "loadScriptWithStringError": "***loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.",
      "tooManyManifestsError": "***{0} manifests (versions {1}) found for component \"{2}\".",
      "tooManyCompatibleVersionsError": "***{0} compatible versions ({1}) found for component \"{2}\" version \"{3}\".",
      "tooManyComponentsError": "***Too many components found for id \"{0}\".",
      "noComponentFoundError": "***No component found for id \"{0}\".",
      "deleteComponentLog": "***Deleting component \"{0}\" version \"{1}\" from the store.",
      "browserNotSupportedError": "***This version of your browser is not supported.\r\nPlease update your browser to the latest version.",
      "ie9OrOlderNotSupportedError": "***This page does not support Internet Explorer releases older than version 10. Please update your web browser.",
      "firefox43OrOlderNotSupportedError": "***This page does not support Mozilla Firefox releases older than version 44. Please update your web browser.",
      "resourceNotFoundError": "***Resource \"{0}\" not found in loader configuration of manifest for component \"{1}\" ({2}).",
      "noFailoverPathError": "***Cannot call resolveAddress() on a component with no failover path",
      "urlStatusLocalhostFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.\r\nMake sure that you are running 'gulp serve'.",
      "urlStatusFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.",
      "urlStatusForbiddenError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.",
      "urlStatusClientErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.",
      "urlStatusServerErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.",
      "urlStatusLocalhostNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nMake sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nThis may be a problem with a HTTPS certificate. Make sure you have the right certificate.",
      "urlStatusNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.",
      "urlStatusUndefinedError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.",
      "isUndefinedValidateError": "***The value for \"{0}\" must not be undefined",
      "failedToCreateGlobalVariableError": "***Failed to create global variable \"{0}\" from script \"{1}\"",
      "dependencyLoadError": "***Failed to load module '{0}' because dependency {1} was not loaded",
      "missingPathDependencyError": "***Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "***Error loading debug script. Ensure the server is running and the \"{0}\" parameter URL is correct.",
      "errorLoadingDebugScriptHTTP": "***Error loading debug script. Ensure the server is running, the \"{0}\" parameter URL is correct, and loading unsafe scripts is allowed. Also consider using a development certificate and serving debug scripts over HTTPS.",
      "errorLoadingDebugScriptMalformed": "***Error loading debug script. The debug URL ({0}) appears to be malformed.",
      "errorLoadingDebugScriptUnknown": "***Unknown error loading a debug script.",
      "errorLoadingDebugLoaderTitle": "***Error loading debug loader.",
      "errorLoadingDebugManifestTitle": "***Error loading debug manifests.",
      "errorLoadingUnknownTitle": "***Error loading debug scripts."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "***Missing component or initializer function.",
      "closeDeveloperToolsAriaLabel": "***Close developer tools."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Warnung!",
      "warningLine1": "Wenn Sie dieses Tool verwenden, setzt Sie dies potenziellen Sicherheitsrisiken aus, die dazu führen können, dass andere Zugriff auf Ihre persönlichen Office 365-Daten erhalten (Dokumente, E-Mails, Unterhaltungen und mehr). Stellen Sie sicher, dass Sie der Person oder Organisation vertrauen, die Sie aufgefordert hat, auf dieses Tool zuzugreifen, bevor Sie fortfahren.",
      "warningLine2": "Hier erfahren Sie mehr: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "***An error occured loading debug manifests.",
      "debugManifestErrorDismissButtonText": "***Dismiss"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Debugskripts zulassen?",
      "allowDebugLoaderTitle": "***Allow debug loader?",
      "allowDebugLoaderAndManifestsTitle": "Debugladeprogramm und Debugskripts zulassen?",
      "debugManifestLoadingWarning": "WARNUNG: Diese Seite enthält unsichere Skripts, die, falls sie geladen werden, für Ihren Computer möglicherweise gefährlich sein können! Setzen Sie den Vorgang nicht fort, es sei denn, der Entwickler ist Ihnen bekannt, und Sie kennen die Risiken.",
      "debugManifestLoadingWarning2": "Wenn Sie unsicher sind, klicken Sie auf \"{0}\".",
      "debugManifestLoadingConfirm": "Debugskripts laden",
      "debugManifestLoadingCancel": "Debugskripts nicht laden",
      "debugManifestLoadingCalloutText": "Wenn Sie nicht wissen, was das ist, klicken Sie hier."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "***Loading...",
      "developerToolsTabLoadingUnknownError": "***Unknown error loading developer tools module."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifeste",
      "noManifestSelected": "Kein Manifest ausgewählt"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Leistung",
      "ErrorAccessingPerfDataErrorMessage": "Leistungsdaten können nicht abgerufen werden: Das Objekt ist null oder nicht definiert.",
      "ErrorAccessingRedirectDataErrorMessage": "Problem beim Zugriff auf die HTTP-Umleitungsleistungsdaten.",
      "ErrorParsingPercievedLatencyErrorMessage": "Fehler bei der Analyse der wahrgenommenen Wartezeitdaten.",
      "ErrorParsingApiDataErrorMessage": "Fehler bei der Analyse der API-Daten.",
      "UnkownPerformanceDataErrorMessage": "Unbekannter Fehler: {0}",
      "DefaultWebPartName": "Webpart",
      "ServerResponseLabel": "Serverantwort",
      "ApplicationInitializationLabel": "Anwendungsinitialisierung",
      "ScriptFetchEvalLabel": "Skriptabruf und -auswertung",
      "SpLoaderStartLabel": "SPFx-Initialisierung",
      "PageRenderLabel": "Seitenwiedergabe",
      "LeftNavRenderLabel": "Wiedergabe der linken Navigation",
      "CanvasRenderLabel": "Zeichenbereichswiedergabe",
      "LayoutRenderLabel": "Layout rendern",
      "RedirectResponseLabel": "Antwort umleiten",
      "AppLoadLabel": "Laden der Anwendung",
      "RenderWebPartsLabel": "Wiedergeben von Webparts",
      "TotalRenderTimeLabel": "Gesamt",
      "GeneralErrorMessage": "Beim Abrufen der Leistungsdaten hat leider etwas nicht geklappt.",
      "ErrorMessagePrefix": "Fehlermeldung: {0}",
      "PerformanceDataHint": "Hinweis: Nach dem Hinzufügen oder Entfernen eines Webparts aktualisieren Sie die Seite, um aktualisierte Leistungsdaten anzuzeigen.",
      "ModulesLoadedLegendLabel": "Geladene Module",
      "InitializationLegendLabel": "Initialisierung",
      "RenderTimeLegendLabel": "Wiedergabezeit",
      "InitializationTimeLabel": "***Initialization time",
      "ModuleLoadingTimeLabel": "***Module loading time",
      "ModuleLazyLoadingDelayLabel": "***Module loading delayed",
      "DataFetchTimeLabel": "***Data fetch time",
      "DataFetchLegendLabel": "Datenabruf",
      "ItemsColumnHeader": "Elemente",
      "DurationColumnHeader": "Dauer",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/V"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Ablaufverfolgung",
      "EmptyTraceData": "Keine Ablaufverfolgungen geladen.",
      "ExportCSVButtonLabel": "CSV-Datei exportieren",
      "LevelHeaderLabel": "Ebene",
      "MessageHeaderLabel": "Meldung",
      "ScopeHeaderLabel": "Bereich",
      "SourceHeaderLabel": "Quelle",
      "TimestampHeaderLabel": "Zeitstempel",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Problem beim Zugriff auf die Ablaufverfolgungsdaten."
    }
  };

  strings.default = strings;
  return strings;
});