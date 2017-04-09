/////////////|  Coding Challenge by Jonathan James 
/////////////|  ES6, JQuery, Canvas 
/////////////|  See file *summary.md* for review
//
/// SUMMARY ||
//-->           This is a line with only a comment on it.
//||||||||||||  As requested this Challenge includes a summary, 
       //|||||  See summary file at *summary.md*
///
let k; //|||||  This is a global !
///
       //|||||  Enjoy your day !
 //
   let t; //||  This is local to some other function !
 //
       //|||||  Always reaching !
       //|||||  This is what function declarations are inside of:
//   
  //{------------------------------------- 
  //i./--> List .methods and funcs() used within.
    let q = () =>
    {
    // @mrdignitty
    };
  //}-------------------------------------
//
//||||||||||||  Pay attention to roman numerals like i./, ii./, iii./ and so on..
//||||||||||||  ..for soft-references by-name to other parts of code.
//||||||||||||  Reference summary.md which includes Challenge Problem Statement and a color-coded flow diagram.
//              This is a line with nothing on it; typically preceding any other declaration; easily removable.
//console.log(k) //-->  TEST --> This is a test, un-comment it to see test-results in your debug-console.
//              Easily removable.
/// END //||||
//
//
//-->  S T A R T
//
//
//{------------------------------------- 
///
((W, $, can, inp, click) =>  
  {  
  // 
  //
    let _Iui = $('#inputUI');
  //
  //>>
  //////////////////////////////////////////////////////////
  /////// DISPLAY RESULTS (CANVAS PREP & DRAWING) ///////// 
  //
  //{-------------------------------------
  //i./--> Print ordered data array to conole. 
  //--> .log(answer) ||| at //iii.v/ commend-out ' delete d[j+m].hyp; ' to add .hyp props back to data.
    let display = (source) => 
    {
    //
      let [DATA] = [source.splice(26, 52)]; 
    //---> DATA represents the answer to this challenge.. 
    //---> without visual canvas representation, clean(currently cleaning) & BRANCH after you send to display!
    // 
      console.log(DATA); //FOR ANSWER IN CONSOLE: un-comment this line !
    //--> .getContext /// .translate 
      // prepCanvas(source);
      //
    } //--> Close source()
  //}-------------------------------------
  //
  ////{-------------------------------------
  //ii./--> Draw Canvas
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
  ////{-------------------------------------
  /////// DISPLAY RESULTS (CANVAS PREP & DRAWING) ///////// 
  /////////////////////////////////////////////////////////
  //
  //
  ////////////////////////////////
  /////// GET & CRUNCH DATA ////////////// 
  //{-------------------------------------
  //iii./ Get data first ||| Ensure it's ready for display. 
  ((W, $, send) => 
  {  
  //iii.i/--> Grab input-fields ||| Set local-globals for data.      
    let d, xvals, yvals, dREF, xvalsREF, yvalsREF, inx, iny;
  //
  //{-------------------------------------
  //iii.ii/--> Grab data from coordinates.json ||| sender(callback)
    function sender(callback) 
    {
    //
      let [z, splitXY, xval, yval] = [0,, [], []]; 
    //{-------------------------------------
    //iii.iii/--> .getJSON requires full url ||| .each | callback() 
      $.getJSON('https://colorful-stamp.glitch.me/coordinates.json', 
      function(data) 
      {
      //{-------------------------------------        
        $.each(data, 
        function( index, value ) 
        {
        //iii.iv --> Split data into local-global vars xval, and yval /// .value | .split | .push
          splitXY = (data[z].value).split(',');
          xval.push(splitXY[0]);
          yval.push(splitXY[1]);
          z++ 
        //
        }
      //}-------------------------------------
               );
      //
        callback(data, xval, yval);
      //
      } //--> Close anonymous .getJSON function() param.
    //}-------------------------------------
             ); //--> Close .getJSON params.
      } //--> Close sender()
    //}-------------------------------------
    //
         //{-------------------------------------
         //iii.v/--> Pass datas with callback /// Call send() which calls compare() too.
    sender(function (data, xval, yval) 
           {
           //--> .map .val send()
             d     = dREF     = data;
             xvals = xvalsREF = xval.map(Number);
             yvals = yvalsREF = yval.map(Number);
             inx   = $('#valX').val();
             iny   = $('#valY').val();
           //
           //--> Use only one of the following send() funcs below (1 or (2 : See *summary.md* for more..
               // send(d, xvals, yvals,false,[6,33]); //--> pass hard-coded values by changing [6,33] (1
             send(d, xvals, yvals,false,[inx, iny]); //--> pass randomized values on-page-load [inx, iny] (2
           } //--> Close callback
         //}-------------------------------------
          ); //--> Close sender params
         //
  //{-------------------------------------
  //iii.vi/--> Compare then Add to sourced coordinates.json in-order: [{least(closest)},..,{greatest(farthest)}] 
    function compare(d, dist) //--> d = sourced array, dist = distances or hypotenuses or magnitudes
    {
      let [i, j, l, m] = [0, 26, 0, ];
    //--> .inArray ||| display() ||| delete
      for( i, j ; i<j ; i++) 
      {
        m = $.inArray(d[i].hyp, dist);
        l++;
      //console.log(m) //-->  TEST --> Use ' ' ||| inside this loop here to see the correct order as an index
        d[j+m] = d[i];
        delete d[j+m].hyp; 
      //
        if (l === 26) {
          display(d); //for answer in console and rendered on page
            // prepCanvas(d); //un-comment this line to show answer drawn to canvas
        } //--> Close if in the for
      }//--> Close for
    //    
    }//--> Close compare()
  //}-------------------------------------

    //{-------------------------------------
    //iii.vii/--> Prep and then Send data to compare() at ////iii.v/
    //--> send() | Array.from() | .length | Math.abs() | Math.sqrt() | .push | .sort | .apply | compare | W.send
     send = (d, xvals, yvals, click, ...vs) =>
     {
     // 
       d     = dREF;
       xvals = xvalsREF;
       yvals = yvalsREF;
     // 
       let vx, vy, arb = Array.from('12345678901234567890123456');
     //--> 1) Handles randomized on-page-load
       if(!click) {  
         vx = vs[0][0];
         vy = vs[0][1];
       }
     //--> 2) Handles button clicks
       if (click) {
         vx = vs[0][0];
         vy = vs[0][1];
       }  
     //--> send() continues
     ///--> TESTING --> all tests below should pass before moving forward to compare() and use canvas.
     // console.log(vx, vy); //-->  TEST --> Check your random and hard-coded inputs.
     // console.log(d); //-->  TEST --> Check your original sourced data-array coordinates.json
     // console.log(xvals); //-->  TEST --> Check x-values split from sourced data-array, see //iii.iv 
     // console.log(yvals); //-->  TEST --> Check y-values split from sourced data-array, see //iii.iv 
     //   
       let [fvx, fvy, hyps, i] = [ , , [], 0];
     //
       for( i ; i < xvals.length ; i++ ) 
       {
       //--> Math.abs() Accounts here for (-) values ||| Finds positive magnitudes ||| see *summary.md*
         fvx      = Math.abs( (xvals[i] - vx)*(xvals[i] - vx) );
         fvy      = Math.abs( (yvals[i] - vy)*(yvals[i] - vy) );
       //
         d[i].hyp = Math.sqrt(fvx + fvy); //--> See *summary.md* file for why Math.floor() not used here.
       //
         hyps.push(d[i].hyp); 
       //
         if (hyps.length === 26) 
         {
                  //{-------------------------------------
                  //iii.viii/--> Sort hyps array filled with distances/magnitudes/hypotenuses' least to greatest. 
           hyps.sort(function(a, b)
                    { 
                      return a - b;
                    } //--> Close anonymous function() param in sort()
                  //}-------------------------------------
                   );
           arb.push.apply(d,arb); //--> Add to sourced array arbitrary values that will hold ordered data.
         //
          compare(d, hyps);
         //
         } //--> Close if-statement in the for-loop in the send()
       }//--> Close for-loop in the send() 
     }//--> Close send() 

     W.send = send;
    
   })(window, jQuery); //Close //iii./
///  
///////////////////////////  
//// DYNAMIC-LISTENER ////
  click = (x,y, inputs, clicker) => 
    { 
      //->>//SHOWER!!
      clicker = true; 
      let button; //console.log("test");
      //--inputs->>
      if($(inputs)){ 
        //--->
        button = $('#button');
        //
        console.log(button);
        // console.log(x.val(), y.val());
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
  }
)(window, jQuery);
///
//}-------------------------------------


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
//
//-->  E N D