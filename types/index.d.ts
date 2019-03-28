declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}
declare var wbp:{
    dev:boolean,
    [name:string]:any,
};

type RootState={
    loading:{
        prev:number,
        shade:number,
        effect:number
    }
};
interface Window {
    addWordList;
}
