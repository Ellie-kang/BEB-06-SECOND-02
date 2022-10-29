import React, {useContext} from 'react'
import { AppContext } from '../../AppContext'
import { NavLink } from 'react-router-dom';
const AccountNft = () => {
  const context = useContext(AppContext);

  // context.state.nft

  return (
    <div className='account-nft'>
      <div className='account-nft-info'>
        <h2>NFT</h2>
        <div>
          <NavLink to='/create'><button>MINT</button></NavLink>
        </div>
      </div>
      <div className='account-nft-img'>
        <img src="https://images.pexels.com/photos/13777383/pexels-photo-13777383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <img src="https://images.pexels.com/photos/13777383/pexels-photo-13777383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <img src="https://images.pexels.com/photos/13777383/pexels-photo-13777383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      </div>
    </div>
  )
}

export default AccountNft