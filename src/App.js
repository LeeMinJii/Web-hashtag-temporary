import logo from './icon-256x256.png';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <img className='logo' src={logo}></img>
      </div>

      <Group/>
      <CopyButton/>
      <hr/>
      <Popular/>

    </div>
  );
}

// 제일 위 인기해시태그 모음 - 한방에 복사하는 것
function Group(){

  let [GroupHashtags, setGroupHashtags] = useState(['#인기해시태그1', '#인기해시태그2', '#인기해시태그3', '#인기해시태그4', '#인기해시태그5', '#인기해시태그6','#인기해시태그7','#인기해시태그8','#인기해시태그9']);

  return (
    <div className='inner-background'>
      <div className='item-container'>
        {GroupHashtags.map((hashtag, index) => (
          <div key={index} className='above-item'>
            {hashtag}
          </div>
        ))}
      </div>
    </div>
  );
}

function CopyButton(){
  return (
    <div className='CopyBtn-container'>
      <button className='CopyButton'>복붙하기</button>
    </div>
  );
}

function Popular(){

  let [PopularHashtags, setPopularHashtags] = useState(['#성수동', '#성수동', '#성수동', '#성수동', '#성수동', '#성수동','#성수동','#성수동','#성수동']);

  return (
    <div>
      <h2 style={{marginLeft: '5%', textAlign: 'left'}}>⭐ 인기해시태그</h2>

      <div className='inner-background'>
        <div className='item-container'>
          {PopularHashtags.map((hashtag, index) => (
            <div key={index} className='below-item'>
              {hashtag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default App;
