interface ResultData {
    success: boolean, 
    code: number, 
    data: any,
    error?: string
}
export declare class AirflexJS {
    create(apiKey: String, config: [String: any]): void;
    logEvent(eventName: String, data: [String: any]): void;
    setPageView(pageName: String, data: [String: any]): void;
    setUserProperties(data: [String: any]): void;
    setUserId(userId: String): void;
    pushAds(data: [string: any]): void;
    fetchAds(adId: string, adType: string): Promise<ResultData | null>;
    trackingAds(adId: string, action: string, elId: string): Promise<ResultData | null>;
}
declare const Airflex: AirflexJS;
export default Airflex;
