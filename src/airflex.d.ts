export declare class AirflexJS {
    create(apiKey: String, config: [String: any]): void;
    logEvent(eventName: String, data: [String: any]): void;
    setPageView(pageName: String, data: [String: any]): void;
    setUserProperties(data: [String: any]): void;
    setUserId(userId: String): void;
}
declare const Airflex: AirflexJS;
export default Airflex;
