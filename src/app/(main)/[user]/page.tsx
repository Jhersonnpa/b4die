"use client";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import HeaderPerfilSkeleton from "@/components/skeletons/HeaderPerfilSkeleton";
import { getUserByUsername } from "@/data/user";
import AchievementsProfileSkeleton from "@/components/skeletons/AchievementsProfileSkeleton";
import ProfileCard from "@/components/ProfileCard";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const UserPage = async ({ params }: { params: { user: any } }) => {
  const { user } = params;
  const userFetch = await getUserByUsername(user);
  const userSession = useCurrentUser();
  const isMyProfile = userSession? (userFetch.username === userSession.username ? true:false): false
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
      <div className="w-full h-full  py-4">
        <div className="w-[80%] mx-auto flex flex-col gap-8">
          <HeaderPerfilSkeleton />
          <AchievementsProfileSkeleton />
        </div>
      </div>
    ); // Puedes personalizar este mensaje o redirección
  }

  return (
    <div className="w-full h-full">
      <div className="w-[80%] mx-auto flex flex-col gap-8">
        <div className=" flex flex-col space-y-3 rounded-xl relative">
          <Suspense fallback={<HeaderPerfilSkeleton />}>
            <ProfileCard
              id={userFetch.id}
              username={userFetch.username}
              name={userFetch.name}
              surname={userFetch.surname}
              email={userFetch.email}
              emailVerified={userFetch.emailVerified}
              puntuation={userFetch.puntuation}
              createdAt={userFetch.createdAt}
              isTwoFactorEnabled={userFetch.isTwoFactorEnabled}
              isMyProfile={isMyProfile}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
