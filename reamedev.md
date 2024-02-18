# use
```typescript

function showMessage(from, text) {
    from = '*' + from + '*'; // hace que "from" se vea mejor
    alert(from + ': ' + text);
}
/**
 * @function Message description
 *
 * @name from description @param {any} from
 * @returns {void} description 
 */
function Message(from) {
    from = '*' + from + '*'; // hace que "from" se vea mejor
    alert(from);
}
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        alert(i); // un número primo
    }
}
function verifyResult(result: string) {
    if (result === "success") {
        console.log("Passed");
    } else {
        console.log("Failed")
    }
}
function divide(numerator: number, denominator: number): number {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}
function qq([id], {name}, ...aa): string { 
    this.id = id 
    this.name = name 
    return ""
} 
function qqww(aa = 'aa', bb = '', cc = null): string { 
    this.id = aa 
    this.name = bb 
    return ""
}
function xx(id: string, name: boolean): string {this.id = id;this.name = name;return "";}
function sn(sasp, param, arg) {}
function jvf() {}
/**
 * function \w+\(  ✅
 * \((\w+(, )*)*\)(\: \w*)* \{
 * (?<=\[|\{|\.)\w+
 * \w+ \= \'\w*\'| \w+ = \'\'| \w+ = null  ✅
 * function \w+\(\w+ \= \'\w*\'| \w+ = \'\'| \w+ = null\)(\: \w*)* \{  ✅
 * function \w+\(\[\w+\]| \{\w+\}| \...\w+\)(\: \w*)* \{  ✅
*/
/* function showMessage(from, text) {
}
function showMessage(from, text): string {
}
function Message(from) {
}
function showPrimes(n) {
}
function qqww(aa = 'aa', bb = '', cc = null): string { 
}
function qq([id], {name}, ...aa): string { 
} 
function verifyResult(result: string) {
}
function \w+\((?:(\w+)(?:: \w+)?(?:,\s)?)*\)
function divide(numerator: number, denominator: number, des: string): number {
}
function xx(id: string, name: boolean): string {this.id = id;this.name = name;return "";}
function sn(sasp, param, arg) {}
function jvf() {} */
\((\w+(?:,\s\w+)*)\)
function showMessage(aa, text, to): number {
}
function showMessage(from): Array {
}
\((\w+)(?:\s=\s'[^']*')?(?:,\s*(\w+)(?:\s=\s'[^']*')?)*\)
function qqww(aa = 'aa', bb = 'aa', cc = 'aa'): string { 
}
\((\w+)(?:\s=\s'[^']*')?(?:,\s(\w+)(?:\s*=\s'[^']*')?)*\)
function qqww(aa = '', bb = '', cc = ''): string { 
}
\((\w+)(?:\s=\s\w+)?(?:,\s(\w+)(?:\s=\s\w+)?)*\)
function qqww(aa = null, bb = null, cc = null): string { 
}
\[(\w+)\](?:,\s\[(\w+)\])*
function qq([id], [aac], [cc]): string { 
} 
\{(\w+)\}(?:,\s\{(\w+)\})*
function qq({asa}, {name}, {ccc}): string { 
} 
\.{3}(\w+)(?:,\s\.{3}(\w+))*
function qq(...aa, ...bb, ...cc): string { 
}
\((\w+)(?:: \w+)?(?:,\s(\w+)(?:: \w+)?)*\)
function divide(numerator: number, denominator: number, des: string): number {
}
function showMessage(from, bb = 'aa', cc = '', dd = '', ee = null, [id], {name}, ...gg): number {
}

function \w+\((?:(\w+)(?:\s=\s'[^']*')?|(?:\w+)?(?:\s=\s\w+)?|\[(\w+)\]|\{(\w+)\}|\.{3}(\w+))(?:,\s(?:(\w+)(?:\s=\s'[^']*')?|(?:\w+)?(?:\s=\s\w+)?|\[(\w+)\]|\{(\w+)\}|\.{3}(\w+)))*\)(\: \w*)* \{

```
