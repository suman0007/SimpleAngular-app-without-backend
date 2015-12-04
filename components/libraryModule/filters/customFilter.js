//Implementing this filter based on teacher Avaliability
app.filter('teacherAvail', function() {
  return function(input,scope) {
    if(scope.chacked){
        var output = [];
        angular.forEach(input, function(lib_informations) {

          if (lib_informations.teacher_in_the_library === 'Yes ') {
            output.push(lib_informations)
          }

        });

        return output;
    }else{
        return input;
    }
  }
});
