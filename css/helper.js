//HTML태그를 미리 만들어서 변수에 담았다.
//필요에 따라 수정해도 좋다.

var HTMLName = '<h1 id="name">%data%</h1>',
    HTMLAge = '<span>%data%</span>',
    HTMLEducation = '<span>%data%</span>',
    HTMLMajor = '<span>%data%</span>',
    HTMLPhone = '<span>%data%</span>',
    HTMLEmail = '<span>%data%</span>',
    HTMLAddress = '<span>%data%</span>',
    HTMLDescription = '<span>%data%</span>';


//자기소개에 필요한 정보를 담았다.
//필요에 따라 추가해도 좋다.

var model = {
  name: "김지훈",
  age: "24",
  education: "건국대학교",
  major: "경영학과",
  phone: "010123456789",
  email: "hoonie524@gmail.com",
  address: "화양동 건국대학교 경영대학 107-1",
  description: "경영대 쿨가이",

  display: function (){
    
    //HTML태그의 %data%를 모델의 값으로 대체하기
    var NewName = HTMLName.replace("%data%", model.name);
    var NewAge = HTMLAge.replace("%data%", model.age);
    var NewDescription = HTMLDescription.replace("%data%", model.description);
    var NewMajor = HTMLMajor.replace("%data%", model.major);
    var NewEmail = HTMLEmail.replace("%data%", model.email);

    // 원하는 위치에 추가하기
    // jquery selector를 이용해서, 동적으로 원하는 위치에 미리 만들어둔 HTML 태그를 추가한다.
    $('.name').append(NewName);
    $('.age').append(NewAge);
    $('.major').append(NewMajor);
    $('.email').append(NewEmail);
    $('.description').append(NewDescription);
  }
}

//수정불가
//컨트롤러를 통해서 model.display를 실행합니다.
function controller(){
  model.display();
}

controller();
