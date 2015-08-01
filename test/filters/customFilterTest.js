describe('TeacherAvail filter', function() {

  var $filter;
    
  beforeEach(module('myApp'));
    
  beforeEach( inject(function (_teacherAvail_) {
   $filter = _teacherAvail_;
  }));


  it('returns the correct value when given a string of chars', function() {
    //var input ={};
    //var result = {};
    //expect($filter(input)).toEqual(result);
  });
});