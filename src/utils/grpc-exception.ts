import { status } from "@grpc/grpc-js";
import { RpcException } from "@nestjs/microservices";

export class GrpcException extends RpcException {
  constructor(code: status, message: string) {
    super({ code, message });
  }

  // 400
  static invalidArgument(msg: string) {
    return new GrpcException(status.INVALID_ARGUMENT, msg);
  }

  // 401
  static unauthenticated(msg: string) {
    return new GrpcException(status.UNAUTHENTICATED, msg);
  }

  // 403
  static permissionDenied(msg: string) {
    return new GrpcException(status.PERMISSION_DENIED, msg);
  }

  // 404
  static notFound(msg: string) {
    return new GrpcException(status.NOT_FOUND, msg);
  }

  // 409
  static alreadyExists(msg: string) {
    return new GrpcException(status.ALREADY_EXISTS, msg);
  }

  // 422
  static failedPrecondition(msg: string) {
    return new GrpcException(status.FAILED_PRECONDITION, msg);
  }

  // 429
  static resourceExhausted(msg: string) {
    return new GrpcException(status.RESOURCE_EXHAUSTED, msg);
  }

  // 500
  static internal(msg: string) {
    return new GrpcException(status.INTERNAL, msg);
  }

  // 503
  static unavailable(msg: string) {
    return new GrpcException(status.UNAVAILABLE, msg);
  }
}
