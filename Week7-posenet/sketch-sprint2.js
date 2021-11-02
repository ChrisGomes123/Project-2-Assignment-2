//Week7 -Posenet Sketch4- Modified by Christian Gomes-Nov 1--Start

// this is a very simple sketch that demonstrates how to place a video cam image into a canvas 


//Modified by Christian Gomes-Nov 1--Start
//removed let skeleton
let video;
let pose;
//Changed from let img1 to img
let img;
//End

function setup(){
createCanvas(640, 480);
noStroke();    
video = createCapture(VIDEO);
video.size(width,height);    
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)

//Modified by Christian Gomes-Nov 1--Start
//I modified this part and changed it to the transparent apple png I found sourced from: https://freeiconshop.com/icon/apple-icon-outline-filled/
img = loadImage('images/ap.png'); 
//End
    
    
video.hide();    
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};



function gotPoses(poses){
    console.log(poses);
    if( poses.length > 0 ){
        pose = poses[0].pose;
    } 
    
} 


//Modified by Christian Gomes-Nov 1--Start

//removed drawn ellipse
function draw(){
image(video, 0, 0,width,height);
 
//End

    
    if(pose){
        
 //Modified from pose.leftWrist to pose.leftEar and pose.rightEar by Christian Gomes-Nov 1--Start
image(img, pose.leftEar.x,pose.leftEar.y , 13, 13);
image(img, pose.rightEar.x,pose.rightEar.y , 13, 13);
//End
        
    }
}

    //Week7 -Posenet Sketch4- Modified by Christian Gomes-Nov 1--End