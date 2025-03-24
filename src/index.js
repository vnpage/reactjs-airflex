import * as AirflexSDK from './airflex';

const setPageView = (pageName, data = {}) => {
    AirflexSDK.setPageView(pageName, data);
}

const logEvent = (eventName, data = {}) => {
    AirflexSDK.logEvent(eventName, data);
}

const setUserProperties = (data = {}) => {
    AirflexSDK.setUserProperties(data);
}

const setUserId = (userId) => {
    AirflexSDK.setUserId(userId);
}

const pushAds = (data = {}) => {
    AirflexSDK.pushAds(data);
}

const create = (key, config = {}) => {
    AirflexSDK.create(key, config);
}

const getDeviceId = () => {
    return AirflexSDK.getDeviceId();
}

class Airflex {
    setPageView(pageName, data = {}) {
        setPageView(pageName, data);
    }

    logEvent(eventName, data = {}) {
        logEvent(eventName, data);
    }

    setUserProperties(data = {}) {
        setUserProperties(data);
    }

    setUserId(userId) {
        setUserId(userId);
    }

    create(key, config = {}) {
        create(key, config);
    }

    getDeviceId() {
        return getDeviceId();
    }

    pushAds(data = {}) {
        pushAds(data);
    }
}

const AirflexJS = new Airflex()

export {
    create, logEvent, setPageView, setUserId, setUserProperties, getDeviceId, pushAds, AirflexJS
}

export default AirflexJS;