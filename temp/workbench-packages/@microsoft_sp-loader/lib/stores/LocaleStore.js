var LocaleStore = (function () {
    function LocaleStore() {
    }
    LocaleStore.getLocale = function () {
        return LocaleStore._locale;
    };
    LocaleStore.setLocale = function (locale) {
        LocaleStore._locale = locale;
    };
    LocaleStore._locale = undefined;
    return LocaleStore;
}());
export default LocaleStore;
