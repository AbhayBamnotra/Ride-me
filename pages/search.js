import { useState } from "react";
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {
    const [Pickup, setPickup] = useState("")
    const [Drop, setDrop] = useState("")

    return (
        <Wrapper>
            <BackBtn>
                <Link href="/" passHref>
                    <Back src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </BackBtn>
            <Locations>
                <Icons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
                </Icons>
                <InputBox>
                    <Input placeholder="Pick-up Location" 
                    value={Pickup} onChange={(e) => setPickup(e.target.value)} 
                    />
                    <Input placeholder="Destination"
                     value={Drop} onChange={(e) => setDrop(e.target.value)} 
                     />
                </InputBox>
                <Plus src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </Locations>
            <FavLocations>
                <FavIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Favourite Places
            </FavLocations>
            <Link href={{
                pathname: "/confirm",
                query: {
                    pickLoc: Pickup,
                    dropLoc: Drop
                }
            }} passHref>
                <ConfirmBtnContainer>
                    <ConfirmBtn >
                        Confirm Locations
                    </ConfirmBtn>
                </ConfirmBtnContainer>
            </Link >
        </Wrapper >
    )
}

export default Search

const Wrapper = tw.div`
    bg-gray-200 h-screen
`

const BackBtn = tw.div`
    bg-white px-4
`

const Back = tw.img`
    cursor-pointer
`

const Locations = tw.div`
    bg-white flex items-center px-4 mb-2
`

const Icons = tw.div`
    w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img`
    h-2.5
`

const Line = tw.img`
    h-10
`

const Square = tw.img`
    h-3
`

const InputBox = tw.div`
    flex flex-col flex-1
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const Plus = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3
`

const FavLocations = tw.div`
    bg-white flex items-center px-4 py-2
`

const FavIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmBtnContainer = tw.div`
    flex
`

const ConfirmBtn = tw.button`
    flex-1 bg-black text-white text-center w-100 px-4 py-3 mt-2 items-center mx-4 rounded-lg cursor-pointer text-2xl disabled:bg-gray-900
`
