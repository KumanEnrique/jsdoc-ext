# use
```typescript

function Message(from) {
    from = '*' + from + '*'; // hace que "from" se vea mejor
    alert(from);
}
function showMessage(from, text) {
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
function showMessage(from, bb = 'aa', cc = '', dd = '', ee = null, [id], {name}, ...gg): number {
}
```

right click
`add a tsdoc`
or press `f1`
`add a tsDoc`
### result
```typescript

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
/**
 * @function showMessage description
 *
 * @name aa description @param {any} aa
 * @name text description @param {any} text
 * @name to description @param {any} to
 * @returns {number} description 
 */
function showMessage(aa, text, to): number {
}
/**
 * @function showMessage description
 *
 * @name from description @param {any} from
 * @returns {Array} description 
 */
function showMessage(from): Array {
}
/**
 * @function qqww description
 *
 * @name aa description @param {any} aa
 * @name bb description @param {any} bb
 * @name cc description @param {any} cc
 * @returns {string} description 
 */
function qqww(aa = 'aa', bb = 'aa', cc = 'aa'): string { 
}
/**
 * @function qqww description
 *
 * @name aa description @param {any} aa
 * @name bb description @param {any} bb
 * @name cc description @param {any} cc
 * @returns {string} description 
 */
function qqww(aa = '', bb = '', cc = ''): string { 
}
/**
 * @function qqww description
 *
 * @name aa description @param {any} aa
 * @name bb description @param {any} bb
 * @name cc description @param {any} cc
 * @returns {string} description 
 */
function qqww(aa = null, bb = null, cc = null): string { 
}
/**
 * @function qq description
 *
 * @name id description @param {any} id
 * @name aac description @param {any} aac
 * @name cc description @param {any} cc
 * @returns {string} description 
 */
function qq([id], [aac], [cc]): string { 
} 
/**
 * @function qq description
 *
 * @name asa description @param {any} asa
 * @name name description @param {any} name
 * @name ccc description @param {any} ccc
 * @returns {string} description 
 */
function qq({asa}, {name}, {ccc}): string { 
} 
/**
 * @function qq description
 *
 * @name aa description @param {any} aa
 * @name bb description @param {any} bb
 * @name cc description @param {any} cc
 * @returns {string} description 
 */
function qq(...aa, ...bb, ...cc): string { 
}
/**
 * @function showMessage description
 *
 * @name from description @param {any} from
 * @name bb description @param {any} bb
 * @name cc description @param {any} cc
 * @name dd description @param {any} dd
 * @name ee description @param {any} ee
 * @name id description @param {any} id
 * @name name description @param {any} name
 * @name gg description @param {any} gg
 * @returns {number} description 
 */
function showMessage(from, bb = 'aa', cc = '', dd = '', ee = null, [id], {name}, ...gg): number {
}

```