//Week7 -Posenet Sketch3- Modified by Christian Gomes-Nov 1--Start

// this is a very simple sketch that demonstrates how to place a video cam image into a canvas 


let video;
let pose;

function setup(){
createCanvas(640,480);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)    
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function gotPoses(poses){
    console.log(poses);
    if( poses.length >0 ){
        pose = poses[0].pose;
    } 
    
} 

function draw(){
image(video, 0, 0);
    
if(pose){
    
    fill(255,0,0);
    //Modified from pose.nose to pose.leftWrist and pose.rightWrist by Christian Gomes-Nov 1--Start
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 100);
      ellipse(pose.rightWrist.x, pose.rightWrist.y, 100);
     //End
}    
   
  if(pose){
      //Modified from 255,0,0 to 255,255,255 by Christian Gomes-Nov 1--Start
    fill(255,255,255);
      //End
      
    //Modified from pose.nose to pose.leftEye by Christian Gomes-Nov 1--Start
      ellipse(pose.leftEye.x, pose.leftEye.y, 50);
      //End
}
    
     if(pose){
         
    //Modified from 255,0,0 to 0,255,255 by Christian Gomes-Nov 1--Start
    fill(0,255,255);
    //End
         
     //Modified to pose.leftShoulder and pose.rightShoulder by Christian Gomes-Nov 1--Start
     ellipse(pose.leftShoulder.x, pose.leftShoulder.y, 120);
      ellipse(pose.rightShoulder.x, pose.rightShoulder.y, 120);
         //End
      
}
    
}
//Week 7 Posenet Sketch3 Modified by Christian Gomes-Nov 1--End