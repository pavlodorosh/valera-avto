class AppStorage{
	storeToken(token){
		localStorage.setItem('token', token)
	}

	
}

export default AppStorage = new AppStorage();