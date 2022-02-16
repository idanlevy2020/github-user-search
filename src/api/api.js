export async function getUser(login) {
   try {
		// get the data from the api
      const data=await fetch('https://api.github.com/users/'+login);
		// convert data to json
      const response = await data.json();
		return response;
   } catch (error) {
      console.log('error...',error);
   }
}
