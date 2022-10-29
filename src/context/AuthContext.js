import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			console.log(user);
			setLoading(false);
		});

		return () => {
			unsub();
		};
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
