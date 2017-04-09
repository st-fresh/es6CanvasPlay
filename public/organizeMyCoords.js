/// Coding Challenge by Jonathan James 
/// ES6, JQuery, Canvas 
/// See file *summary.md* for review

/////////////////////
/// SUMMARY ///
//|
//|  As requested this Challenge includes a summary 
//|
       //|
///
let k; //This is a global
///
       //|
 //
   let t; //This is local to some other function
 //
       //|

//| Pay attention to roman numerals i./, ii./, iii./ for soft-references by-name to other parts of code
//| Use summary.md which includes Challenge Problem Statement to use a color-coded flow diagram
//|
/// END ///
/////////////////////


///
((W, $, can, inp, click) =>  
  {  
///
 // 
  //
    let _Iui = $('#inputUI');
  //

///////////////////////////////////////////////////////////
///////// DISPLAY RESULTS (CANVAS PREP & DRAWING) ///////// 
////
  //i./ Print ordered data array to conole &&|| Draw Canvas
    let display = (source) => 
      //--> .log(answer) /// commend-out to *   * at //ii./ to add .hyp props back to data
      {
  //
        let [DATA] = [source.splice(26, 52)]; 
          // DATA represents the answer to this challenge 
         // without visual canvas representation, clean(currently cleaning) & BRANCH after you send to display!
        //>> 
         console.log(DATA); //FOR ANSWER IN CONSOLE: un-comment this line
      //-->> .getContext /// .translate 
        // prepCanvas(source);
      //-->
      }
  

  
//   let prepCanvas = (source) => 
//     {
      
//       let [can, ctx, r, DATA] = [$('canvas'), $("canvas")[0].getContext('2d'), 3, ]; //r--> radius of a point on canvas
//       //--> got context
//       [ctx.lineWidth, ctx.lineJoin] = [2, 'round'];
      
//       ctx.translate (-424, -450); //move to center of a canvas
// ctx.drawImage (image, 0, 0);
      
//       //--> only split off unordered source in coordinates.json if ready to send to display.. async BABY!
//       DATA = source.splice(0, 26); //this is answer to challenge without visual canvas representation, clean & BRANCH after you send to display!
//     }
    
    
///////// DISPLAY RESULTS (CANVAS PREP & DRAWING) ///////// 
///////////////////////////////////////////////////////////


//////////////////////////////////
///////// GET & CRUNCH DATA ////////////// 
////i./ Get data first --> Ensure it's ready for display 
  ((W, $, send) => 
    {  
////ii./ Grab input-fields --> Set local-globals for data      

    let d, xvals, yvals, dREF, xvalsREF, yvalsREF, inx, iny;
    
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
            
             d     = dREF     = data;
             xvals = xvalsREF = xval.map(Number);
             yvals = yvalsREF = yval.map(Number);
             inx   = $('#valX').val();
             iny   = $('#valY').val();
      
             send(d, xvals, yvals,false,[6,33]); //pass hard-coded values by changing [6,33] to your desired values
             // send(d, xvals, yvals,false,[inx, iny]); //pass randomized values to matcher

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

            display(d); //for answer in console and rendered on page
            
            // prepCanvas(d); //un-comment this line to show answer drawn to canvas
              
          }

        }
        
      }

////vi./ Send --> Prep and then Send data to compare() @ ////v./

     send = (d, xvals, yvals, click, ...vs) =>
      {
       
       d     = dREF;
       xvals = xvalsREF;
       yvals = yvalsREF;
       // console.log(vs);
/// RANDOM & HARD-CODED STATES /// --> see ////iv./
        let [vx, vy, arb] = [vs[0][0], vs[0][1], Array.from('12345678901234567890123456')]; //hard-coded input possible here --> see *summary.md*
// USER-INPUT & RANDOM STATES //  
               //let [vx, vy, arb] = [(inputs[0].children[2]).val(), (inputs[0].children[4]).val(), Array.from('12345678901234567890123456')]; //un-comment for random-generated input-values on-load

        if (click) {
          console.log("click entered")
        //let [vx, vy, arb] = [vs[0], vs[1] , Array.from('12345678901234567890123456')]; //inputs are empty awaiting user to fill them and click START

        }
//DEFAULT STATE // 
        

       /// TEST --> all should be defined before moving forward to compare() and/or use canvas
       // console.log(vx, vy);
      // console.log(d);
     // console.log(xvals);
    // console.log(yvals);
        
        let [fvx, fvy, hyps, i] = [ , , [], 0];
        // console.log(xvals, yvals)
        for( i ; i < xvals.length ; i++ ) {
          
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

     W.send = send;
    
    })(window, jQuery);
  
///////////////////////////  
//// DYNAMIC-LISTENER ////
  click = (x,y, inputs, clicker) => 
    { 
      //->>//SHOWER!!
      clicker = false; 
      let button; //console.log("test");
      //--inputs->>
      if($(inputs)){ 
        //--->
        button = $('#button');
        //
        console.log(button);
        console.log(x.val(), y.val());
        //--->
      }

      if(clicker) { 
        //--->
        return W.send(0,0,0,clicker,[x.val(),y.val()]);
        //--->func
      }
      //
    }
///// DYNAMIC-LISTENER /////
///////////////////////////  
  
  
////
  W.click = click;
///
  

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
      _Iui.append("<input type='button' id='button' value='START'>");

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
W.can(D.getElementById("quads12"), D, {h:200,w:200});
//III./
W.inp($('#inputUI'), {lX:xLbl, iX:xInp, lY:yLbl, iY:yInp}, {rxN:rX, ryN:rY}); //test your own 'NUMBERS' on-page-load here
//IV./
// W.click(xInp, yInp, $('#button'));
// $( "input[type='text']" ).change(function() 
//                                    {
    
//   // W.send(,,,[1,0]);
  
//                                    }
//                                 );


// let newin = $('#button');
// console.log(newin)


$( "#button" ).click(function() 
                       {
                         let clicked = true;//here we go
                         W.click(xInp, yInp, $('#button'),clicked);
                         console.log("non-immediate");
  
                        }
                    );

//makeUI
//(function call)

//draw data on canvas for a random point
//(function loads a random data point and finds closest points and draws lines to them)

//add blinking-text "enter your coords to see what ids are close-by!"
//draw red around inputs and bold "X" and "Y" labes
//add 



