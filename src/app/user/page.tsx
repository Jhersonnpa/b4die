
const UserPage = ({ params }: { params: { user: any} }) => {
  const {user} = params
  return (
    <div className="w-full h-screen"><p className="text-black">{user}</p></div>
  )
}

export default UserPage