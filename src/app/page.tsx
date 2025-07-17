import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click <Link href="/documents/123"><span className="text-blue-500 underline">&nbsp;Here&nbsp;</span>
      </Link> to go to document id
    </div>
  );
};

export default Home;
