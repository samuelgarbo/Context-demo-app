import React, { createContext, Component } from 'react';

const ThemeContext = createContext();

class ThemeProvider extends Component {
    constructor(props){
        super(props);
        this.state = {isDarkMode: true}
    }
    render() {
        return (
            <ThemeContext.Provider> value={{...this.state}}
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export ThemeProvider;