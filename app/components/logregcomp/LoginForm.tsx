import { FC, useState } from "react";

// interface LoginFormProps {
// 	onLogin: (username: string, password: string) => void;
// }

export default function LoginForm(onLogin: any) {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (username && password) {
			onLogin(username, password);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Username:
				<input
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Password:
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			<br />
			<button type='submit'>Login</button>
		</form>
	);
}
