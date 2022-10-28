import React, {useContext} from 'react'
import { AppContext } from '../../AppContext'

const AccountNft = () => {
  const context = useContext(AppContext);

  // context.state.nft

  return (
    <div className='account-nft'>
      <div className='account-nft-info'>
        <h2>NFT</h2>
        <div>
          <button>MINT</button>
        </div>
      </div>
    </div>
  )
}

export default AccountNft