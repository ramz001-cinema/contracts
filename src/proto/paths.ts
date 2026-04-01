import { join } from "path";

export const PROTO_PATHS = {
  AUTH: join(__dirname, "..", "..", "proto", "auth.proto"),
};

console.log("PROTO_PATHS", PROTO_PATHS);
