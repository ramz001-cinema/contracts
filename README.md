# @ramz001-cinema/contracts

> Protobuf definitions and generated TypeScript contracts for microservice communication in the Cinema Booking platform.

## 📦 Overview

Centralized gRPC contracts, protobufs, and generated s-proto interfaces. Ensures type-safety and consistent communication between Gateway, Auth, and Account microservices.

## 🚀 Installation

`pnpm install @ramz001-cinema/contracts`

## 💻 Usage

The protos are generated twice, because the service contract depends on the transport.

- `@ramz001-cinema/contracts/gen/*` — NestJS transport. Service contracts return `Observable` and are used with `ClientGrpc.getService()`.
- `@ramz001-cinema/contracts/gen-grpc/*` — `@grpc/grpc-js` client. Typed client constructor and callback style, for services that do not use NestJS.

```ts
// NestJS service
import { AuthServiceClient, AUTH_SERVICE_NAME } from '@ramz001-cinema/contracts/gen/auth/v1'

// Plain @grpc/grpc-js consumer
import { AuthServiceClient } from '@ramz001-cinema/contracts/gen-grpc/auth/v1'
const client = new AuthServiceClient(address, credentials.createInsecure())
```

Proto file paths are exported from the package root for services that load the `.proto` files at runtime:

```ts
import { PROTO_PATHS, PROTO_ROOT } from '@ramz001-cinema/contracts'
```

## 🛠️ Scripts

- pnpm run generate - Compile .proto files to TypeScript
- pnpm run build - Build TypeScript output
- pnpm run lint - Fix linting issues
- pnpm run format - Format code with Prettier

## 👨‍💻 Author

**Ramz001** - [GitHub Profile](https://github.com/Ramz001)
