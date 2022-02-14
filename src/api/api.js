export async function getUserName(name) {
   try {
		// get the data from the api
      const data=await fetch('https://api.github.com/users/'+name);
		// convert data to json
      const response = await data.json();
		return response;
   } catch (error) {
      console.log('error...',error);
   }
}
