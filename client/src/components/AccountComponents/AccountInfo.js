import React, {useContext} from 'react'
import { AppContext } from '../../AppContext';

const AccountInfo = () => {
  const context = useContext(AppContext);
  const {userId, email, tokenAmount} = context.state;

  return (
    <div className='acocunt-info-container'>
      <ul className='account-info'>
        <li className='account-name-continaer'>
          <div className='account-name-wrapper'>
            <div className='account-name-label'>User Id</div>
            <div className='account-name'>{userId}</div> {/* context.state.name */}
          </div>
        </li>
        <li className='account-name-continaer'>
          <div className='account-name-wrapper'>
            <div className='account-name-label'>Email</div>
            <div className='account-name'>{email}</div> {/* context.state.email */}
          </div>
        </li>
        <li className='account-name-continaer'>
          <div className='account-name-wrapper'>
            <div className='account-name-label'>ERC-20</div>
            <div className='account-name'>{tokenAmount}</div> {/* context.state.tokenAmount*/}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AccountInfo