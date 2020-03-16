const id = x => x;
const fst = x => y => x;
const snd = x => y => y;
const M   = f => f (f);

const konst = fst;

const T = fst;
const F = snd;

const and = first => second => first (second) (first);

const or = first => second => first (first) (second);

const Pair = first => second => f => f (first) (second);
const firstname = fst;
const lastname = snd;

const Left = msg => f => g => f(msg);
const Right = res => f => g => g(res);
const either = e => f => g => e (f) (g);

// ----- special -----

const Tuple = n => [
    parmStore(n + 1)([])(parms => parms.reduce((accu, it) => accu(it), parms.pop())), // ctor
    ...Array.from({length: n}, (it, idx) => iOfN(n)(idx)())                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
        ? value
        : x => iOfN(n - 1)(i - 1)(i === 0 ? x : value);


const parmStore = n => args => onDone =>  // n args to come
    n === 0
        ? onDone(args)
        : arg => parmStore(n - 1)([...args, arg])(onDone); // store parms in array

const Choice = n => [
    ...Array.from({length: n}, (it, idx) => parmStore(n + 1)([])(parms => parms[idx + 1](parms[0]))), // ctors
    id
];




