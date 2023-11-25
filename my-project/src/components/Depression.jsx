import { Link } from "react-router-dom";

export default function Depression() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        Depression links goes here
      </div>
      <Link to="/chatboard" className="bg-blue-950 w-52 text-center text-white hover:bg-blue-300 hover:font-bold hover:text-blue-950 hover: rounded-md px-6 py-3">Join your peers</Link>
    </div>
  )
}
