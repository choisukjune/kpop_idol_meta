"use client"
import React, { useState } from 'react';

function Hello(props) {
  return <div>안녕하세요 {props.name}</div>
}

function App() {
  const [color, setColor] = useState('App');

  //핸들러 함수
  const onChangeBackground = function () {
    var r = Date.now();
    setColor(r);
  };

  return (
    <>
    <button onClick={onChangeBackground}>TEST</button>
    <Hello name={color} />
    </>
  );
}

export default App;