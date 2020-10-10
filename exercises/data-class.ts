class Data {
    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;

        this.response = undefined;
        this.fulfilled= false;
    }

    public method: string;

    public uri: string;

    public version: string;

    public message: string;

    public response: string;

    public fulfilled: boolean;

    printInfo(): void {
        console.log(`
            Method: ${this.method}
            Uri: ${this.uri}
            Version: ${this.version}
            Message: ${this.message}
            Response: ${this.response}
            Fulfilled: ${this.fulfilled}`);
    }
}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
myData.printInfo();