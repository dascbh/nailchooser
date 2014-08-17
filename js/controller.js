function setNailType(imgUrl,selectedItem) {
  var imageSource = imgUrl;
  var imgId = selectedItem;
  var imageObj = new Image();

  context.clearRect(0, 0, canvas.width, canvas.height);
  
  imageObj.onload = function() {
    if (imgId == 1) {
      var x = -20;
      var y = 0;
      var w = 440;
      var h = 480;
      context.drawImage(imageObj, x, y, w, h);
    };

    if (imgId == 2) {
      var x = 0;
      var y = 0;
      var w = 450;
      var h = 480;
      context.drawImage(imageObj, x, y, w, h);
    };

    if (imgId == 3) {
      var x = -20;
      var y = 0;
      var w = 440;
      var h = 480;
      context.drawImage(imageObj, x, y, w, h);
    };
    };
    imageObj.src = imageSource;
};

function setAllFingers (imgUrl, handId) {
  var imageSource = imgUrl;
  var currentHand = handId;

  if (currentHand == 0) {
    var fingers = 0;
    while (fingers <= 3) {
      if (fingers == 0) {
        //left, top
        context.beginPath();
        context.moveTo(65, 180);
        context.lineTo(118, 207);
        context.bezierCurveTo(204, 72, 93, 3, 64, 181);
        context.closePath();
        context.clip();

        var imgFinger1 = new Image();
        imgFinger1.onload = function() {
           context.rotate(0.4); 
           context.drawImage(imgFinger1, 115, 20, 80, 130);
        };
        imgFinger1.src = imageSource;
        console.log("zero");
      };

      if (fingers == 1) {
        //left, top
        context.beginPath();
        context.moveTo(65, 180);
        context.lineTo(118, 207);
        context.bezierCurveTo(204, 72, 93, 3, 64, 181);
        context.closePath();
        context.clip();
              context.fillStyle = '#8ED6FF';
      context.fill();
      context.strokeStyle = 'blue';
      context.stroke();

        // var imgFinger2 = new Image();
        // imgFinger2.onload = function() {
        //    context.rotate(0.4); 
        //    context.drawImage(imgFinger2, 115, 20, 80, 130);
        // };
        // imgFinger2.src = imageSource;
        // console.log("um");
      };

      if (fingers == 2) {
        //left, top
        context.beginPath();
        context.moveTo(65, 180);
        context.lineTo(118, 207);
        context.bezierCurveTo(204, 72, 93, 3, 64, 181);
        context.closePath();
        context.clip();
        console.log("dois");
      };

      if (fingers == 3) {
        //left, top
        context.beginPath();
        context.moveTo(65, 180);
        context.lineTo(118, 207);
        context.bezierCurveTo(204, 72, 93, 3, 64, 181);
        context.closePath();
        context.clip();
        console.log("tres");
      };
    fingers++;
    }
  };


}

function setSingleNail (imgUrl, finger, handId, sequence) {
  
  var imageSource = imgUrl;
  var fingerId = finger;
  
  var currentHand = handId;
  var currentSeq = sequence;



  //left, top
  context.beginPath();
  context.moveTo(65, 180);
  context.lineTo(118, 207);
  context.bezierCurveTo(204, 72, 93, 3, 64, 181);
  context.closePath();
  context.clip();
    
  var imgFinger1 = new Image();
  imgFinger1.onload = function() {
     context.rotate(0.4); 
     context.drawImage(imgFinger1, 115, 20, 80, 130);
  };
  imgFinger1.src = 'http://www.iaiapeliculas.com.br/artes/arte1.jpg';

}

function Rasterize() {
  if (!fabric.Canvas.supports('toDataURL')) {
    alert('This browser doesn\'t provide means to serialize canvas to an image');
  }
  else {
    window.open(canvas.toDataURL('image/png'));
  }
};


function itemDispatcher (callOrigin, imgSource, selectedItem) {
  var origin = callOrigin;
  var imgURL = imgSource;
  var handId = selectedItem;

  // chamada veio da mao
  if (origin == 0) {
    var imgId = selectedItem;
    setNailType(imgURL, imgId);
  };

  // chamada dedos - setar padrao
  if (origin == 1) {
      var fingerId = selectedItem;
      setAllFingers(imgURL, handId);
  };

  // // chamada dedos - dedo unico
  // if (origin == 1) {
  //     var fingerId = selectedItem;
  //     setSingleNail(imgURL, fingerId);
  // };

}

function loadImages(sources, callback) {
  var images = {};
  var loadedImages = 0;
  var numImages = 0;
  // get num of sources
  for(var src in sources) {
    numImages++;
  }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
    images[src].src = sources[src];
    }
}

  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  var sources = {
    darthVader: 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg',
    yoda: 'http://www.html5canvastutorials.com/demos/assets/yoda.jpg'
  };

  loadImages(sources, function(images) {
   context.drawImage(images.darthVader, 100, 30, 200, 137);
   context.drawImage(images.yoda, 350, 55, 93, 104);
  });
