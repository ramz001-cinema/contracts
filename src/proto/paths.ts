import { join } from 'path'

export const PROTO_PATHS = {
	AUTH: join(__dirname, '..', '..', 'proto', 'auth', 'v1', 'auth.proto'),
	ACCOUNT: join(
		__dirname,
		'..',
		'..',
		'proto',
		'account',
		'v1',
		'account.proto'
	),
	COMMON: join(__dirname, '..', '..', 'proto', 'common', 'v1', 'common.proto')
}
