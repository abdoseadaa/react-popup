const Test2 = () => {
  return ( <>
  <form className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
      <input type="text" id="name" name="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      <br /><br />
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
      <input type="email" id="email" name="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
      <br /><br />
      <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
    </form>
  </> );
}

export default Test2;