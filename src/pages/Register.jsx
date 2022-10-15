import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
	const [err, setErr] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [userType, setUserType] = useState("indiviual")


	const handleChange = async (e) => {
		setUserType(e.target.value)
	}

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		const displayName = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const file = e.target[5].files[0];

		console.log(e.target[5])
		try {
			//Create user
			const res = await createUserWithEmailAndPassword(auth, email, password);

			//Create a unique image name
			const date = new Date().getTime();
			const storageRef = ref(storage, `${displayName + date}`);

			await uploadBytesResumable(storageRef, file).then(() => {
				getDownloadURL(storageRef).then(async (downloadURL) => {
					try {
						//Update profile
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						});
						//create user on firestore
						await setDoc(doc(db, "users", res.user.uid), {
							uid: res.user.uid,
							displayName,
							email,
							userType,
							photoURL: downloadURL,
						});

						//create empty user chats on firestore
						await setDoc(doc(db, "userChats", res.user.uid), {});
						navigate("/");
					} catch (err) {
						console.log(err);
						setErr(true);
						setLoading(false);
					}
				});
			});
		} catch (err) {
			alert('Invalid email or password.')
			setErr(true);

			setLoading(false);
		}
	};

	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Work In Korea</span>
				<span className="title">Register</span>
				<form className="w-full" onSubmit={handleSubmit}>
					<input className="normal" required type="text" placeholder="display name" />
					<input className="normal" required type="email" placeholder="email" />
					<input className="normal" required type="password" placeholder="password" />
					<div className="flex gap-10 pb-3">
						<label htmlFor="individual">
							<input type='radio' id="individual" name='userType' onChange={handleChange} value='indiviual' checked />
							Individual
						</label>
						<label htmlFor="company">
							<input type='radio' id="company" name='userType' onChange={handleChange} value='company' />
							company
						</label>
					</div>


					<input style={{ display: "none" }} type="file" id="file" />
					<label htmlFor="file">
						<img src={Add} alt="" />
						<span>Add an avatar</span>
					</label>
					<button disabled={loading}>Sign up</button>
					{loading && "Loading, please wait..."}
					{err && <span>Something went wrong</span>}
				</form>
				<p>
					You do have an account? <Link to="/register">Login</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
