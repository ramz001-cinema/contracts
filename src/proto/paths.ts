import { join } from 'path'

export const PROTO_PATHS = {
	AUTH: join(__dirname, '..', '..', 'proto', 'auth', 'v1', 'index.proto'),
	ACCOUNT: join(
		__dirname,
		'..',
		'..',
		'proto',
		'account',
		'v1',
		'index.proto'
	),
	COMMON: join(__dirname, '..', '..', 'proto', 'common', 'v1', 'index.proto')
}
