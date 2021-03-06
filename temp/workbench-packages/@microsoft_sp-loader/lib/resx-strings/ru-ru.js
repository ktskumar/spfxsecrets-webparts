define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Не удается загрузить приложение на этой странице. Используйте кнопку \"Назад\" в браузере, чтобы повторить попытку. Если проблема сохранится, обратитесь к администратору сайта и предоставьте данные из раздела \"Технические подробности\".",
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
      "warningHeading": "Предупреждение.",
      "warningLine1": "Использование этого средства сопряжено с потенциальными угрозами безопасности ваших личных данных в Office 365 (документов, почты, бесед и т. д.). К этим данным могут получить доступ другие люди. Продолжайте, только если вы доверяете человеку или организации, которые попросили вас воспользоваться этим средством.",
      "warningLine2": "Подробнее: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "***An error occured loading debug manifests.",
      "debugManifestErrorDismissButtonText": "***Dismiss"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Разрешить сценарии отладки?",
      "allowDebugLoaderTitle": "***Allow debug loader?",
      "allowDebugLoaderAndManifestsTitle": "Разрешить загрузчик отладки и сценарии отладки?",
      "debugManifestLoadingWarning": "ПРЕДУПРЕЖДЕНИЕ. Эта страница содержит небезопасные сценарии, которые в результате загрузки могут нанести вред компьютеру. Продолжайте работу, только если доверяете разработчику и осознаете риски.",
      "debugManifestLoadingWarning2": "Если вы не уверены, нажмите кнопку \"{0}\".",
      "debugManifestLoadingConfirm": "Загрузить сценарии отладки",
      "debugManifestLoadingCancel": "Не загружать сценарии отладки",
      "debugManifestLoadingCalloutText": "Если вы не знаете, что делать, щелкните здесь."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "***Loading...",
      "developerToolsTabLoadingUnknownError": "***Unknown error loading developer tools module."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Манифесты",
      "noManifestSelected": "Манифест не выбран"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Производительность",
      "ErrorAccessingPerfDataErrorMessage": "Не удалось получить данные о производительности: объект имеет нулевое значение или не определен.",
      "ErrorAccessingRedirectDataErrorMessage": "При доступе к данным о производительности перенаправления HTTP возникла проблема.",
      "ErrorParsingPercievedLatencyErrorMessage": "При анализе в полученных данных о задержках обнаружена ошибка.",
      "ErrorParsingApiDataErrorMessage": "При анализе в данных API обнаружена ошибка.",
      "UnkownPerformanceDataErrorMessage": "Произошла неизвестная ошибка: {0}",
      "DefaultWebPartName": "Веб-часть",
      "ServerResponseLabel": "Отклик сервера",
      "ApplicationInitializationLabel": "Инициализация приложения",
      "ScriptFetchEvalLabel": "Получение и оценка сценариев",
      "SpLoaderStartLabel": "Инициализация SPFx",
      "PageRenderLabel": "Отрисовка страницы",
      "LeftNavRenderLabel": "Отрисовка левой области навигации",
      "CanvasRenderLabel": "Отрисовка холста",
      "LayoutRenderLabel": "Отрисовка макета",
      "RedirectResponseLabel": "Отклик перенаправления",
      "AppLoadLabel": "Загрузка приложения",
      "RenderWebPartsLabel": "Отрисовка веб-частей",
      "TotalRenderTimeLabel": "Всего",
      "GeneralErrorMessage": "К сожалению, при получении данных о производительности что-то пошло не так.",
      "ErrorMessagePrefix": "Сообщение об ошибке: {0}",
      "PerformanceDataHint": "Примечание. После добавления или удаления веб-части обновите страницу, чтобы увидеть обновленные данные производительности.",
      "ModulesLoadedLegendLabel": "Модули загружены",
      "InitializationLegendLabel": "Инициализация",
      "RenderTimeLegendLabel": "Время отрисовки",
      "InitializationTimeLabel": "***Initialization time",
      "ModuleLoadingTimeLabel": "***Module loading time",
      "ModuleLazyLoadingDelayLabel": "***Module loading delayed",
      "DataFetchTimeLabel": "***Data fetch time",
      "DataFetchLegendLabel": "Получение данных",
      "ItemsColumnHeader": "Элементы",
      "DurationColumnHeader": "Длительность",
      "MillisecondsUnitLabel": "{0} мс",
      "NAPlaceholder": "Н/Д"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Трассировка",
      "EmptyTraceData": "Трассировки не загружены.",
      "ExportCSVButtonLabel": "Экспорт CSV",
      "LevelHeaderLabel": "Уровень",
      "MessageHeaderLabel": "Сообщение",
      "ScopeHeaderLabel": "Область",
      "SourceHeaderLabel": "Источник",
      "TimestampHeaderLabel": "Метка времени",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Возникла проблема при доступе к данным трассировки."
    }
  };

  strings.default = strings;
  return strings;
});