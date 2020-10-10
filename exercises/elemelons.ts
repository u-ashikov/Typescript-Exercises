abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

abstract class Elemelon extends Melon {
    protected element: string;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): void {
        console.log(`
        Element: ${this.element}
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}`)
    }
}

class Watermelon extends Elemelon {
    protected element: string = 'Water';
}

class Firemelon extends Elemelon {
    protected element: string = 'Fire';
}

class Earthmelon extends Elemelon {
    protected element: string = 'Earth';
}

class Airmelon extends Elemelon {
    protected element: string = 'Air';
}

class Melolemonmelon extends Watermelon {
    public morph(): void {
        this.element = 'Fire';
    }
}

let watermelon : Melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
console.log(watermelon.toString());

watermelon.morph();
console.log(watermelon.toString());
