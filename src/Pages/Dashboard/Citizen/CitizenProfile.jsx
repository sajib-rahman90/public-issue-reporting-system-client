import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import LoaddingSpinner from "../../../Components/LoaddingSpinner";

const CitizenProfile = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const [userInfo, setUserInfo] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/users/${user.email}`)
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, axiosSecure]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const userData = {
      name,
      photo,
    };

    try {
      const res = await axiosSecure.patch(
        `/users/update/${user.email}`,
        userData,
      );

      if (res.data.modifiedCount > 0) {
        setUserInfo({
          ...userInfo,
          name,
          photo,
        });
        toast.success("Profile Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubscribe = async () => {
  //   // fake payment success

  //   try {
  //     const res = await axiosSecure.patch(`/users/premium/${user.email}`);

  //     if (res.data.modifiedCount > 0) {
  //       toast.success("You are now Premium User");

  //       setUserInfo({
  //         ...userInfo,
  //         isPremium: true,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (loading) {
    return <LoaddingSpinner />;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-10">
      <div className="bg-white shadow-xl rounded-3xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={userInfo?.photo}
            alt=""
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
          />

          <div className="space-y-3">
            <h2 className="text-3xl font-bold">
              {userInfo?.name}

              {userInfo?.isPremium && (
                <span className="ml-3 bg-yellow-400 text-black text-sm px-3 py-1 rounded-full">
                  Premium
                </span>
              )}
            </h2>

            <p className="text-gray-600">{userInfo?.email}</p>

            <p>
              Role:
              <span className="font-semibold ml-2 capitalize">
                {userInfo?.role}
              </span>
            </p>

            {userInfo?.isBlocked && (
              <div className="bg-red-100 text-red-700 p-4 rounded-xl">
                Your account has been blocked. Please contact authorities.
              </div>
            )}

            {!userInfo?.isPremium && (
              <button
                // onClick={handleSubscribe}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
              >
                Subscribe for 1000tk
              </button>
            )}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-6">Update Profile</h3>

          <form onSubmit={handleUpdateProfile} className="space-y-5">
            <input
              type="text"
              name="name"
              defaultValue={userInfo?.name}
              placeholder="Name"
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              name="photo"
              defaultValue={userInfo?.photo}
              placeholder="Photo URL"
              className="w-full border p-4 rounded-xl"
            />

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CitizenProfile;
