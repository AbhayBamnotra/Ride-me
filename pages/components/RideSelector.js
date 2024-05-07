import React, { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { carList } from '../../data/carList'

const RideSelector = ({ PickCords, DropCords }) => {
    const [rideDuration, setRideDuration] = useState(0)

      //get ride duration from mapbox api

    useEffect(() => {                            //[0],[1] for x-y axis
        fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${PickCords[0]}, ${PickCords[1]};${DropCords[0]}, ${DropCords[1]}?access_token=pk.eyJ1Ijoia2Vycnk2MjIxIiwiYSI6ImNsbHdtbTI3azA5amkzcXM2OWQxamg2MHMifQ.1Rb5PCW9t5inRHm82UdQxQ`)
            .then(res => res.json())
            .then(data => {
                setRideDuration(data.routes[0].duration / 100)
            })
    }, [PickCords, DropCords])
    return (
        <Wrapper>
            <Title>
                Choose a ride, or swipe up for more
            </Title>
            <CarList>
                {carList.map((car, index) => (
                    <Car key={index} >
                        <CarImg src={car.imgUrl} />
                        <CarDetails>
                            <Service>
                                {car.service}
                            </Service>
                            <Time>
                                5 min away
                            </Time>
                        </CarDetails>
                        <Price>
                            {"₹" + (rideDuration * car.multiplier).toFixed(2) }
                        </Price>
                    </Car>
                ))}
            </CarList>
        </Wrapper >
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 overflow-hidden flex flex-col
`

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
    overflow-y-scroll
`

const Car = tw.div`
    flex p-4 items-center
`

const CarImg = tw.img`
    h-14 mr-4
`

const CarDetails = tw.div`
    flex-1
`

const Price = tw.div`
    text-medium
`

const Time = tw.div`
    text-blue-500 text-xs
`

const Service = tw.div`
    font-medium
`