import { CommonEntity } from './common-entity.ts';

export interface UserEntity extends CommonEntity {
	name: string;
	username: string;
	password: string;
}
