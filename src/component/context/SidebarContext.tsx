import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
    isSidebarOpen: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return { ...state, isSidebarOpen: !state.isSidebarOpen };
        default:
            return state;
    }
};

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };

    return (
        <SidebarContext.Provider value={{ ...state, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

SidebarProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
