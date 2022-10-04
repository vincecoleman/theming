//This makes ALL properties of any object or array optional recursively

export type RecursivePartial<Type> = {
    [Property in keyof Type]? :  
        Type[Property] extends(infer Item)[] ? RecursivePartial<Item>[] : 
        Type[Property] extends object ?
            RecursivePartial<Type[Property]>
            : Type[Property]
}