// // #############################################
// // USING SELECTORS
// // #############################################

// // ############
// // 16 
// // ############
// // Select an h1 header:  
// $("h1")[0]

// // Select all the divs:
// $('div')

// // Select the first div:
// $('div:first')

// // /Select the profile picture using it's class:
// $('.profilepic')

// // Select all nav-items using it's class:
// $('.nav-item')

// // Select an object using it's id:
// $('#bottom-nav-item')

// // Try 3 new types of selectors:
// $('[href]')
// $("a[target!='_blank']")
// $("ul li:first")
// $("ul li:first-child")

// // Use .parent(), .children(), and .sibling() to grab elements near the one you've selected
// $('ul').parent()
// $('ul').children()
// $('li').siblings()

// // ############
// // 17
// // ############
// $('.twitter-timeline').hide()

// // ############
// // 18
// // ############
// $('.card').hide()

// // ############
// // 19
// // ############
// $('.main').show()

// // ##############
// // 20
// // ##############
// $('.main').text("This is my blog. It rocks the world.")

// // ##############
// // 21
// // ##############
// $('.main').append(" I have awesome teacher!!")

// // ##############
// // 22
// // ##############
// $("<p>I wish I could fly!</p>").insertAfter('.main p')

// // ##############
// // 23
// // ##############
// $('#twitter-widget-0').remove()

// // ##############
// // 24
// // ##############
// // Move the nav-item Blog to the bottom of the nav-item list. (This will require you to remove the element, save the removed element in a variable, insert the element after the 'Say Hello' item)
// x = $('.nav-item:first');
// $('.nav-item:first').remove;
// x.insertAfter('.nav-item:last');

// // ##############
// // 25
// // ##############
// // Clone the navbar and insert it after the About Me div.
// $('.card.nav').clone().insertAfter('.main')

// // ##############
// // 26
// // ##############
// // Change the width attribute of the profile picture.
// $('.profilepic').width(100);

// // ##############
// // 27
// // ##############
// // Show and hide are jQuery animations. You can have it perform the animation over a period of time. Have jQuery hide the twitter feed over 500ms
// $(".right-sidebar").hide(1000);

// // ##############
// // 28
// // ##############
// Find 3 more jQuery effects and use them
// $('.right-sidebar').fadeToggle(1000, "linear")
// $('.right-sidebar').slideUp(1000)

// // css:
// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
// // </head>
// // <body>
// //   <button>Toggle</button>
// // <p>Hello</p>
// // <p style="display: none">Good Bye</p>
// // </body>
// // </html>

// $("p").toggle();

// ##########################################
// EVENT HANDLING
// ##########################################

// ##############
// 31 
// ##############











