# @ramz001-cinema/contracts

> Protobuf definitions and generated TypeScript contracts for microservice communication in the Cinema Booking platform.

## 📦 Overview

Centralized gRPC contracts, protobufs, and generated s-proto interfaces. Ensures type-safety and consistent communication between Gateway, Auth, and Account microservices.

## 🚀 Installation

`pnpm install @ramz001-cinema/contracts`

## 💻 Usage

`import { AuthServiceClient, AUTH_SERVICE_NAME } from '@ramz001-cinema/contracts/gen/auth';
import { grpcPaths } from '@ramz001-cinema/contracts/proto/paths';`

## 🛠️ Scripts

- pnpm run generate - Compile .proto files to TypeScript
- pnpm run build - Build TypeScript output
- pnpm run lint - Fix linting issues
- pnpm run format - Format code with Prettier

## 👨‍💻 Author

**Ramz001** - [GitHub Profile](https://github.com/Ramz001)
