class KeyValuePair<TKey, Tvalue> {
    private key: TKey;
    private value: Tvalue;

    public setKeyValue(key: TKey, value: Tvalue): void {
        this.key = key;
        this.value = value;
    }

    public display(): void {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();