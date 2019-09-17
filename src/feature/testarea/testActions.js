export const INCREMENT_COUNTER = "increment_counter";
export const DECREMENT_COUNTER = "decrement_counter";

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }
}