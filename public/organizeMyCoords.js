((W, $, can, inp, _d, send, runOnClick) => 
  {  

////////////////////////////////
///////// SET PRIME UI ///////// 
////
////i./ START button /// Click-Listener ///
    let [_B, _Iui, _Cui] = [$('body'), $('#inputUI'), $('#controlUI')];

    _Iui.append("<input type='button' id='run' value='START'>");
  
    $( "#run" ).click(function() 
                        {

                          runOnClick(); //CRUNCH VALUES AGAIN

                        });
////
///////// SET PRIME UI ///////// 
////////////////////////////////

  // let getCan = () => {
    // let ctx = $("#myCanvas")[0].getContext('2d');
    //
  // }

//////////////////////////////////
///////// GET DATA ////////////// 
//// ** Responds to Click-Listener --> ///i./
//// 
////ii./ Data gathered and returned to window method
  ((W, $, send, out, inputs) => 
    {  
    
    inputs = $('#inputUI');
    var d, xvals, yvals;
    
    function sender(callback) 
      {

      let [z, splitXY, xval, yval] = [0,, [], []]; 

      $.getJSON('https://colorful-stamp.glitch.me/coordinates.json', 
                function(data) 
                  {

                  $.each(data, function( index, value ) 
                                 {

                                 splitXY = (data[z].value).split(',');
                                 //alert(splitXY[0]);
                                 //alert(splitXY[1]);
                                 xval.push(splitXY[0]);
                                 yval.push(splitXY[1]);
                                 z++ 

                                 });

                  callback(data, xval, yval);

                  });
      }

    sender(function (data, xval, yval) 
           {

             d = data;
             xvals = xval;
             yvals = yval;
             send();

           });
    
    function compare(d, dist) //d=sourced array, dist=distances
      {
        //this will be new coordinates.json after for-each adds hypotenueses 
// g = [{"id":"a","value":"31,49", "hyp":80}, {"id":"a","value":"31,49", "hyp":73}, {:83}, {:65}, {:89}]

// g = [{"id":"a","value":"31,49", "hyp":80}, {"id":"a","value":"31,49", "hyp":83}, {:65}, {:89}, {:og-73}, {:og-80}, {:og-83}]
//func.sort(arr); //ascending
        
//arr is equal to [g[#].hyp, g[#].hyp];
 //                  /73/ ...    80 ... ascending ... 83 .. 89..
                // i =    0          1                    2     3
        
        
        // console.log(d);
        console.log(d[0].hyp);
        let [i,j,l,m, newD] = [0,0,d.length,,Array.from('12345678901234567890123456')];
        
        
        newD.push.apply(d,newD);//add to sourced array arbitrary values that will hold ordered data
        
        dist.sort(function(a,b){ //sort distances from input or hardcoded x,y from least to greatest (closest to furthest)
          return a - b;
        })
        // console.log(dist);

        
        // let test2 = $.inArray(d[4].hyp, dist);
        // console.log(d[0]);
        console.log(d);
        // d.push(d[4]);
        // console.log(d);
        
        //for( i,j; i<l; i++ ) {
          
          // m = $.inArray(d[i].hyp, dist);
          
        
        //}
        
        
        // console.log(match, d[26]);
        // console.log(d[12], dist[12]);

//         for( i, j, k; j < l ; i=k) {
//         console.log(dist[i], d[j].hyp);
          
          
// //           if (dist[i] === d[j].hyp) {
// //             // d.push(d[j]);
// //             // delete d[d.length].hyp;
// //             // d.splice(j,1);
// //             // i++;
// //             // j = 0;
// //           } else if (dist[i] !== d[j].hyp) {

// //               j++;
            
// //             }
          
//         }
          
        //   -if loop i=0, j=0 i<arr.length    //i4 j0
        // if(arr[i] === g[j].hyp) {
        // g.push(g[j));//add to the end of coordinates.json
        // delete g[g.length].hyp //remove the hyp prop to return to sourced format
        // g.splice(j, 1);//
        // i++;
        // j=0; //reset j when a match is found to restart at 1st index
        // }ELSE { 
        // j++; }
        
      }

    function send() 
      {
      
        // let [vx, vy] = [inputs[0].children[2].value, inputs[0].children[4].value]; //user input
        let [vx, vy] = [6, 33]; //hardcoded input
        // console.log(vx, vy);
        // console.log(d);
        // console.log(xvals);
        // console.log(yvals);
        let [fvx, fvy, hyps, i, l] = [,,[],0, xvals.length];
      
        for( i = 0 ; i < l ; i++ ) {

          [fvx, fvy] = [ (Math.abs((xvals[i] - vx)*(xvals[i] - vx))), (Math.abs((yvals[i] - vy)*(yvals[i] - vy))) ];
          d[i].hyp = ( Math.floor(Math.sqrt(fvx + fvy)) ); //hypontenuse is a float, flooring here to match sourced json
          hyps.push(d[i].hyp); 

        }
        // console.log(d);
        compare(d, hyps);
      
      }

    // W.send = send;
    
    }
  )(window, jQuery);
  


//   runOnClick = (x,y) => {
    
//     W.send();
    
//   }
  
  
  
  
//         //GIVEN
//         let data = [
//           {"id":"a","value":"31,49"}, //[0] index
//           {"id":"b","value":"44,67"} //[1] index
//         ]

        
//         g[z].hyp = ( Math.floor(Math.sqrt(hyx + hyy)) )
//         arr.push(g[z].hyp); //pushes each hypoteneuse value to an array for sorting least(closests) to greatest(farthest)
//         //z++
//         //END forEach

//         console.log(g[z].hyp);

//         //this will be new coordinates.json after for-each adds hypotenueses 
//         g = [{"id":"a","value":"31,49", "hyp":80}, {"id":"a","value":"31,49", "hyp":73}, {:83}, {:65}, {:89}]

//         g = [{"id":"a","value":"31,49", "hyp":80}, {"id":"a","value":"31,49", "hyp":83}, {:65}, {:89}, {:og-73}, {:og-80}, {:og-83}]
//         //func.sort(arr); //ascending
//         //arr is equal to [g[#].hyp, g[#].hyp];
//          //                  /73/ ...    80 ... ascending ... 83 .. 89..
//                         i =    0          1                    2     3


        //go through matching hypotenuses coordinates.json (g) and arr that's in order
        //for-if loop i=0, j=0 i<arr.length    //i4 j0
          //if(arr[i] === g[j].hyp) {
            //g.push(g[j));//add to the end of coordinates.json
            //delete g[g.length].hyp //remove the hyp prop to return to sourced format
            //g.splice(j, 1);//
            //i++;
            //j=0; //reset j when a match is found to restart at 1st index
          //}ELSE { 
          //j++; }
          //end for-loop
        
//      W.check = check;

        
      
  
// "a" /:  "#i,#"ii
// PSEUDO// 
// var myarray=[25, 8, 7, 41]
//           // 41  72  39  65
//           //  a   b   c   d
//           //
// myarray.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
//     return a - b
// })
  
//   xval 6 yval 33 //user input
//    id   xv     yv
//    a    31     49 //json
//    b    44     67
  
  
  
///////// ALGORITHM METHODS : ARRAY MATCHING /////////
// let doWork = function({ix, iy}) {    // url, {data, cache, headers}) {
  
//   let [z] = [0];
//   let test = () => {data = data + "!"; 
//   return data ;}
//   data = test();

//   return {url, data};
  
// }

// let result = doWork("api/test", {data: "string",cache:false, headers:1});
// //result.url = "api/test" , result.data = "string!"  
  
  
//   //W.check();
// //let [inxVal, inyVal] = [99, 20]; //input-field.val()
// //add pythagorus' theory
// let[z, g, hyx, hyy] = 
//    [0, data, Math.abs((31 - inxVal)*(31 - inxVal)),  Math.abs((49 - inyVal)*(49 - inyVal)) ];
// let arr = [];
//forEach//

  
  

///////// UI RENDER METHODS ///////// 
//// 
 //.i/ Make Canvas funcs
  can = (a, d, {h, w}) => {
    
                          let can    = d.createElement('canvas');
                          can.height = h;
                          can.width  = w;

                          return a.appendChild(can);
    
                          }

  W.can = can;
////  
 //.ii/ Make Input-Field funcs
  inp = (a, {lX, iX, lY, iY}, ...r) => 
    {
    
     let bad; 
    
     a.append(lX);
     a.append(iX);
     a.append(lY);
     a.append(iY);

     iX.val(Math.floor(r[0].rxN));
     iY.val(Math.floor(r[0].ryN));
    // let b = Number.isInteger(iX.val());
    // let b = Number("-");

     $.isNumeric(iX.val()) ? a.append("<span id='badX' style='color:red;'>ENTER A NUMBER</span>") : iX.style.fontStyle = "bold";
     $.isNumeric(iY.val()) ? a.append("<span id='badY' style='color:red;'>ENTER A NUMBER</span>") : iY.style.fontStyle = "bold";
        
     if ( $('#badX') || $('#badY') ) {

       setTimeout(function() 
                    {
                    $('#badX').display = "none";
                    $('#badY').display = "none";
                    }, 1200);
  
     }
     
     
    // iX.val() === 26 ? b=true : b=false;
    // Number(b);
     // console.log( typeof b, b);
    // let c;
    // b == NaN ? c =true : c = false;
    // console.log(c);

    // let d = $.isNumeric( b );
    // console.log(d);
     //return {}

     }
  
  W.inp = inp;
////
/////////////////URM/////////////////
  
})(window, jQuery);

// Run Logic - Update View calling funcs built in Immediate Invocating func above
const W    = window;
const D    = document;
const xLbl = "<u>X-Value</u>";
const xInp = $('<input id="valX" type="text" />');
const yLbl = "<u>Y-Value</u>";
const yInp = $('<input id="valY" type="text" />');
var x,y;

let [rX, rY] = [Math.random() * 99 + 1, Math.random() * 99 + 1];

//these run when START button clicked - they initialize the display
W.can(D.getElementById("quads12"), D, {h:100,w:100});
W.inp($('#inputUI'), {lX:xLbl,iX:xInp,lY:yLbl, iY:yInp}, {rxN:rX,ryN:rY});
//W.findHypo({xInp.val(), yInp.val()});
// W.out(xInp.val(), yInp.val());
// if(xInp)
// W.send();




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

