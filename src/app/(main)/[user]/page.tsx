// "use client";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import HeaderPerfilSkeleton from "@/components/skeletons/HeaderPerfilSkeleton";
import { getUserByUsername } from "@/data/user";

const UserPage = async ({ params }: { params: { user: any } }) => {
  const { user } = params;
  const userFetch = await getUserByUsername(user);
  // const [existsUser, setExistsUser] = useState<null | {}>();
  // useEffect(() => {
  //   if (!existsUser) {
  //     checkAndRedirect();
  //   }
  // }, [existsUser]);

  // const checkAndRedirect = async () => {
  //   const isUser = await existUser(user);
  //   if (isUser) {
  //     setExistsUser(isUser);
  //   }
  // };
  if (!userFetch) {
    return (
      <div className="w-full h-full flex flex-col gap-4 py-4">
        <div className="w-[80%] mx-auto">
          <HeaderPerfilSkeleton />
        </div>
      </div>
    ); // Puedes personalizar este mensaje o redirección
  }

  return (
    <div className="w-full h-full">
      <Suspense fallback={<HeaderPerfilSkeleton />}>
        {userFetch.username}
      </Suspense>
    </div>
  );
};

export default UserPage;
