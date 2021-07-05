name_of_the_students_array=[];

function sumbit(){

var name_1 = document.getElementById("name_of_the_student_one").value;
var name_2 = document.getElementById("name_of_the_student_two").value;
var name_3 = document.getElementById("name_of_the_student_three").value;
var name_4 = document.getElementById("name_of_the_student_four").value;

name_of_the_students_array.push(name_1);
name_of_the_students_array.push(name_2);
name_of_the_students_array.push(name_3);
name_of_the_students_array.push(name_4);
console.log(name_of_the_students_array);

document.getElementById("display_name").innerHTML = name_of_the_students_array;
document.getElementById("submit_1").style.display = "none";
document.getElementById("sort_1").style.display = "inline-block";


}

function sort(){

   name_of_the_students_array.sort();

   console.log(name_of_the_students_array);

   document.getElementById("display_name").innerHTML = name_of_the_students_array;



}


