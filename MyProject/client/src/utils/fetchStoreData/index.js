export default async function fetchStoreData({
    dispatch,
    startLoading,
    handlerSuccess,
    handlerError,
    fetch
}){
    try {
        if (typeof startLoading === 'function') {
           dispatch(startLoading()) 
        }

        const response = await fetch();

        if (typeof handlerSuccess === 'function') {
            dispatch(handlerSuccess())
        }

        return response;

    } catch (error) {
        if (typeof handlerError === 'function') {
            dispatch(handlerError(error))
        }
    }
}