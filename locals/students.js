let student_name = "Moha";


function setName( new_name )
{
    student_name = new_name;
}


function getName()
{
    return student_name;
}

module.exports = {
    setName,
    getName
}