var image = document.getElementById("image");
var title = document.getElementById("title");
var para = document.getElementById("para");


var button = document.getElementById("btn");
var gallery = [{
    imgsrc: "images/Thomas_Edison.jpg",
    head1: "Thomas Alva Edison",
    head2: "Thomas Alva Edison (February 11, 1847 , October 18, 1931) was an American inventor and businessman. He developed many devices in fields such as electric power generation, mass communication, sound recording, and motion pictures.These inventions, which include the phonograph, the motion picture camera, and early versions of the electric light"
},

{
    imgsrc: "images/Galileo.jpg",
    head1: "Galileo di Vincenzo Bonaiuti de' Galilei",
    head2: "Galileo di Vincenzo Bonaiuti de' Galilei (15 February 1564 , 8 January 1642) was an Italian astronomer, physicist and engineer, sometimes described as a polymath. Commonly referred to as Galileo, his name is pronounced (GAL-ih-LAY-oh GAL-ih-LAY-ee, Italian"
},
{
    imgsrc: "images/Alexander_Graham_Bell.jpg",
    head1: "Alexander Graham Bell",
    head2: "Alexander Graham Bell (born Alexander Bell; March 3, 1847 , August 2, 1922) was a Scottish-born[N 1] inventor, scientist and engineer who is credited with patenting the first practical telephone. He also co-founded the American Telephone and Telegraph Company (AT&T) in 1885. Italian"


}]

button.addEventListener("click", function () {
    var img = Math.round(Math.random() * 2);
    image.src = gallery[img].imgsrc;
    title.innerHTML = gallery[img].head1;
    para.innerHTML = gallery[img].head2;
})