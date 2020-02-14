//const {ipcRenderer} = require('electron');
// var awsIot = require('aws-iot-device-sdk');
const { Manager } = require('buildthing-beacon-sdk');

//jquery
window.$ = window.jQuery = require('jquery');

// //IoT
// let device = awsIot.device({
//     host: process.env.ACI_IOT_ACCESS_ENDPOINT ,
//     clientId: 'iEcoProc-iTainerTest',
//     keyPath: './awscert/isol.kr.sel001.private.pem.key',
//     certPath: './awscert/isol.kr.sel001.certificate.pem.crt',
//     caPath: './awscert/AWSRootCA.pem'
    
//  });
//  let deviceId="ISOL-KR-SEL-0001"
 
    // device
    // .on('connect', function() {
    //     console.log('connect');
    //     device.subscribe('topic_1');
    //     device.publish('topic_2', JSON.stringify({ test_data: 1}));
    // });

    // device
    // .on('message', function(topic, payload) {
    //     console.log('message', topic, payload.toString());
    // });
    
    // $("#deviceid").html('장비번호 : '+ deviceId );




window.handleClick = ()=>{
    //ipcRenderer.send('handle-click','ping' + hosturl);
    console.log("Click!!");

    // device.publish('topic_2', JSON.stringify({ test_data: 333}));

    // device
    // .on('connect', function() {
    //     console.log('connect');
    //     device.subscribe('topic_1');
    //     device.publish('topic_2', JSON.stringify({ test_data: 1}));
    // });

    // device
    // .on('message', function(topic, payload) {
    //     console.log('message', topic, payload.toString());
    // });
    
    // $("#deviceid").html('장비번호 : '+ deviceId );
    
}


window.addEventListener("load", function(event) {
     var bleManager = new Manager()

  
    bleManager.on('discover', function(beacon) {
        console.log("==============discover===============")
        console.log(beacon)
    })
  
    bleManager._ble.on('stateChange', function (state) {
        console.log("==============PoweredOn===============")
      if(state[0] === 'poweredOn') bleManager.startScan()
    })
  
    window.bleManager = bleManager
  });