import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/fvCQv6t/71k-XYs4t-Cv-L-AC-UF1000-1000-QL80.jpg"
          className="w-72 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listedbooks">
            {" "}
            <button className="btn btn-primary m-4">View The List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
