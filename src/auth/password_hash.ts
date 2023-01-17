import { hash, compare } from 'bcrypt';

const saltRounds = 10;

async function hashPassword(password: string): Promise<string> {
	const hashedPassword = await hash(password, saltRounds);
	return hashedPassword;
}

async function verifyPassword(
	password: string,
	hashedPassword: string
): Promise<boolean> {
	const match = await compare(password, hashedPassword);

	return match;
}

export { hashPassword, verifyPassword };
