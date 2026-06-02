 export function LogMetodusHivas(originalMethod: any, context: ClassMethodDecoratorContext) {
    const metodusnev = String(context.name);

    return function (this: any, ...args: any[]) {
        console.log(`[LOG] '${metodusnev}' metódus hívása ezekkel a paraméterekkel:`, args);
        
        const result = originalMethod.apply(this, args);
        
        return result;
    };
} 
  