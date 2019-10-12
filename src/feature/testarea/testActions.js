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

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const asyncDecrement = () => {
    return async dispatch => {
        await delay(1000);
        dispatch(decrementCounter());
    }
}

export const registerNewAccount = (credentials) => {
    return async (dispatch, getState, {getFirebase}) => {
        try {
            const firebaseApi = getFirebase();
            //const credentials = ;
            const userData =  await firebaseApi.createUser({
                email: "test_21@test.com",
                password: "123456",
            });
            console.log(userData.user.uid);
            await firebaseApi.push('todos/abc', { some: 'data' });
            await firebaseApi.logout();
            console.log('complete');     
        } catch(error){
            console.log(error);     
        }
    }
}