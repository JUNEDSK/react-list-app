function AboutUs (){
    return (
      <div className="container mx-auto p-4 ">
      <div className="flex flex-col mt-20 justify-start h-screen">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to <strong>React List App</strong>, a simple and efficient React-based application 
        designed to fetch and display product data from FakeStoreAPI. Our goal is to provide a seamless 
        user experience with a clean UI and smooth navigation.
      </p>

      <h2 className="text-xl font-semibold mb-2">Features:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>**Using Vite** for faster page load and development speed</li>
        <li>Fetches real-time product data using Axios</li>
        <li>Displays products in an elegant card format</li>
        <li>Built-in navigation with React Router</li>
        <li>Fully responsive using Tailwind CSS</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Installation:</h2>
      <p className="mb-2">To get started with the project, clone the repository:</p>
      <div className="bg-gray-100 p-3 rounded-md">
        <span>git clone https://github.com/JUNEDSK/react-list-app.git</span>
      </div>

      <p className="mt-4">
        We continuously work on improving the app by adding new features and optimizations. Stay tuned for updates! 🚀
      </p>
      </div>
    </div>
    );
  };
  
  export default AboutUs;
  
