import { hash, compare } from 'bcrypt';
import { SALTROUNDS, PEPPER } from '../config';

async function hashPassword(password: string): Promise<string> {
	const hashedPassword = await hash(password + PEPPER, parseInt(SALTROUNDS));
	return hashedPassword;
}

async function verifyPassword(
	password: string,
	hashedPassword: string
): Promise<boolean> {
	const match = await compare(password + PEPPER, hashedPassword);

	return match;
}

export { hashPassword, verifyPassword };
