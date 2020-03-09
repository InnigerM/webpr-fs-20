const id = x => x;
const fst = x => y => x;
const snd = x => y => y;
const M   = f => f (f);

<<<<<<< HEAD
const id = x => x;
const fst = x => y => x;
const snd = x => y => y;

const M = f => f (f); //Mockingbird

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
=======
const konst = fst;

const T = first => second => first;
const F = first => second => second;

const and = first => second => first ( second ) ( first );
const or  = M ;

const Pair = first => second => selector  => selector (first) (second);
const firstname = fst;
const lastname  = snd;
>>>>>>> c0f7a49c10182db8f165f85925ae68d5d01245ce

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




