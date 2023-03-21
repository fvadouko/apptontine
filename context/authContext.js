import React, { useReducer, createContext, useEffect } from 'react';

// reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// state
const initialState = {
  user: null,
};

// create context
const AuthContext = createContext();

// context provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state && state.user) {
      dispatch({
        type: 'LOGGED_IN_USER',
        payload: {
          idUser: user.idUser,
          token: idTokenResult.token,
          image: user.image,
        },
      });
    } else {
      // dispatch({
      //   type: 'LOGGED_IN_USER',
      //   payload: null,
      // });
    }
  }, []);

  const value = { state, dispatch };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// export
export { AuthContext, AuthProvider };
