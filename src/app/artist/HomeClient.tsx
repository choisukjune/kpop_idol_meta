"use client"

import Image from 'next/image'
import data from '../../app/artistInfo.json';
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Logo from "../../../components/Logo"

// ... (기존의 다른 컴포넌트들과 함수들)

const HomeClient = () => {
  const [artistInfo, setArtistInfo] = useState({});
  const [visible, setVisible] = useState("hidden");

  useEffect(() => {
    setArtistInfo(data);
  }, []);

  const onChangeSearchKeyword = function (params) {
    setArtistInfo(params);
  };
  const onChangeSearchVisible = function (params) {
    setVisible(params);
  };

  return (
   <>
    <div className="bg-black">
      <div className="grid grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-0">
        <div className="flex min-h-full flex-col justify-center px-3 py-3 lg:px-8 w-full">
          <Header/>
          <Search onChangeSearchKeyword={onChangeSearchKeyword} onChangeSearchVisible={onChangeSearchVisible}/>
          <Rendering1 data={artistInfo} onChangeSearchKeyword={onChangeSearchKeyword} onChangeSearchVisible={onChangeSearchVisible} visible={visible}/>
        </div>  
        <Rendering data={data}/>
      </div>
    </div>
   </>
  )
}

export default HomeClient;