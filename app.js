function omikuji() {
    let msg1;
    let msg2;
    let random1;
    let random2;
  
    random1 = Math.floor(Math.random() * 3);
    //Math.ramdom()で0~1の間の数字を取得することができる。それを3倍し、その3をグーチョキパーに当てはめる
    //Math.floorで小数点以下を切り捨て、グーチョキパー以外の結果が出ないように調整する
    console.log(random1);
  
    const result = ['グー!', 'チョキ!', 'パー!'];
  
    msg1 = result[random1];
  
    random2 = Math.floor(Math.random());
    console.log(random2);
  
    const resultMsg = [
        '勝てたかな？'
    ];
    //ramdom1と同じ要領でじゃんけん後のメッセージを表示
  
    msg2 = resultMsg[random2];
  
    document.getElementById('msgHeading').setAttribute('style', 'opacity: 1;');
    //setAttributeによってボタンを押す前までmsgHeadingは見えない(不透明である)ように属性を付与する
    setTimeout(function() {
        document.getElementById('msg1').innerHTML = msg1;
    }, 1000);
    setTimeout(function() {
        document.getElementById('msg2').innerHTML = msg2;
    }, 2500);
    //msg1,msg2をsetTimeoutによって数秒遅れせて表示
    document.getElementById('playBtn').setAttribute('disabled', 'disabled');
    document.getElementById('resetBtn').removeAttribute('disabled');
  }
  
  function reset() {
    document.getElementById('msgHeading').setAttribute('style', 'opacity: 0;');
    document.getElementById('msg1').innerHTML = '';
    document.getElementById('msg2').innerHTML = '';
    document.getElementById('playBtn').removeAttribute('disabled');
    document.getElementById('resetBtn').setAttribute('disabled', 'disabled');
  }