export default AirflexJS;
export function create(key: any, config?: {}): void;
export function logEvent(eventName: any, data?: {}): void;
export function setPageView(pageName: any, data?: {}): void;
export function setUserId(userId: any): void;
export function setUserProperties(data?: {}): void;
export function getDeviceId(): any;
export function pushAds(data?: {}): void;
export function fetchAds(adId: any, adType: any): void;
export function trackingAds(adId: any, action: any, elId: any): void;
export const AirflexJS: Airflex;
declare class Airflex {
    setPageView(pageName: any, data?: {}): void;
    logEvent(eventName: any, data?: {}): void;
    setUserProperties(data?: {}): void;
    setUserId(userId: any): void;
    create(key: any, config?: {}): void;
    getDeviceId(): any;
    pushAds(data?: {}): void;
    fetchAds(adId: any, adType: any): void;
    trackingAds(adId: any, action: any, elId: any): void;
}
