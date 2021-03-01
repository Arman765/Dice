function playgame()
{
    var randomNumberOne = Math.floor(Math.random()*6)+1;
    var randomImageOnePath="{{url_for('static',filename='imagesss/"+randomNumberOne+".png')}}";


    var randomNumberTwo = Math.floor(Math.random()*6)+1;
    var randomImageTwoPath="{{url_for('static',filename='imagesss/"+randomNumberTwo+".png')}}";


    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImageOnePath);

    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImageTwoPath);


    if(randomImageOnePath>randomImageTwoPath)
    {
        document.querySelector("h1").innerHTML="Player1 Wins"
    }
    else if(randomImageTwoPath>randomImageOnePath)
    {
        document.querySelector("h1").innerHTML="Player2 Wins"
    }
    else{
        document.querySelector("h1").innerHTML="draw"
    }
}

document.querySelector("button").addEventListener("click",playgame);