//HTML태그를 미리 만들어서 변수에 담았다.
//필요에 따라 수정해도 좋다.
var HTMLName = '%data%',
    HTMLAge = '<span>%data%</span>',
    HTMLEducation = '<span>%data%</span>',
    HTMLMajor = '<span>%data%</span>',
    HTMLPhone = '<span>%data%</span>',
    HTMLEmail = '<span>%data%</span>',
    HTMLAddress = '<span>%data%</span>';


//자기소개에 필요한 정보를 담았다.
//필요에 따라 추가해도 좋다.

var model = {
  name: "Song Jiyeon",
  age: "Born in 1994",
  education: "Konkuk University",
  major: "My Major is Applied Statistic",
  phone: "01062586202",
  email: "carol.jiyeon.song@gmail.com",
  address: "Mt.Bukhan",

  display: function (){
    
    //HTML태그의 %data%를 모델의 값으로 대체하기
    var NewName = HTMLName.replace("%data%", model.name);
    var NewAge = HTMLAge.replace("%data%", model.age);
    var NewEducation = HTMLEducation.replace("%data%", model.education);
    var NewMajor = HTMLMajor.replace("%data%", model.major);
    var NewPhone = HTMLPhone.replace("%data%", model.phone);
    var NewEmail = HTMLEmail.replace("%data%", model.email);
    var NewAddress = HTMLAddress.replace("%data%", model.address);


    // 원하는 위치에 추가하기
    // jquery selector를 이용해서, 동적으로 원하는 위치에 미리 만들어둔 HTML 태그를 추가한다.
    $('.media-heading').append(NewName);
    $('.born').append(NewAge);
    $('.school').append(NewEducation);
    $('.major').append(NewMajor);
    $('.phone').append(NewPhone);
    $('.email').append(NewEmail);
    $('.address').append(NewAddress);

  }
}

//수정불가
//컨트롤러를 통해서 model.display를 실행합니다.
function controller(){
  model.display();
}

controller();