import { useQuery } from "@tanstack/react-query";
import AllissuesCard from "../../../../Components/AllissuesCard";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import LoaddingSpinner from "../../../../Components/LoaddingSpinner";

const Allissues = () => {
  const axiosSecure = useAxiosSecure();

  const { data: issues = [], isLoading } = useQuery({
    queryKey: ["issues"],
    queryFn: async () => {
      const result = await axiosSecure.get("/issues");
      return result.data;
    },
  });
  //   console.log(issues);

  if (isLoading) return <LoaddingSpinner />;
  return (
    <div className="max-w-11/12 mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
      {issues.map((issue) => (
        <AllissuesCard key={issue._id} issue={issue} />
      ))}
    </div>
  );
};

export default Allissues;
