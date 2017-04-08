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
///////// GET & CRUNCH DATA ////////////// 
//// ** Responds to Click-Listener --> ///i./
//// 
  ((W, $, send, out, inputs) => 
    {  
////ii./ Grab input-fields --> Set local-globals for data
    inputs = $('#inputUI');
    let d, xvals, yvals;
    
////iii./ Grab data from coordinates.json --> Split data into local-global vars xval, and yval
    function sender(callback) 
      {

      let [z, splitXY, xval, yval] = [0,, [], []]; 

      $.getJSON('https://colorful-stamp.glitch.me/coordinates.json', 
                function(data) 
                  {

                  $.each(data, function( index, value ) 
                                 {

                                   splitXY = (data[z].value).split(',');
                                   xval.push(splitXY[0]);
                                   yval.push(splitXY[1]);
                                   z++ 

                                 }
                        );

                  callback(data, xval, yval);

                  }
               );
      }

////iv./ Pass datas with callback --> Call send() which calls compare() too
    sender(function (data, xval, yval) 
           {

             d     = data;
             xvals = xval;
             yvals = yval;
             send();

           }
          );
    
////v./ Compare --> Add to sourced coordinates.json in-order: [{least(closest)},..,{greatest(farthest)}] 
    function compare(d, dist) //d=sourced array, dist=distances or hypotenuses
      {

        let [i,j,l,m] = [0,26,dist.length,];
        
        
        for( i, j ; i<l ; i++) {

          m = $.inArray(d[i].hyp, dist);
 
          d[j+m] = d[i];

          delete d[j+m].hyp; //comment-out this line to see order based on hyp prop --> use $> console.log(d[i]); in-place of it

        }

    }

////vi./ Send --> Prep and then Send data to compare() @ ////v./

    function send() 
      {
      
        // let [vx, vy] = [inputs[0].children[2].value, inputs[0].children[4].value]; //user input
        let [vx, vy, arb] = [6, 33, Array.from('12345678901234567890123456')]; //hard-coded input possible here
        
//draw?/// TEST --> all should be defined before moving forward to compare() and/or draw()
       // console.log(vx, vy);
      // console.log(d);
     // console.log(xvals);
    // console.log(yvals);
        
        let [fvx, fvy, hyps, i, l] = [,,[],0, xvals.length];
      
        for( i = 0 ; i < l ; i++ ) {

          [fvx, fvy] = [ (Math.abs((xvals[i] - vx)*(xvals[i] - vx))), (Math.abs((yvals[i] - vy)*(yvals[i] - vy))) ];
          d[i].hyp = ( Math.sqrt(fvx + fvy) ); //hypontenuse is a float, flooring here to match sourced json
          hyps.push(d[i].hyp); 

        }

        hyps.sort(function(a,b)
                    { 
                    
                    return a - b;
          
                    }
                 );
        
        arb.push.apply(d,arb);//add to sourced array arbitrary values that will hold ordered data

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

      //error-catch for hardcoded X and Y inputs --> see //III./ --> rX, rY
      $.isNumeric(iX.val()) ? $('input[name="x"]').css('font-weight', '900') : a.append("<span id='badX' style='color:red;'>ENTER A NUMBER</span>");
      $.isNumeric(iY.val()) ? $('input[name="y"]').css('font-weight', '900') : a.append("<span id='badY' style='color:red;'>ENTER A NUMBER</span>");

      if ( $('#badX') || $('#badY') ) {
        setTimeout(function() 
                      {
                        $('#badX').css('display','none');
                        $('#badY').css('display','none');
                      }, 2000);

      }

    }
  
  W.inp = inp;
////
/////////////////URM/////////////////
  
})(window, jQuery);

// Run Logic - Update View calling funcs built in Immediate Invocating func above
//I./
const W    = window;
const D    = document;
const xLbl = "<u>X-Value</u>";
const xInp = $('<input id="valX" type="text" name="x" />');
const yLbl = "<u>Y-Value</u>";
const yInp = $('<input id="valY" type="text" name="y" />');
var x,y;
let [rX, rY] = [Math.random() * 99 + 1, Math.random() * 99 + 1];

//these run when START button clicked - they initialize the display
//II./
W.can(D.getElementById("quads12"), D, {h:100,w:100});
//III./
W.inp($('#inputUI'), {lX:xLbl,iX:xInp,lY:yLbl, iY:yInp}, {rxN:rX,ryN:rY}); //test your own 'NUMBERS' on-page-load here
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

