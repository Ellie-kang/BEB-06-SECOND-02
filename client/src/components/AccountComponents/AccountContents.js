import React, {useContext} from 'react'
import { AppContext } from '../../AppContext';
import { Dummy } from '../../Dummy';

const AccountContents = () => {

  const context = useContext(AppContext);

  // context.state.contents

  return (
    <div className='account-contents'>
      <div className='account-contents-info'>
        <h2>Comments</h2>
        <div>
          <button>Write</button>
        </div>
      </div>
      <div className='account-contents-box'>
        <div className='account-contents-only'>
          <div>
          {Dummy.contents[0]}
          </div>
          <div>
          {Dummy.contents[1]}
          </div>
          <div>
          {Dummy.contents[2]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountContents