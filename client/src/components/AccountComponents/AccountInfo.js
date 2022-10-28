import React, {useContext} from 'react'
import { AppContext } from '../../AppContext';

const AccountInfo = () => {
  const context = useContext(AppContext);

  // context.state.name, context.state.email, context.state.erc

  return (
    <div className='acocunt-info-container'>
      <ul className='account-info'>
        <li className='account-name-continaer'>
          <div className='account-name-wrapper'>
            <div className='account-name-label'>Name</div>
            <div className='account-name'>김현구</div> {/* context.state.name */}
          </div>
        </li>
        <li className='account-name-continaer'>
          <div className='account-name-wrapper'>
            <div className='account-name-label'>Email</div>
            <div className='account-name'>abcdefg@gmail.com</div> {/* context.state.email */}
          </div>
        </li>
        <li className='account-name-continaer'>
          <div className='account-name-wrapper'>
            <div className='account-name-label'>ERC-20</div>
            <div className='account-name'>{`3156 Tako`}</div> {/* context.state.tokenAmount*/}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AccountInfo