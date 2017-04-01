//HTML태그를 미리 만들어서 변수에 담았다.
//필요에 따라 수정해도 좋다.

var smsfavorite='<span>%data%</span>',
    HTMLName = '<h1 id="name">%data%</h1>',
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
  smsfavorite: "감자로만든 음식을 좋아합니다.",
  myname: "신명상은",
  myage: "25살입니다.",
  education: "건국대학교에 재학중입니다.",
  major: "응용통계학을 전공하고 있습니다.",
  phone: "제 휴대폰 번호는 01031539505입니다.",
  email: "이메일은mongddangand@naver.com입니다.",
 



  display: function (){

    //HTML태그의 %data%를 모델의 값으로 대체하기
    var NewHi =smsfavorite.replace("%data%",model.smsfavorite);
    var NewName = HTMLName.replace("%data%", model.myname);
    var NewAge = HTMLAge.replace("%data%", model.myage);
    var NewEducation = HTMLEducation.replace("%data%", model.education);
    var NewMajor  = HTMLMajor.replace("%data%",model.major);
    var NewPhone = HTMLPhone.replace("%data%",model.phone);
    var NewEmail = HTMLEmail.replace("%data%",model.email);
  


    // 원하는 위치에 추가하기
    // jquery selector를 이용해서, 동적으로 원하는 위치에 미리 만들어둔 HTML 태그를 추가한다.
    $('.selector').append(NewHi);
    $('.selector').prepend(NewName);
    $('.selector').append(NewAge);
    $('.selector').append(NewEducation);
    $('.selector').append(NewMajor);
    $('.selector').append(NewEmail);



  }
}

//수정불가
//컨트롤러를 통해서 model.display를 실행합니다.
function contoller(){
  model.display();
}

contoller();
