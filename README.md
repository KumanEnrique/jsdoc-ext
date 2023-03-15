# use
```typescript
function employee(id:number,name:[]):string { 
    this.id = id 
    this.name = name 
    return ""
} 

function xx(id:string,name:boolean):string {this.id = id;this.name = name;return "";}
function sn(sasp,param,arg){}
function sd(){}
```

right click
`add a tsdoc`
or press `f1`
`add a tsDoc`
### result
```typescript

/**
 * employee
 *
 * @param {number} id description
 * @param {[])} name description
 * @returns {string}  description
 */
function employee(id:number,name:[]):string { 
    this.id = id 
    this.name = name 
    return ""
}

```