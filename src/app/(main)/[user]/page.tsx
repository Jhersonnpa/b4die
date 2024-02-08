
const UserPage = ({ params }: { params: { user: any} }) => {
  const {user} = params
  return (
    <div className="w-full h-full"><p>{user}</p></div>
  )
}

export default UserPage