((W, $, can, inp) => {  
  
// let doWork = function(url, {data, cache, headers}) {

//   let test = () => {data = data + "!"; 
//   return data ;}
//   data = test();

//   return {url, data};
  
// }

// let result = doWork("api/test", {data: "string",cache:false, headers:1});
// //result.url = "api/test" , result.data = "string!"
  
  
//init UI
  let [_B, _Iui, _Cui] = [$('body'), $('#inputUI'), $('#controlUI')];
  // let getCan = () => {
    // let ctx = $("#myCanvas")[0].getContext('2d');
    //
  // }
//   let { get : function() {
              
//               } }
// let { firstName : first,
// twitter   : tweet } = doWork();
//   let { firstName, lastName } = doWork();
  
//get data
  $(function() {

    let z = 0;

    $.getJSON('https://colorful-stamp.glitch.me/coordinates.json', function(data) {

      let g = data;

      $.each(g, function( index, value ) {
        alert( g[z].id + ": " + g[z].value );
        z++
      });

      //send to global
      let send = function() {
        return {

        }
      }

    });

  });
  
//// UI RENDER METHODS // 
//
//
/// init Make Canvas funcs
  
  can = (a, d, {h, w}) => {
    
    let can    = d.createElement('canvas');
    can.height = h;
    can.width  = w;

    return a.appendChild(can);
    
  }

  W.can = can;
  
/// init Make Input-Field funcs
  inp = (a, {lX, iX, lY, iY}, ...r) => {

    a.append(lX);
    a.append(iX);
    a.append(lY);
    a.append(iY);

    iX.val(Math.floor(r[0].rxN));
    iY.val(Math.floor(r[0].ryN));
    
    
    return {}
    
  }
  
  W.inp = inp;
// 
//    
//// FINISH UI RENDER METHODS //
  
// etc. //
  
  // let doWork = function(url, {data, cache, headers}) {

//   let test = () => {data = data + "!"; 
//   return data ;}
//   data = test();

//   return {url, data};
  
// }

// let result = doWork("api/test", {data: "string",cache:false, headers:1});
// //result.url = "api/test" , result.data = "string!"
  
})(window, jQuery);

// Run Logic - Update View calling funcs built in Immediate Invocating func above
const W = window;
const D = document
const xLbl = "<u>X-Value</u>";
const xInp = $('<input id="valX" type="text" />');
const yLbl = "<u>Y-Value</u>"
const yInp = $('<input id="valY" type="text" />')

let [rX, rY] = [Math.random() * 99 + 1, Math.random() * 99 + 1];

//these run when START button clicked - they initialize the display
W.can(D.getElementById("quads12"), D, {h:100,w:100});
W.inp($('#inputUI'), {lX:xLbl,iX:xInp,lY:yLbl, iY:yInp}, {rxN:rX,ryN:rY});







//makeUI
//(function call)

//draw data on canvas for a random point
//(function loads a random data point and finds closest points and draws lines to them)

//add blinking-text "enter your coords to see what ids are close-by!"
//draw red around inputs and bold "X" and "Y" labes
//add 


//let W = window;
//console.log(W.d, W.s);
//let [init, data] = [W.start, W.data];

//init();

//let coords = W.data;
//console.log(coords);
