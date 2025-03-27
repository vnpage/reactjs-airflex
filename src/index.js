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

const fetchAds = (adId, adType) => {
    return AirflexSDK.fetchAds(adId, adType);
}

const trackingAds = (adId, action, elId) => {
    return AirflexSDK.trackingAds(adId, action, elId);
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

    fetchAds(adId, adType){
        return fetchAds(adId, adType);
    }

    trackingAds(adId, action, elId){
        return trackingAds(adId, action, elId);
    }
}

const AirflexJS = new Airflex()

export {
    create, logEvent, setPageView, setUserId, setUserProperties, getDeviceId, pushAds, fetchAds, trackingAds, AirflexJS
}

export default AirflexJS;