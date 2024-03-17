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
      <br style={{marginTop: '50px'}}/>
      <Place/>
      <br style={{marginTop: '50px'}}/>
      <AI/>
      <br/>
      <br/>
      
    </div>
  );
}

// 제일 위 인기해시태그 모음 - 한방에 복사하는 것
function Group(){

  let [GroupHashtags, setGroupHashtags] = useState(['#인기해시태그1', '#인기2', '#해시태그3', '#인기해시태그4', '#인기해시태그5', '#인기해시태그6','#인기해시태그7','#인기8','#해시태그9', '#해시태그','#인기인기','#인기해이태그']);

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

  let [PopularHashtags, setPopularHashtags] = useState(['#성수동', '#성수동', '#성수동', '#성수동', '#성수동', '#성수동','#성수동','#성수동','#성수동','#성수동', '#성수동', '#성수동', '#성수동','#성수동', '#성수동', '#성수동', '#성수동', '#성수동']);

  return (
    <div>
      <h2 style={{marginLeft: '5%', textAlign: 'left'}}>⭐ 인기 해시태그</h2>
      <div className='CopyBtn-container'>
      <button className='CopyButton' style={{marginTop: 0, marginBottom: '10px'}}>복붙칸에 넣기</button>
      </div>

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

function Place(){

  let [PlaceHashtags, setPlaceHashtags] = useState(['#성수동', '#잠실롯데월드몰', '#해방촌','#역전할머니맥주', '#성수동', '#성수동','#이탈리아','#00팝업스토어','#성수동','리얼후라이', '숭실숭실대', '부산광역시', '서울','삿포로']);

  return (
    <div>
      <h2 style={{marginLeft: '5%', textAlign: 'left'}}>🚩 장소 해시태그</h2>
      <div className='CopyBtn-container'>
      <button className='CopyButton' style={{marginTop: 0, marginBottom: '10px'}}>복붙칸에 넣기</button>
      </div>

      <div className='inner-background'>
        <div className='item-container'>
          {PlaceHashtags.map((hashtag, index) => (
            <div key={index} className='below-item'>
              {hashtag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AI(){

  let [AIHashtags, setAIHashtags] = useState(['#성수동', '#성수동', '#성수동', '#성수동', '#성수동', '#성수동','#성수동','#성수동','#성수동']);

  return (
    <div>
      <h2 style={{marginLeft: '5%', textAlign: 'left'}}>🤖 AI가 분석한 태그</h2>
      <div className='CopyBtn-container'>
      <button className='CopyButton' style={{marginTop: 0, marginBottom: '10px'}}>복붙칸에 넣기</button>
      </div>

      <div className='inner-background'>
        <div className='item-container'>
          {AIHashtags.map((hashtag, index) => (
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
