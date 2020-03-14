export class NameColorPair{
    private _name: string;
    private _color: string;

    constructor(name: string, color: string){
        this._color = color;
        this._name = name;
    }

    get name(): string{
        return this._name;
    }

    get color(): string{
        return this._color;
    }
}