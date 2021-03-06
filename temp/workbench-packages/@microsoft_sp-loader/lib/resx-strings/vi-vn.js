define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Không thể tải ứng dụng trên trang này. Sử dụng nút Quay lại trong trình duyệt để thử lại. Nếu sự cố vẫn tiếp diễn, hãy liên hệ với người quản trị site và cung cấp cho họ thông tin trong Chi tiết Kỹ thuật.",
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
      "warningHeading": "Cảnh báo!",
      "warningLine1": "Việc sử dụng công cụ này sẽ khiến bạn đối mặt với mối đe dọa bảo mật tiềm ẩn, có thể dẫn đến việc những người khác có quyền truy nhập vào dữ liệu Office 365 cá nhân của bạn (tài liệu, email, cuộc hội thoại và các nội dung khác). Hãy đảm bảo rằng bạn tin tưởng người hoặc tổ chức yêu cầu bạn truy nhập công cụ này trước khi tiếp tục.",
      "warningLine2": "Tìm hiểu thêm ở đây: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "***An error occured loading debug manifests.",
      "debugManifestErrorDismissButtonText": "***Dismiss"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Cho phép gỡ lỗi tập lệnh?",
      "allowDebugLoaderTitle": "***Allow debug loader?",
      "allowDebugLoaderAndManifestsTitle": "Cho phép trình tải gỡ lỗi và tập lệnh gỡ lỗi?",
      "debugManifestLoadingWarning": "CẢNH BÁO: Trang này chứa các tập lệnh không an toàn, có thể gây hại cho máy tính của bạn nếu được tải! Đừng tiếp tục trừ khi bạn tin cậy nhà phát triển và hiểu rõ các rủi ro.",
      "debugManifestLoadingWarning2": "Nếu bạn không chắc chắn, hãy bấm vào {0}.",
      "debugManifestLoadingConfirm": "Tải tập lệnh gỡ lỗi",
      "debugManifestLoadingCancel": "Không tải tập lệnh gỡ lỗi",
      "debugManifestLoadingCalloutText": "Nếu bạn không biết phải làm gì, hãy bấm vào đây."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "***Loading...",
      "developerToolsTabLoadingUnknownError": "***Unknown error loading developer tools module."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Tệp kê khai",
      "noManifestSelected": "Chưa chọn tệp kê khai nào"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Hiệu suất",
      "ErrorAccessingPerfDataErrorMessage": "Không thể truy xuất dữ liệu hiệu suất: đối tượng là null hoặc không xác định.",
      "ErrorAccessingRedirectDataErrorMessage": "Đã xảy ra sự cố khi truy nhập dữ liệu hiệu suất chuyển hướng HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Đã phát hiện lỗi khi phân tích dữ liệu độ trễ đã tiếp nhận.",
      "ErrorParsingApiDataErrorMessage": "Đã phát hiện lỗi khi phân tích dữ liệu API.",
      "UnkownPerformanceDataErrorMessage": "Đã xảy ra lỗi không xác định: {0}",
      "DefaultWebPartName": "Phần Web",
      "ServerResponseLabel": "Phản hồi Máy chủ",
      "ApplicationInitializationLabel": "Khởi tạo Ứng dụng",
      "ScriptFetchEvalLabel": "Tải tập lệnh và đánh giá",
      "SpLoaderStartLabel": "Khởi tạo SPFx",
      "PageRenderLabel": "Kết xuất Trang",
      "LeftNavRenderLabel": "Kết xuất Dẫn hướng Bên trái",
      "CanvasRenderLabel": "Kết xuất Bề mặt",
      "LayoutRenderLabel": "Kết xuất Bố trí",
      "RedirectResponseLabel": "Chuyển hướng Phản hồi",
      "AppLoadLabel": "Tải Ứng dụng",
      "RenderWebPartsLabel": "Kết xuất Phần Web",
      "TotalRenderTimeLabel": "Tổng",
      "GeneralErrorMessage": "Rất tiếc, đã xảy ra lỗi khi truy xuất dữ liệu hiệu suất.",
      "ErrorMessagePrefix": "Thông báo Lỗi: {0}",
      "PerformanceDataHint": "Lưu ý: Sau khi thêm hoặc loại bỏ phần web, hãy làm mới trang để xem dữ liệu hiệu suất cập nhật.",
      "ModulesLoadedLegendLabel": "Mô-đun Đã tải",
      "InitializationLegendLabel": "Khởi tạo",
      "RenderTimeLegendLabel": "Thời gian Kết xuất",
      "InitializationTimeLabel": "***Initialization time",
      "ModuleLoadingTimeLabel": "***Module loading time",
      "ModuleLazyLoadingDelayLabel": "***Module loading delayed",
      "DataFetchTimeLabel": "***Data fetch time",
      "DataFetchLegendLabel": "Tải Dữ liệu",
      "ItemsColumnHeader": "Mục",
      "DurationColumnHeader": "Thời lượng",
      "MillisecondsUnitLabel": "{0} mili giây",
      "NAPlaceholder": "N/A"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Dấu vết",
      "EmptyTraceData": "Chưa tải dấu vết nào.",
      "ExportCSVButtonLabel": "Xuất CSV",
      "LevelHeaderLabel": "Mức",
      "MessageHeaderLabel": "Thông báo",
      "ScopeHeaderLabel": "Phạm vi",
      "SourceHeaderLabel": "Nguồn",
      "TimestampHeaderLabel": "Dấu thời gian",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Đã xảy ra sự cố khi truy nhập dữ liệu dấu vết."
    }
  };

  strings.default = strings;
  return strings;
});