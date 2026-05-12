import { join } from 'path'

export const PROTO_ROOT = join(__dirname, '..', '..', 'proto')

export const PROTO_PATHS = {
	AUTH: join(__dirname, '..', '..', 'proto', 'auth', 'v1.proto'),
	ACCOUNT: join(__dirname, '..', '..', 'proto', 'account', 'v1.proto'),
	COMMON: join(__dirname, '..', '..', 'proto', 'common', 'v1.proto')
}
