import React,{useState} from 'react'

import {userProfileData, userImages} from '@mocks/user-profile.data.js';
import {comments} from '@mocks/comments.data'; 
import useBreakpoint from '@observagram-shared/hooks/useBreakpoint';
import ImageGrid from '@observagram-shared/components/image-grid';
import Modal from '@observagram-shared/components/modal';
import Post from '@observagram-shared/components/post';

import './styles.scss';

const Biography = ({userInfo}) => {
  return (
    <div className="biography-container">
      <h5>{userInfo?.full_name??''}</h5>
      <div>{userInfo?.type??''}</div>
      <div>
        {
          userInfo?.biography?.split('\n').map(line=>(
            <div key={line}>
              {line}
            </div>
          ))
        }
      </div>
      { userInfo.link && <div className="bio-link"><a href={userInfo.link}>{userInfo?.link}</a></div> }
    </div>
  )
}

const Stats = ({stats}) => {
  return (
    <div className="stats-container">
       <div className="row-flex">
        <div className={`stat-container text-center`}>
          <div>{stats?.posts??0} &nbsp;</div>
          <div>Posts</div>
        </div>
        <div className={`stat-container text-center`}>
          <div>{stats?.followers??0} &nbsp;</div>
          <div>Followers</div>
        </div>
        <div className={`stat-container text-center`}>
          <div>{stats?.following??0} &nbsp;</div>
          <div>Following</div>
        </div>
      </div>
    </div>
  )
}
const UserProfile = props => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const {isMdOrLarger} = useBreakpoint();
  const _onPostClick = (imageObj) => {
    if(isMdOrLarger) {
      setShowModal(true)
    }
    setSelectedData(imageObj)
  }
  return (
    <>
      <section className="container user-profile-container">
        <div className="user-stats row-flex">
          <div className="row-flex main-center">
            <div className="profile-pic">
              <img src={userProfileData.profile_image} alt="Profile image"/>
            </div>
          </div>
          <div>
            <div className="resp-row-flex">
              <div className="row-flex cross-center">
                <div className="username">{userProfileData?.username??''}</div>
              </div>
              <div className="follow-button-container">
                <button className="follow-button">
                  Follow
                </button>
              </div>
            </div>
            {isMdOrLarger &&<Stats stats={userProfileData?.stats} isMdOrLarger={!isMdOrLarger}/>}
            <div>
            {
              isMdOrLarger && <Biography userInfo={userProfileData.info}/>
            }
            </div>
          </div>
        </div>
        {
          !isMdOrLarger && <Biography userInfo={userProfileData.info}/>
        }
        <div>
        {
          !isMdOrLarger && <Stats stats={userProfileData?.stats} isMdOrLarger={!isMdOrLarger}/>
        }
        </div>
      </section>
      <div className={`user-images ${isMdOrLarger? 'container':''}`}>
        <ImageGrid userImages={userImages} onClick={_onPostClick}/>
      </div>
      {showModal && (
          <Modal> 
            <Post selectedData={selectedData} selectedUser={userProfileData} comments={comments}/>
          </Modal>
        )
      }
    </>
  )
}

export default UserProfile;
