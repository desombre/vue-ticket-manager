export abstract class API<T>{

    abstract readAll(): Promise<Array<T>>;
    abstract readSingle(id: string): Promise<T>;
    abstract update(id: string, obj: T): Promise<T>;
    abstract delete(id: string): Promise<T>;
    abstract create(obj: T): Promise<T>;

}