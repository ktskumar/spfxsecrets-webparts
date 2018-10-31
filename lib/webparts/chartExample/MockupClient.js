var MockupClient = (function () {
    function MockupClient() {
    }
    MockupClient.get = function () {
        return new Promise(function (resolve) {
            resolve(MockupClient.data);
        });
    };
    MockupClient.data = {
        value: [
            { Title: 'List1', ItemCount: 100 },
            { Title: 'List2', ItemCount: 10 },
            { Title: 'List3', ItemCount: 15 },
            { Title: 'List4', ItemCount: 200 },
            { Title: 'List5', ItemCount: 60 },
            { Title: 'List6', ItemCount: 0 },
            { Title: 'List7', ItemCount: 0 },
            { Title: 'List8', ItemCount: 10 }
        ]
    };
    return MockupClient;
}());
export default MockupClient;
//# sourceMappingURL=MockupClient.js.map