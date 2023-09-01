"use client"
import Image from 'next/image'
import data from '../../app/artistInfo.json';
import Link from 'next/link'
import React, { useState } from 'react';
import Logo from "../../../components/Logo"



const RenderIcon = ( props ) => {
  var snsIcon = {
    instagram : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
    </svg>,
    facebook : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
    </svg>,
    youtube :<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
    </svg>,
    spotify :<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
    <path d="M15,3C8.4,3,3,8.4,3,15s5.4,12,12,12s12-5.4,12-12S21.6,3,15,3z M19.731,21c-0.22,0-0.33-0.11-0.55-0.22 c-1.65-0.991-3.74-1.54-5.94-1.54c-1.21,0-2.53,0.22-3.63,0.44c-0.22,0-0.44,0.11-0.55,0.11c-0.44,0-0.77-0.33-0.77-0.77 s0.22-0.77,0.66-0.77c1.43-0.33,2.861-0.55,4.401-0.55c2.53,0,4.84,0.66,6.82,1.76c0.22,0.22,0.44,0.33,0.44,0.77 C20.39,20.78,20.06,21,19.731,21z M20.94,17.921c-0.22,0-0.44-0.11-0.66-0.22c-1.87-1.21-4.511-1.87-7.37-1.87 c-1.43,0-2.751,0.22-3.74,0.44c-0.22,0.11-0.33,0.11-0.55,0.11c-0.55,0-0.881-0.44-0.881-0.881c0-0.55,0.22-0.77,0.77-0.991 c1.32-0.33,2.641-0.66,4.511-0.66c3.08,0,5.94,0.77,8.361,2.2c0.33,0.22,0.55,0.55,0.55,0.881 C21.82,17.48,21.491,17.921,20.94,17.921z M22.37,14.4c-0.22,0-0.33-0.11-0.66-0.22c-2.2-1.21-5.39-1.98-8.47-1.98 c-1.54,0-3.19,0.22-4.621,0.55c-0.22,0-0.33,0.11-0.66,0.11c-0.66,0.111-1.1-0.44-1.1-1.099s0.33-0.991,0.77-1.1 C9.39,10.22,11.26,10,13.24,10c3.41,0,6.93,0.77,9.681,2.2c0.33,0.22,0.66,0.55,0.66,1.1C23.471,13.96,23.03,14.4,22.37,14.4z"></path>
    </svg>,
    twitter:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
    </svg>,
    tiktok : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 30 30">
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"></path>
    </svg>
  }
  var r = props.sns;
  if( snsIcon[ props.sns ] ) r = snsIcon[ props.sns ];
  return r;
}

var _ = require("lodash");
function ch2pattern(ch) {
  const offset = 44032; /* '가'의 코드 */
  // 한국어 음절
  if (/[가-힣]/.test(ch)) {
    const chCode = ch.charCodeAt(0) - offset;
    // 종성이 있으면 문자 그대로를 찾는다.
    if (chCode % 28 > 0) {
      return ch;
    }
    const begin = Math.floor(chCode / 28) * 28 + offset;
    const end = begin + 27;
    return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  // 한글 자음
  if (/[ㄱ-ㅎ]/.test(ch)) {
    const con2syl = {
      'ㄱ': '가'.charCodeAt(0),
      'ㄲ': '까'.charCodeAt(0),
      'ㄴ': '나'.charCodeAt(0),
      'ㄷ': '다'.charCodeAt(0),
      'ㄸ': '따'.charCodeAt(0),
      'ㄹ': '라'.charCodeAt(0),
      'ㅁ': '마'.charCodeAt(0),
      'ㅂ': '바'.charCodeAt(0),
      'ㅃ': '빠'.charCodeAt(0),
      'ㅅ': '사'.charCodeAt(0),
    };
    const begin = con2syl[ch] || ( ( ch.charCodeAt(0) - 12613 /* 'ㅅ'의 코드 */ ) * 588 + con2syl['ㅅ'] );
    const end = begin + 587;
    return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  // 그 외엔 그대로 내보냄
  // escapeRegExp는 lodash에서 가져옴
  return _.escapeRegExp(ch);
}
function createFuzzyMatcher(input) {

  const pattern = input
  .split('')
  .map(ch2pattern)
  .map(pattern => '(' + pattern + ')')
  .join('.*?');
return new RegExp(pattern);

}
// console.log( createFuzzyMatcher('@@@@').test('크리스마스') ); // true
// console.log( createFuzzyMatcher('ㅋㅁㅅ').test('크리스') ); // false
// console.log( createFuzzyMatcher('고라').test('골라') ); // true
// console.log( createFuzzyMatcher('고라').test('가라') ); // false
// console.log( createFuzzyMatcher('군ㄱㅁ').test('군고구마') ); // true
// console.log( createFuzzyMatcher('!!!').test('궁고구마') ); // false

const getStarData = ( txt ) => {
  
  var r = {};
  var s,so;
  for(s in data ){
    so = data[ s ]
    var _t = createFuzzyMatcher(txt);
    if( _t.test(so.names.KO) )
    {
      r[ s ]=  so;
      // so.names.KO = so.names.KO.replace(_t, (match, ...groups) => {
      //   const letters = groups.slice(0, txt.length);
      //   let lastIndex = 0;
      //   let highlighted = [];
      //   for(let i=0,l=letters.length; i < l; i++) {
      //     const idx = match.indexOf(letters[i], lastIndex);
      //     highlighted.push(match.substring(lastIndex, idx));
      //     highlighted.push(<mark>${letters[i]}</mark>);
      //     lastIndex = idx + 1;
      //   }
      //   return highlighted.join('');
      //});
    } 
    
  }
  return r;
}
const Search = (props) => {
  const [search, setSearch] = useState('')
    
    const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
    if( e.target.value != "" ) props.onChangeSearchVisible("")
    else props.onChangeSearchVisible("hidden")
    var searchData = getStarData(e.target.value)
    props.onChangeSearchKeyword(searchData);

    }
    
    const handleKeyDown = (e) => {
      if(e.key === 'Enter') {
          // enter 했을 때의 코드 작성
            // if(e.keyCode === 13) 도 사용가능하다.
        }
    }
    
    
    return (
      <div className="hero-headline flex flex-col mb-1 items-center justify-center text-center">
          <div className=" bg-white rounded flex items-center justify-center w-full p-3 shadow-sm border border-gray-200 lg:w-1/2">
            <input type="search" value={search} onChange={handleChange} onKeyDown={handleKeyDown} name=""  placeholder="search for images" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
            <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
          </div>
      </div>

    )
}

const MakeStarList = ( props ) => {
  var result = [];

  var so,s;
  for ( s in props.data ) {
    so = props.data[ s ];

    var tags=[];
    var z,zo;
    var cnt=""
    for( z in so.sns ){
      zo = so.sns[ z ];
      tags.push(
        <div key={so.names.KO + "_" + z} className="flex mr-2 mb-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-2 rounded-full bg-white text-gray-700 border">
          <RenderIcon sns={z}/>
        </div>
      )
    }
    result.push(

      <div key={s} href="#" className="group h-full w-full">
      <div className="relative aspect-h-1 aspect-w-1 h-48 w-full overflow-hidden bg-black-200 xl:aspect-h-100 xl:aspect-w-7">




        <img src={so.imgUrl} alt={so.names.EN} className="absolute opacity-40 h-full w-full object-cover object-center group-hover:opacity-75"/>
      
        <div className='absolute w-full px-2 py-2 bottom-0.5 hidden'>
          <p className="text-lg font-medium text-slate-50 ">{so.names.KO} - {so.names.EN}</p>
          <Link href={"/artist/" + s } target="_blank">
            <h3 className="flex flex-wrap mt-1 text-sm text-slate-50">{tags}</h3>
          </Link>
        </div>
      </div>

    </div>
    );
  }
  return result;
}

const MakeStarList1 = ( props ) => {
  var result = [];

  var so,s;
  for ( s in props.data ) {
    so = props.data[ s ];

    var tags=[];
    var z,zo;
    var cnt=""
    for( z in so.sns ){
      zo = so.sns[ z ];
      tags.push(
        <div key={so.names.KO + "_" + z} className="flex ml-2 mb-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-2 rounded-full bg-white text-gray-700 border">
          <RenderIcon sns={z}/>
        </div>
      )
    }
    result.push(

      
      <li class="text-gray-900 cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
        <Link href={"/artist/" + s } target="_blank">  
        <div class="flex items-center">
          
            <img src={so.imgUrl} alt="" class="h-5 w-5 flex-shrink-0 rounded-full"/>
            <span class="font-normal ml-3 block truncate">{so.names.KO}</span>
            <p className="ml-3 mt-1 truncate text-xs leading-5 text-gray-500">{so.names.EN}</p>
          
        </div>
        </Link>
      </li>
    
    );
  }
  return result;
}

const Rendering1 = (props) => {

  return (
  
    <div style={{visibility: props.visible}} role="list" className="mt-1 divide-y divide-gray-100 relative flex flex-col mb-10 items-center  text-center">
      <ul class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm  lg:w-1/2" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
      <MakeStarList1 data={props.data}/>
      </ul>
    </div>
  );
};

const Rendering = (props) => {

  return (
     <MakeStarList data={props.data}/>
  );
};

const Header = () => {
  return(
  <div className="hero-headline flex flex-col mb-10 items-center justify-center text-center">
    <Logo/>
    <h1 className=" font-bold text-3xl text-white">K-POP IDOL META</h1>
    <p className=" font-base text-base text-white">Search for your favorite artist and check the information!</p>
  </div>
  )
}

const Home = () => {
  const [artistInfo, setArtistInfo] = useState(data);
  const [visible, setVisible] = useState("hidden");

  //핸들러 함수
  const onChangeSearchKeyword = function (params) {
    setArtistInfo(params);
  };
  const onChangeSearchVisible = function (params) {
    setVisible(params);
  };

  return (
   <>
    <div className="bg-black">  
      <div class="relative grid grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-0">  
        
        <Rendering data={data}/>

        <div className="fixed flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full">
          
          <Header/>
          
          
          <Search onChangeSearchKeyword={onChangeSearchKeyword} onChangeSearchVisible={onChangeSearchVisible}/>
          
          <Rendering1 data={artistInfo} onChangeSearchKeyword={onChangeSearchKeyword} onChangeSearchVisible={onChangeSearchVisible} visible={visible}/>
        </div>

      </div>

    </div>
   </>
  )
}



export default Home;