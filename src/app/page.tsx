import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="container">
      <div className="buttons">

      <Link href= "/signUp">
      <button className="bg-red-700">
        Sign Up with email
        </button>
      </Link>
      

        <button className="bg-blue-700">
          Continue with Google
        </button>

       <button className="bg-green-700">
        Sign In
        </button>
      </div>
    </div>
  );
}
