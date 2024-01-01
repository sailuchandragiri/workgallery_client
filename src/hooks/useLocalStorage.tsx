// import { useEffect, useState } from 'react';
// const getLocalValue = (key, initValue) => {
//   //ssr NEXT JS
//   if (typeof window === 'undefined') return;
//   const localValue = JSON.parse(localStorage.getItem(key));
//   if (localValue) return localValue;
//   //return a result of a function
//   if (initValue instanceof Function) return initValue();
//   return initValue;
// };
// const useLocalStorage = (key: string, initValue) => {
//   const [value, setValue] = useState(() => getLocalValue(key, value));
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);
//   return [value, setValue];
// };

// export default useLocalStorage;
