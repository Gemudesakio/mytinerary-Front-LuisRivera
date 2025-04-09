========================================================================================================
 
 1. Instalación de dependencias necesarias
 Para comenzar con Redux Toolkit y React Redux:
 npm install @reduxjs/toolkit
 npm install react-redux
 @reduxjs/toolkit: facilita la configuracin y manejo de Redux.
 react-redux: conecta Redux con los componentes de React.
 
========================================================================================================
 
 2. Crear las acciones (actions)
 Las acciones representan eventos que pueden ocurrir en la aplicacin.-
  Usamos createAction para crear acciones sincrnicas.- Tambin podemos usar 
  createAsyncThunk para acciones asncronas como peticiones HTTP.

 Ejemplo:

 import { createAction } from '@reduxjs/toolkit';
 export const addToCart = createAction('cart/addToCart');
 export const removeFromCart = createAction('cart/removeFromCart');


 Nota: El string 'cart/addToCart' es el type de la accin y debe ser descriptivo.
 Cuando se use un dispatch(addToCart(producto)), el objeto producto se pasa como payload.

========================================================================================================

 3. Crear el reducer (estado y lógica de cambio)
 Un reducer gestiona cmo el estado cambia en funcin de las acciones.

  Ejemplo:

 import { createReducer } from '@reduxjs/toolkit';
 import { addToCart, removeFromCart } from './actions/cartActions';
 const initialState = {};
 const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const product = action.payload;
      state[product.id] = state[product.id]
        ? { ...state[product.id], quantity: state[product.id].quantity + 1 }
        : { ...product, quantity: 1 };
    })
    .addCase(removeFromCart, (state, action) => {
      delete state[action.payload.id];
    });
 });
 export default cartReducer;

 Immer permite mutar el state directamente sin romper la inmutabilidad

========================================================================================================
 
 4. Estructura de carpetas y configuración del Store
 Estructura recomendada:
 src/
 redux/
    store.js
    actions/
       cartActions.js
    reducers/
        cartReducer.js


 Configurar el store  Ejemplo:

 import { configureStore } from '@reduxjs/toolkit';
 import cartReducer from './reducers/cartReducer';
 const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
 });
 export default store;

========================================================================================================
 
 5. Proveer el store a la app (Provider)
 En el archivo principal (index.js o main.jsx):


 Ejemplo:

 import React from 'react';
 import App from './App';
 import { Provider } from 'react-redux';
 import store from './redux/store';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
 );
 Esto conecta todo React con Redux.

========================================================================================================
 
 6. Despachar acciones desde componentes (useDispatch)
 En el componente donde se necesite actualizar el estado global:
Guía práctica para implementar Redux Toolkit en React

 Ejemplo:

 import { useDispatch } from 'react-redux';
 import { addToCart } from '../redux/actions/cartActions';
 const Producto = ({ producto }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(producto));
  };
  return <button onClick={handleAddToCart}>Agregar al carrito</button>;
 };

========================================================================================================

 7. Acceder al estado global (useSelector)
 Para leer el estado global en cualquier componente:

  Ejemplo:

 import { useSelector } from 'react-redux';
 const Carrito = () => {
  const carrito = useSelector((state) => state.cart);
  return (
    <div>
      {Object.values(carrito).map((producto) => (
        <div key={producto.id}>
          {producto.title} - {producto.quantity}
        </div>
      ))}
    </div>
  );
 };
 Cada vez que el valor devuelto por useSelector cambia,
 el componente se vuelve a renderizar automticamente.

========================================================================================================