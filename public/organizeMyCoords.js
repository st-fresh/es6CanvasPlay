//Coding Challenge by Jonathan James /// ES6, JQuery, Canvas /// See file 'summary.md' for review
((W, $, can, inp, _d, send, runOnClick) => 
  {  

////////////////////////////////
///////// SET PRIME UI ///////// 
////
////i./ START button /// Click-Listener ///
    let [_B, _Iui, _Cui] = [$('body'), $('#inputUI'), $('#controlUI')];


///////////////////////////////////////////////////////////
///////// DISPLAY RESULTS (CANVAS PREP & DRAWING) ///////// 
////ii./  Responds to Click-Listener --> Review Data handling at ..?
  
  let display = (source) => 
    {
// console.log(source);
    let [DATA] = [];

    DATA = source.splice(0, 26); //this is answer to challenge without visual canvas representation, clean & BRANCH after you send to display!
      
    //ANSWER IN CONSOLE
    // console.log(DATA);
    _Iui.append("<input type='button' id='run' value='START'>");

    $( "#run" ).click(function() 
                        {

                          runOnClick(); //CRUNCH VALUES AGAIN

                        }
                     );

  }
  
//   let prepCanvas = (source) => 
//     {
      
//       let [can, ctx, r, DATA] = [$('canvas'), $("canvas")[0].getContext('2d'), 3, ]; //r--> radius of a point on canvas
//       //--> got context
//       [ctx.lineWidth, ctx.lineJoin] = [2, 'round'];
      
      
      
//       //--> only split off unordered source in coordinates.json if ready to send to display.. async BABY!
//       DATA = source.splice(0, 26); //this is answer to challenge without visual canvas representation, clean & BRANCH after you send to display!
      
      
      
      
//       //carry through .hyp props on source by commenting-out ' delete d[j+m].hyp; ' at ////v./
//       // console.log(source)
      
//       _Iui.append("<input type='button' id='run' value='START'>");
  
//       $( "#run" ).click(function() 
//                           {

//                             runOnClick(); //CRUNCH VALUES AGAIN

//                           });
  
//     }

//////////////////////////////////
///////// GET & CRUNCH DATA ////////////// 
////i./ Get data first --> Ensure it's ready for display 
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
             xvals = xval.map(Number);
             yvals = yval.map(Number);
             send(d, xvals, yvals);

           }
          );
    
////v./ Compare --> Add to sourced coordinates.json in-order: [{least(closest)},..,{greatest(farthest)}] 
    function compare(d, dist) //d=sourced array, dist=distances or hypotenuses
      {
// console.log(d)
        let [i, j, l, m] = [0, 26, 0, ];

        for( i, j ; i<j ; i++) {

          m = $.inArray(d[i].hyp, dist);
          
          l++;

        //// TEST --> Use ' console.log(m) ' inside this loop here to see the correct order as an index
          d[j+m] = d[i];
          
          delete d[j+m].hyp; //comment-out this line to see order based on hyp prop --> use $> console.log(d[i]); in-place of it
          
          if (l === 26) {
console.log(d)
            display(d); //for answer in console and rendered on page
            
            // prepCanvas(d); //un-comment this line to show answer drawn to canvas
            
              
          }


        }
        
      }

////vi./ Send --> Prep and then Send data to compare() @ ////v./

    function send(d, xvals, yvals) 
      {
      
        // let [vx, vy, arb] = [inputs[0].children[2].value, inputs[0].children[4].value, Array.from('12345678901234567890123456')]; //un-comment for random-generated input-values on-load
        
        let [vx, vy, arb] = [6, 33, Array.from('12345678901234567890123456')]; //hard-coded input possible here --> see *summary.md*
        
        // let [vx, vy, arb] = [ , , Array.from('12345678901234567890123456')]; //inputs are empty awaiting user to fill them and click START
        
       /// TEST --> all should be defined before moving forward to compare() and/or use canvas
       // console.log(vx, vy);
      // console.log(d);
     // console.log(xvals);
    // console.log(yvals);
        
        let [fvx, fvy, hyps, i, l] = [ , , [], 0, xvals.length];
        // console.log(xvals, yvals)
        for( i ; i < l ; i++ ) {
          
          //Math.abs() --> Accounts here for (-) values --> Finds positive magnitude >> see *summary.md*
          fvx = Math.abs( (xvals[i] - vx)*(xvals[i] - vx) );
          fvy = Math.abs( (yvals[i] - vy)*(yvals[i] - vy) );

          d[i].hyp = Math.sqrt(fvx + fvy); //see *summary.md* file for why Math.floor() not used here

          hyps.push(d[i].hyp); 
          
          if (hyps.length === 26) {
            hyps.sort(function(a, b)
                        { 
                    
                          return a - b;
          
                        }
                     );
            
            arb.push.apply(d,arb); //add to sourced array arbitrary values that will hold ordered data

            compare(d, hyps);
            
          }

        }
      
      }

//?    // W.send = send;
    
    }
  )(window, jQuery);
  


//   runOnClick = (x,y) => {
    
//     W.send();
    
//   }
  

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
W.inp($('#inputUI'), {lX:xLbl, iX:xInp, lY:yLbl, iY:yInp}, {rxN:rX, ryN:rY}); //test your own 'NUMBERS' on-page-load here
// W.send();




//makeUI
//(function call)

//draw data on canvas for a random point
//(function loads a random data point and finds closest points and draws lines to them)

//add blinking-text "enter your coords to see what ids are close-by!"
//draw red around inputs and bold "X" and "Y" labes
//add 



