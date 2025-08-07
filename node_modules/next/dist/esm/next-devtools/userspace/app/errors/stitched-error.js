import React from 'react';
import isError from '../../../../lib/is-error';
const ownerStacks = new WeakMap();
const componentStacks = new WeakMap();
export function getComponentStack(error) {
    return componentStacks.get(error);
}
export function setComponentStack(error, stack) {
    componentStacks.set(error, stack);
}
export function getOwnerStack(error) {
    return ownerStacks.get(error);
}
export function setOwnerStack(error, stack) {
    ownerStacks.set(error, stack);
}
export function coerceError(value) {
    return isError(value) ? value : Object.defineProperty(new Error('' + value), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}
export function setOwnerStackIfAvailable(error) {
    // React 18 and prod does not have `captureOwnerStack`
    if ('captureOwnerStack' in React) {
        setOwnerStack(error, React.captureOwnerStack());
    }
}
export function decorateDevError(thrownValue, errorInfo) {
    const error = coerceError(thrownValue);
    setOwnerStackIfAvailable(error);
    // TODO: change to passing down errorInfo later
    // In development mode, pass along the component stack to the error
    if (errorInfo.componentStack) {
        setComponentStack(error, errorInfo.componentStack);
    }
    return error;
}

//# sourceMappingURL=stitched-error.js.map