import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { setQuery } from '../reduxwork/reduxFeature/Search'

function Header({ navigate }) {

    const dispatch = useDispatch()
    const location = useLocation()

    const handsearch = (e) => {
        dispatch(setQuery(e.target.value))
    }

    const navItem = [
        {
            id: 1,
            name: "Add product",
            link: "addproduct"
        },

        {
            id: 2,
            name: "All product",
            link: "addtocart"
        },
        {
            id: 3,
            name: "Cart item",
            link: "cartitem"
        }
    ]

    return (
        <>
            <header>
                <ul>
                    {navItem.map((item) => (
                        <li key={item.id}>
                            <button onClick={() => navigate(item.link)}>
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    {location.pathname.includes("addtocart") && (
                        <input
                            type="text"
                            onChange={handsearch}
                            placeholder='Search here....' />
                    )}
                </div>
            </header>
        </>
    )
}

export default Header
