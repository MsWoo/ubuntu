import React, { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';
function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchImages();
  }, []);
  //---------------------------------------
  // const [user, setUser] = useState({});
  // async function checkUser() {
  //   try {
  //     const data = await Auth.currentUserPoolUser();
  //     const userInfo = { username: data.username, ...data.attributes };
  //     setUser(userInfo);
  //   } catch (err) {
  //     console.log('error: ', err);
  //   }
  // }
  //----------------------------------------
  async function onChange(e) {
    /* When a file is uploaded, create a unique name and save it using the Storage API */
    const file = e.target.files[0];
    const filetype = file.name.split('.')[file.name.split.length - 1];
    await Storage.put(`${uuid()}.${filetype}`, file);
    /* Once the file is uploaded, fetch the list of images */
    fetchImages();
  }
  async function fetchImages() {
    /* This function fetches the list of image keys from your S3 bucket */
    const files = await Storage.list('');
    /* Once we have the image keys, the images must be signed in order for them to be displayed */
    const signedFiles = await Promise.all(
      files.map(async (file) => {
        /* To sign the images, we map over the image key array and get a signed url for each image */
        const signedFile = await Storage.get(file.key);
        return signedFile;
      })
    );
    setImages(signedFiles);
  }
  return (
    <div className='App'>
      <div className='Myprofile'>
        <h1 style={{ marginLeft: 30 }}>우민수</h1>
        <h2 style={{ marginLeft: 30 }}>컴퓨터전자시스템공학부</h2>
        <h3 style={{ marginLeft: 30 }}>
          해당 프로젝트는 사용자가 Image를 업로드하면 Trigger가 작동하여 Image를
          Resize해서 AWS S3에 업로드합니다. <br /> 반대로 AWS S3에 Image를
          업로드해도 웹페이지에 반영됩니다.
        </h3>
        <h3 style={{ marginLeft: 30 }}>
          In the project, when a user uploads an image file, a trigger works,
          resizes the image and uploads it to AWS S3. <br /> Conversely, even if
          you upload an image to S3, it will be resized and reflected on the web
          page.
        </h3>
      </div>
      <header className='App-header'>
        <input type='file' onChange={onChange} />
        {images.map((image) => (
          <img src={image} key={image} style={{ width: 500 }} />
        ))}
      </header>
    </div>
  );
}
export default withAuthenticator(App);
