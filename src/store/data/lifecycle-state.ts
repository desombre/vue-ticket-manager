import { NameColorPair } from "./name-color-pair";

export class LifecycleState extends NameColorPair{

    
    private _nextLivecycleStates: Array<LifecycleState>;

    constructor(name: string, color: string, nextLivecycleStates?: Array<LifecycleState>){
        super(name, color);
        this._nextLivecycleStates = nextLivecycleStates;
    }
}