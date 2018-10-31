export default class MockupClient {
    private static data: any = {
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

    public static get(): Promise<any> {
        return new Promise<any>((resolve) => {
            resolve(MockupClient.data);
        });
    }
}