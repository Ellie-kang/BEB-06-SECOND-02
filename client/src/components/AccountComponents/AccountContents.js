import React, {useContext} from 'react'
import { AppContext } from '../../AppContext';
import { Dummy } from '../../Dummy';
import { NavLink } from 'react-router-dom';
import Article from '../Article';

const AccountArticles = (props) => {


  const context = useContext(AppContext);
  const {userArticles} = context.state;

  
  // props로 받는건, AccountPage useEffect에서 DB에서 불러온 Articles, NFT들, Articles를 map으로 Article란에 기입.

  return (
    <div className='account-contents'>
      <div className='account-contents-info'>
        <h2>Comments</h2>
        <div>
          <NavLink to='/write'><button>Write</button></NavLink>
        </div>
      </div>
      <div className='account-contents-box'>
        <div className='account-contents-only'>
          <div className='account-contents-wrapper'>
          {/* <Article sx={{width: "100%", height: "auto"}}/> */}
          {[...userArticles].reverse().map((item) => {
            return <Article id={item._id} userId={item.author.userId} title={item.title} content={item.content} imgFile={item.imgFile} userProfile={item.author.profileImage} comments={item.comments} />;
          })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountArticles