import React, { useState } from 'react';
import axios from '../config/axios.config';

function Profile() {
  const [image, setImage] = useState('');

  const onChangePicture = (e: any) => {
    console.log('image: ', image);
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    let token: string = localStorage.getItem('Token') || '';
    if (token != '') {
      const formData = new FormData();
      formData.append('profileImage', image);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post('api/users/uploadProfileImage', formData, config);
      console.log(config, 'kkkkkkk');
    }
  };

  return (
    <div>
      <div className="register_profile_image">
        <input id="profilePic" type="file" onChange={onChangePicture} />
      </div>
      <div className="previewProfilePic">
        <img className="playerProfilePic_home_tile" src={image}></img>
      </div>
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Profile;
