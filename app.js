$(document).ready(function () {
    console.log("Let’s get ready to party with jQuery!")
})

$('article img').addClass('image-center')
$('p').last().remove()

const randomSize=function () {
    return Math.floor(Math.random()*101)
}
console.log(randomSize() + "px")
$("#title").css('font-size', randomSize() + "px")

$('ol').append("<li>JQuery is easy</li>")
$('aside').children().remove()
$('aside').append('<p>Sorry for the silly list!</p>')
$('body').on('change', $('input'), function () {
    //get all the inputs
    const r = $('input').eq(0).val()
    const g = $('input').eq(1).val()
    const b = $('input').eq(2).val()
  $('body').css('background-color',`rgb(${r},${g},${b})`)  
})

$('body').on('click', 'img', function () {
    $(this).remove()
})


