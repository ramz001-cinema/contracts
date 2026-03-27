import { Observable } from "rxjs";
export declare const protobufPackage = "auth.v1";
export declare enum OtpType {
    OTP_TYPE_UNSPECIFIED = 0,
    OTP_TYPE_EMAIL = 1,
    OTP_TYPE_PHONE = 2,
    UNRECOGNIZED = -1
}
/** SendOtpRequest is the request message for sending an OTP to a user. */
export interface SendOtpRequest {
    id: string;
    type: OtpType;
}
/** SendOtpResponse is the response message indicating whether the OTP was sent successfully. */
export interface SendOtpResponse {
    ok: boolean;
}
export declare const AUTH_V1_PACKAGE_NAME = "auth.v1";
/** AuthService provides operations for authentication. */
export interface AuthServiceClient {
    /** SendOtp sends a one-time password (OTP) to the user based on the provided ID and type. */
    sendOtp(request: SendOtpRequest): Observable<SendOtpResponse>;
}
/** AuthService provides operations for authentication. */
export interface AuthServiceController {
    /** SendOtp sends a one-time password (OTP) to the user based on the provided ID and type. */
    sendOtp(request: SendOtpRequest): Promise<SendOtpResponse> | Observable<SendOtpResponse> | SendOtpResponse;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
