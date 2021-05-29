import { useEffect, createContext, useReducer } from 'react';

/* Constants */
import appStateActions from '@observagram-shared/constants/app-state-actions';

export const ApplicationContext = createContext({});

const initialAppState = {
  title: 'Observagram'
};

function appStateReducer(state, action) {
  switch (action.type) {
    case appStateActions.SHOW_HEADER:
      return {
        ...state,
        show_header: !action.val,
      };
    default:
      return state;
  }
}

function ApplicationProvider({ children }) {
  const [appState, appStateActionDispatch] = useReducer(
    appStateReducer,
    initialAppState
  );

  const value = {
    appState,
    appStateActionDispatch,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}


export default ApplicationProvider;
