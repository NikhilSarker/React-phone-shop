import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="h-[80vh] flex items-center justify-center text-center  ">
      <div>        
        <h1 className="text-5xl font-bold">Oops!</h1>
        <p className="py-5 text-2xl font-medium">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-2xl font-medium ">{error.statusText || error.message}</i>
        </p>
        <Link to="/"><button className="btn btn-accent mt-7  text-xl font-bold">Go Back Home</button></Link>
      </div>
    </div>
  );
};

export default Error;
