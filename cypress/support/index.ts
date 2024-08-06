import './commands';
/// <reference types="cypress" />

type LoginCommandArgs = {
    username?: string;
    password?: string;
};
declare global {
    namespace Cypress {
        interface Chainable {
            
            login: (username?: string, password?: string) => Chainable<JQuery<HTMLElement>>;
            clickOutside: () => void;
        }
    }
}