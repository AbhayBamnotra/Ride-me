import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import { useEffect, useState } from "react"
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "next/router"

export default function Home() {
  const [user, setUser] = useState(null)

  const router = useRouter()

  useEffect(() => {                //listener for whether user is logged in or not
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoURL: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [router])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <SafarLogo src="https://i.ibb.co/YR40zsk/safar-logo.png" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoURL} onClick={() => { signOut(auth) }} />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search" passHref>
            <ActionButton>
              <ActionBtnImage src="https://i.ibb.co/cyvcpfF/uberx.png" />Ride</ActionButton>
          </ Link>
          <ActionButton>
            <ActionBtnImage src="https://i.ibb.co/n776JLm/bike.png" />Wheels</ActionButton>
          <ActionButton>
            <ActionBtnImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />Reverse</ActionButton>
        </ActionButtons>
        <InputButton>
          Welcome to Safar - a cab booking app
        </InputButton>
      </ActionItems>
    </Wrapper >
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between item-center
`

const SafarLogo = tw.img`
  h-38 w-40
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-2 w-28 text-xl
`

const UserImage = tw.img`
h-20 w-22 rounded-full border border-gray-400 p-px mr-4 cursor-pointer
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  flex flex-col bg-gray-200 cursor-pointer flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionBtnImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-200 text-xl p-4 flex items-center mt-8 text-black
`

