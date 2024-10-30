
# بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ


# AirPop

**AirPop** is a simple, lightweight popup component library for React. Easily add customizable popup functionality to your React apps with minimal setup.

## Features

- **Easy to Use**: Minimal configuration and setup required.
- **Lightweight**: Small bundle size with essential popup functionality.
- **Customizable**: Easily style and control popup behavior to fit your app’s needs.

## Installation

Install the library via npm:

```bash
npm install airpop
```

## Usage
0. **Important**: The `<Popup />` component must be included in `App.tsx` or another top-level component to ensure proper popup functionality.


   ```typescript
   import { Popup } from 'airpop';

   const App = () => {
     return (
       <div>
         <OtherComponents>
         <Popup />
       </div>
     );
   };

   export default App;
   ```


1. **Import** the `Popup` component and the `createPopup` function.

   ```typescript
   import { Popup, createPopup } from 'airpop';
   ```

2. **Create a popup instance** using the `createPopup` function, passing your component as an argument.

   ```typescript
   import React from 'react';
   import { Popup, createPopup } from 'airpop';

   const ComponentWhereIWantToUsePopup = () => {

     const openTest = createPopup(<Test />);

     return (
       <div>
         <button onClick={openTest} className="border-border border-[1px] mx-2 rounded-md p-2 mt-2">
           Open Test
         </button>
       </div>
     );
   };

   ```


## License

This library is licensed under the MIT License.


## summary

﴾ ذَٰلِكَ فَضْلُ اللَّهِ يُؤْتِيهِ مَن يَشَاءُ ۚ وَاللَّهُ ذُو الْفَضْلِ الْعَظِيمِ﴿

