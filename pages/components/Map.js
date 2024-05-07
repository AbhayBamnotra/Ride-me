import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 
    'pk.eyJ1Ijoia2Vycnk2MjIxIiwiYSI6ImNsbHdtbTI3azA5amkzcXM2OWQxamg2MHMifQ.1Rb5PCW9t5inRHm82UdQxQ';

const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [78.476681027237, 22.1991660760527],
            zoom: 3.3
        })
        if (props.PickCords) {
            addToMap(map, props.PickCords);
        }
        if (props.DropCords) {
            addToMap(map, props.DropCords);
        }
        if (props.PickCords && props.DropCords) {
            map.fitBounds([
                props.DropCords,
                props.PickCords
            ], {
                padding: 60
            })
        }
    }, [props.PickCords, props.DropCords])
    const addToMap = (map, cords) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(cords)
            .addTo(map);
    }

    return <Wrapper id="map"></Wrapper>
}

export default Map

const Wrapper = tw.div`
    flex-1 h-1/2
`
