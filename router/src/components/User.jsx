import { useParams } from 'react-router-dom'

const User = () => {
  const params = useParams()

  return (
    <div>
      This is the file of user {params.username}
    </div>
  )
}

export default User
