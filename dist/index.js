"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirflexJS = exports.pushAds = exports.getDeviceId = exports.setUserProperties = exports.setUserId = exports.setPageView = exports.logEvent = exports.create = void 0;
const AirflexSDK = __importStar(require("./airflex"));
const setPageView = (pageName, data = {}) => {
    AirflexSDK.setPageView(pageName, data);
};
exports.setPageView = setPageView;
const logEvent = (eventName, data = {}) => {
    AirflexSDK.logEvent(eventName, data);
};
exports.logEvent = logEvent;
const setUserProperties = (data = {}) => {
    AirflexSDK.setUserProperties(data);
};
exports.setUserProperties = setUserProperties;
const setUserId = (userId) => {
    AirflexSDK.setUserId(userId);
};
exports.setUserId = setUserId;
const pushAds = (data = {}) => {
    AirflexSDK.pushAds(data);
};
exports.pushAds = pushAds;
const create = (key, config = {}) => {
    AirflexSDK.create(key, config);
};
exports.create = create;
const getDeviceId = () => {
    return AirflexSDK.getDeviceId();
};
exports.getDeviceId = getDeviceId;
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
const AirflexJS = new Airflex();
exports.AirflexJS = AirflexJS;
exports.default = AirflexJS;
