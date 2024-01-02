import $ from 'jquery';
import _ from 'lodash';


$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

//bind debounce function to click event (every -500 millisecond)
$('button').on('click', _.debounce(updateCounter, 500));

//initialize count variable of click events
let count = 0;

//update the number of click events and print
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}